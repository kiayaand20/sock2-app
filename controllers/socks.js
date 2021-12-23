import SockSquared from "../models/sock.js";

export const getSocks = async (req, res) => {
  try {
    const socks = await SockSquared.find();
    res.json(socks);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getSock = async (req, res) => {
  try {
    const { id } = req.params
    const sock = await SockSquared.findById(id)
    if (sock) {
      return res.json(sock)
    }
    res.status(404).json({ message: 'Sock not found' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message})
  }
}

export const createSock = async (req, res) => {
  try {
    const sock = new SockSquared(req.body)
    await sock.save()
    res.status(201).json(sock)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateSock = async (req, res) => {
  const { id } = req.params
  const sock = await SockSquared.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(sock)
}

export const deleteSock = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await SockSquared.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Sock deleted')
    }
    throw new Error('Sock not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}
