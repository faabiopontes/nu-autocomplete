import { IResponseIssues } from "./types";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import api from './api';

const milisecondsWaitedBeforeDoingRequest = 300;
const resultsPerPage = 15;

const searchAPI = (terms: string[]) => {
  return api.get<IResponseIssues>(
    `https://api.github.com/search/issues?q=${terms.join(" ")}&per_page=${resultsPerPage}`
  );
}

const searchAPIDebounced = AwesomeDebouncePromise(
  searchAPI,
  milisecondsWaitedBeforeDoingRequest
);

export const searchIssuesByText = async (text: string) => {
  const terms = [text.trim(), `repo:facebook/react`];

  const response = await searchAPIDebounced(terms);
  const issues = response.items;
  return issues;
};
