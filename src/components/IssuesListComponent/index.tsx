import { IResponseIssuesItems } from "../../services/types";
import { Label } from './styles';

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

const IssuesListComponent = ({
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
            <p>Labels:</p>
            <ul>
              {labels.map(({ name, id, color, url }) => (
                <Label
                  key={id}
                  color={color}
                >
                  {name}
                </Label>
              ))}
            </ul>
            
          </li>
        );
      })}
    </ul>
  );
};

export default IssuesListComponent;
