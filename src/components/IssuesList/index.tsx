import { useState, useCallback } from "react";
import { IResponseIssuesItems } from "../../services/types";
import LabelsList from "../LabelsList/index";
import * as S from "./styles";
import { Issue } from "./styles";
import useKeyPress from "../../hooks/keypress";

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

  const selectPreviousIssue = useCallback(() => {
    if (activeIssue === 0) {
      return;
    }

    setActiveIssue((prevActiveIssue) => prevActiveIssue - 1);
  }, [activeIssue]);
  useKeyPress("ArrowUp", () => selectPreviousIssue());

  const openActiveIssueInNewTab = useCallback(() => {
    const { html_url } = issues[activeIssue];

    openInNewTab(html_url);
  }, [issues, activeIssue]);
  useKeyPress("Enter", () => openActiveIssueInNewTab());

  const onSelect = (selectedIndex: number) => {
    setActiveIssue(selectedIndex);
    const { html_url } = issues[selectedIndex];

    openInNewTab(html_url);
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  if (!issues.length) {
    return <S.NoIssues>No issues found!</S.NoIssues>;
  }

  return (
    <S.IssuesList>
      {issues.map(({ id, title, labels }, index) => (
        <Issue
          isActive={index === activeIssue}
          key={id}
          onClick={() => onSelect(index)}
        >
          {title}
          <br />
          <LabelsList labels={labels} />
        </Issue>
      ))}
    </S.IssuesList>
  );
};

export default IssuesList;
