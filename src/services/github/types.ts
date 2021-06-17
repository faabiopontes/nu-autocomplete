export interface GitHubIssuesResponse {
  items: GitHubIssuesResponseItems[];
}

export interface GitHubIssuesResponseItems {
  id: string;
  html_url: string;
  title: string;
  labels: GitHubIssuesResponseItemsLabels[];
}

export interface GitHubIssuesResponseItemsLabels {
  id: number;
  name: string;
  color: string;
}