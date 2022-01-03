import api from "./apiConfig.js";

export const getSocks = async () => {
  try {
    const response = await api.get("/socks");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSock = async (id) => {
  try {
    const response = await api.get(`/socks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSock = async (sock) => {
  try {
    const response = await api.post("/socks", sock);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSock = async (id, sock) => {
  try {
    const response = await api.put(`/socks/${id}`, sock);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSock = async (id) => {
  try {
    const response = await api.delete(`/socks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
