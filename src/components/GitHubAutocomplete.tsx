import { KeyboardEvent, MouseEvent, useState } from "react";
import { searchIssuesByText } from '../services/api';
import { IResponseIssuesItems } from '../services/types';

const GitHubAutocomplete = () => {
  const [activeIssue, setActiveIssue] = useState(0);
  const [filteredIssues, setFilteredIssues] = useState<IResponseIssuesItems[]>([]);
  const [showIssues, setShowIssues] = useState(false);
  const [userInput, setUserInput] = useState("");

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    setUserInput(userInput);
    
    const issues = await searchIssuesByText(userInput);
    setActiveIssue(0);
    setFilteredIssues(issues);
    setShowIssues(true);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const pressedKey = e.key;
    console.log({ pressedKey });

    switch (pressedKey) {
      case "Enter":
        // @TODO - Review what will be done when Enter is pressed
        // setActiveIssue(0);
        // setShowIssues(false);
        // setUserInput(filteredIssues[activeIssue]);
        break;

      case "ArrowUp":
        if (activeIssue === 0) {
          return;
        }

        setActiveIssue((activeIssue) => activeIssue - 1);
        break;

      case "ArrowDown":
        if (activeIssue - 1 === filteredIssues.length) {
          return;
        }

        setActiveIssue((activeIssue) => activeIssue + 1);
        break;
    }
  };

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    const selectedElementText = e.currentTarget.innerText;

    setActiveIssue(0);
    setFilteredIssues([]);
    setShowIssues(false);
    setUserInput(selectedElementText);
  };

  let issuesListComponent;
  if (showIssues && userInput) {
    if (filteredIssues.length) {
      issuesListComponent = (
        <ul className="issues">
          {filteredIssues.map(({ id, title, labels}, index) => {
            let className;

            if (index === activeIssue) {
              className = "issue-active";
            }

            return (
              <li className={className} key={id} onClick={onClick}>
                {title}
              </li>
            );
          })}
        </ul>
      );
    } else {
      issuesListComponent = (
        <div className="no-issues">
          <em>No issues found!</em>
        </div>
      );
    }
  }

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        // create a onBlur event to hide the list?
        value={userInput}
      />
      {issuesListComponent}
    </>
  );
};

export default GitHubAutocomplete;
