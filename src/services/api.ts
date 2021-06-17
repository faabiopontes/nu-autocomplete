import axios from "axios";
import { IHeaders } from "./types";

const githubPersonalAccessToken =
  process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

const headers: IHeaders = {
  Accept: "application/vnd.github.v3+json",
};

if (githubPersonalAccessToken) {
  headers.Authorization = `Bearer ${githubPersonalAccessToken}`;
}

axios.create({
  headers,
});

const api = {
  async get<T>(url: string) {
    const response = await axios.get<T>(url);
    return response.data;
  }
}

export default api;