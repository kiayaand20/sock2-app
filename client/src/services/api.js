import axios from "axios";

let url = "https://sock2-app.herokuapp.com/api/socks";

export const getSocks = async () => {
  const response = await axios.get(url);
  return response;
};
