import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID DL9tl5WYVB7YJtIp3pS2HNA7OI9k94KlXZEhpzlYnT8",
  },
});
