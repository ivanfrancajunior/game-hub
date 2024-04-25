import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "50183535298241738cf71a38e1d61fdb",
  },
});
