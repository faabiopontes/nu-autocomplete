import { IResponseIssuesItems } from "../../services/types";
import LabelsList from '../LabelsList/index';
import * as S from './styles';
import { Issue } from './styles';

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
      <S.NoIssues>No issues found!</S.NoIssues>
    );
  }

  return (
    <S.IssuesList>
      {issues.map(({ id, title, labels }, index) => {
        let isActive = index === activeIndex;

        return (
          <Issue isActive={isActive} key={id} onClick={() => onSelect(index)}>
            {title}
            <br/>
            <LabelsList labels={labels} />
          </Issue>
        );
      })}
    </S.IssuesList>
  );
};

export default IssuesList;
