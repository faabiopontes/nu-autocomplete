export interface IHeaders {
  Accept: string;
  Authorization?: string;
}

export interface IResponseIssues {
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
}