import { useRef, useState } from "react";
import LabelsList from "../LabelsList/index";
import useKeyPress from "../../hooks/keypress";
import { openInNewTab, scrollToElement } from "../../utils/index";
import { IssuesListComponentProps } from "./types";
import { Container, Issue, NoIssues } from "./styles";

const IssuesList = ({ issues }: IssuesListComponentProps) => {
  const [activeIssue, setActiveIssue] = useState(0);
  const issuesRefs = useRef<Array<HTMLLIElement | null>>([]);

  const selectNextIssue = () => {
    if (activeIssue === issues.length - 1) {
      return;
    }

    const element = issuesRefs.current[activeIssue + 1];
    if (element) {
      scrollToElement(element);
    }

    setActiveIssue((currentActiveIssue) => currentActiveIssue + 1);
  };
  useKeyPress("ArrowDown", () => selectNextIssue());

  const selectPreviousIssue = () => {
    if (activeIssue === 0) {
      return;
    }

    const element = issuesRefs.current[activeIssue - 1];
    if (element) {
      scrollToElement(element, true);
    }

    setActiveIssue((currentActiveIssue) => currentActiveIssue - 1);
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
    return <NoIssues>No issues found!</NoIssues>;
  }

  return (
    <Container>
      {issues.map(({ id, title, labels }, index) => (
        <Issue
          isActive={index === activeIssue}
          ref={(element) => (issuesRefs.current[index] = element)}
          key={id}
          onClick={() => onSelect(index)}
        >
          {title}
          <br />
          <LabelsList labels={labels} />
        </Issue>
      ))}
    </Container>
  );
};

export default IssuesList;
