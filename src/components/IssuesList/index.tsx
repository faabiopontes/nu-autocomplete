import { IResponseIssuesItems } from "../../services/types";
import LabelsList from '../LabelsList/index';

interface ComponentProps {
  issues: IResponseIssuesItems[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export interface IssueItem extends HTMLLIElement {
  dataset: {
    index: string;
  };
}

const IssuesList = ({
  issues,
  activeIndex,
  onSelect,
}: ComponentProps) => {
  if (!issues.length) {
    return (
      <div className="no-issues">
        <em>No issues found!</em>
      </div>
    );
  }

  return (
    <ul className="issues">
      {issues.map(({ id, title, labels }, index) => {
        let className;

        if (index === activeIndex) {
          className = "issue-active";
        }

        return (
          <li className={className} key={id} onClick={() => onSelect(index)}>
            {title}
            <br/>
            <LabelsList labels={labels} />
          </li>
        );
      })}
    </ul>
  );
};

export default IssuesList;
