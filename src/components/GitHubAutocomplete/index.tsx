import { useState, useCallback } from "react";
import useKeyPress from "../../hooks/keypress";
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

  const selectNextIssue = () => {
    if (activeIssue === filteredIssues.length - 1) {
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

  const onSelect = (selectedIndex: number) => {
    setActiveIssue(selectedIndex);
  };

  return (
    <>
      <Input
        type="text"
        onChange={onChange}
        value={userInput}
        placeholder="Type here to get React issues"
      />
      <p>{activeIssue}</p>
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
