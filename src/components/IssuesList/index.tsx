import { useState } from "react";
import { IResponseIssuesItems } from "../../services/types";
import LabelsList from "../LabelsList/index";
import * as S from "./styles";
import useKeyPress from "../../hooks/keypress";
import { openInNewTab } from "../../utils/index";

interface ComponentProps {
  issues: IResponseIssuesItems[];
}

export interface IssueItem extends HTMLLIElement {
  dataset: {
    index: string;
  };
}

const IssuesList = ({ issues }: ComponentProps) => {
  const [activeIssue, setActiveIssue] = useState(0);

  const selectNextIssue = () => {
    if (activeIssue === issues.length - 1) {
      return;
    }

    setActiveIssue((prevActiveIssue) => prevActiveIssue + 1);
  };
  useKeyPress("ArrowDown", () => selectNextIssue());

  const selectPreviousIssue = () => {
    if (activeIssue === 0) {
      return;
    }

    setActiveIssue((prevActiveIssue) => prevActiveIssue - 1);
  };
  useKeyPress("ArrowUp", () => selectPreviousIssue());

  const openActiveIssueInNewTab = () => {
    const { html_url } = issues[activeIssue];

    openInNewTab(html_url);
  };
  useKeyPress("Enter", () => openActiveIssueInNewTab());

  const onSelect = (selectedIndex: number) => {
    setActiveIssue(selectedIndex);
    const { html_url } = issues[selectedIndex];

    openInNewTab(html_url);
  };

  if (!issues.length) {
    return <S.NoIssues>No issues found!</S.NoIssues>;
  }

  return (
    <S.IssuesList>
      {issues.map(({ id, title, labels }, index) => (
        <S.Issue
          isActive={index === activeIssue}
          key={id}
          onClick={() => onSelect(index)}
        >
          {title}
          <br />
          <LabelsList labels={labels} />
        </S.Issue>
      ))}
    </S.IssuesList>
  );
};

export default IssuesList;
