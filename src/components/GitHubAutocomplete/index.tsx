import { useState } from "react";
import { useToast } from "../../hooks/toast";
import { searchIssuesByText } from "../../services/github";
import IssuesList from "../IssuesList";
import { Input, Loading } from "./styles";
import { IssuesListIssues } from '../IssuesList/types';

const GitHubAutocomplete = () => {
  const [issues, setIssues] = useState<IssuesListIssues[]>([]);
  const [showIssues, setShowIssues] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast();

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    setUserInput(userInput);

    if (!userInput) {
      setShowIssues(false);
      return;
    }

    try {
      setIsLoading(true);
      const issues = await searchIssuesByText(userInput);
      setIssues(issues);
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

  return (
    <>
      <Input
        type="text"
        onChange={onChange}
        value={userInput}
        placeholder="Type here to get React issues"
      />
      {userInput && showIssues && <IssuesList issues={issues} />}
      {isLoading && <Loading>Loading Issues...</Loading>}
    </>
  );
};

export default GitHubAutocomplete;
