import SockSquared from "../models/sock.js";

export const getSocks = async (req, res) => {
  try {
    const sock = await SockSquared.find();
    res.json(sock);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
