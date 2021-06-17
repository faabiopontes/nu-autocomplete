import { LabelsListLabels } from '../LabelsList/types';

export interface IssuesListComponentProps {
  issues: IssuesListIssues[];
}

export interface IssuesListIssues {
  id: string;
  title: string;
  html_url: string;
  labels: LabelsListLabels[];
}