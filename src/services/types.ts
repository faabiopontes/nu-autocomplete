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
  html_url: string;
  title: string;
  labels: IResponseIssuesItemsLabels[];
}

export interface IResponseIssuesItemsLabels {
  id: number;
  name: string;
  color: string;
  default: boolean;
}