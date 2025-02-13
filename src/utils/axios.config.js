import axios from "axios";

// Set global base URL
axios.defaults.baseURL = "http://localhost:9090";

export const Client = axios.create({
  baseURL: "http://localhost:9090",
});
