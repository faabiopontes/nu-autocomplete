import { IssuesListIssues } from "./types";
import { mockLabels } from "../LabelsList/mocks";

export const mockIssues: IssuesListIssues[] = [
  {
    id: "1",
    title: "title-1",
    html_url: "html_url-1",
    labels: mockLabels,
  },
];
