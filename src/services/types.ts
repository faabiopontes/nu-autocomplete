export interface IHeaders {
  Accept: string;
  Authorization?: string;
}

export interface IResponseIssues {
  total_count: number;
  imcomplete_results: boolean;
  items: IResponseIssuesItems[];
}

export interface IResponseIssuesItems {
  id: string;
  url: string;
  title: string;
  labels: IResponseIssuesItemsLabels;
}

interface IResponseIssuesItemsLabels {
  id: number;
  url: string;
  name: string;
  color: string;
  default: boolean;
}