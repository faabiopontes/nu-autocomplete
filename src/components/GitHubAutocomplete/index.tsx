import { KeyboardEvent, useState } from "react";
import { useToast } from "../../hooks/toast";
import { searchIssuesByText } from "../../services/api";
import { IResponseIssuesItems } from "../../services/types";
import IssuesList from "../IssuesList";
import { Input, Loading } from "./styles";

const GitHubAutocomplete = () => {
  const [activeIssue, setActiveIssue] = useState(0);
  const [filteredIssues, setFilteredIssues] = useState<IResponseIssuesItems[]>(
    []
  );
  const [showIssues, setShowIssues] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast();

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    setUserInput(userInput);
    setIsLoading(true);

    try {
      const issues = await searchIssuesByText(userInput);
      setActiveIssue(0);
      setFilteredIssues(issues);
      setShowIssues(true);
    } catch (err) {
      addToast({
        type: "error",
        title: err.message,
        description: `An error as ocurred while searching for issues. Try again later`,
      });
    } finally {
      setIsLoading(false);
    }
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

  const onSelect = (selectedIndex: number) => {
    setActiveIssue(selectedIndex);
    setShowIssues(true);
  };

  return (
    <>
      <Input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        // create a onBlur event to hide the list?
        value={userInput}
        placeholder="Type here to get React issues"
      />
      {userInput && showIssues && (
        <IssuesList
          onSelect={onSelect}
          issues={filteredIssues}
          activeIndex={activeIssue}
        />
      )}
      {isLoading && <Loading>Loading Issues...</Loading>}
    </>
  );
};

export default GitHubAutocomplete;
