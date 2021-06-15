import axios from "axios";
import { IHeaders, IResponseIssues } from "./types";
import AwesomeDebouncePromise from "awesome-debounce-promise";

const githubPersonalAccessToken =
  process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;
console.log({ githubPersonalAccessToken });

const headers: IHeaders = {
  Accept: "application/vnd.github.v3+json",
};

if (githubPersonalAccessToken) {
  headers.Authorization = `Bearer ${githubPersonalAccessToken}`;
}

const api = axios.create({
  baseURL: "https://api.github.com",
  headers,
});
const milisecondsWaitedBeforeDoingRequest = 300;
const resultsPerPage = 10;

const searchAPI = (terms: string[]) =>
  api.get<IResponseIssues>(
    `search/issues?q=${terms.join(" ")}&per_page=${resultsPerPage}`
  );
const searchAPIDebounced = AwesomeDebouncePromise(
  searchAPI,
  milisecondsWaitedBeforeDoingRequest
);

export const searchIssuesByText = async (text: string) => {
  console.log("searchIssuesByText");
  const terms = [text.trim(), `repo:facebook/react`];
  console.log({ terms });

  const response = await searchAPIDebounced(terms);
  const issues = response.data.items;
  return issues;
};
