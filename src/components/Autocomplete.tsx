import { useState } from "react";
interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete = ({ suggestions = [] }: AutocompleteProps) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<AutocompleteProps["suggestions"]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setUserInput(userInput);
  };
  const onKeyDown = () => {};
  const onClick = () => {};

  let suggestionsListComponent;
  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            return (
              <li key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>No suggestions!</em>
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
        value={userInput}
      />
      {suggestionsListComponent}
    </>
  );
};

export default Autocomplete;