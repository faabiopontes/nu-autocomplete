import { KeyboardEvent, MouseEvent, useState } from "react";
interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete = ({ suggestions = [] }: AutocompleteProps) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    AutocompleteProps["suggestions"]
  >([]);
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

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const pressedKey = e.key;
    console.log({ pressedKey });

    switch (pressedKey) {
      case "Enter":
        setActiveSuggestion(0);
        setShowSuggestions(false);
        setUserInput(filteredSuggestions[activeSuggestion]);
        break;

      case "ArrowUp":
        if (activeSuggestion === 0) {
          return;
        }

        setActiveSuggestion((activeSuggestion) => activeSuggestion - 1);
        break;

      case "ArrowDown":
        if (activeSuggestion - 1 === filteredSuggestions.length) {
          return;
        }

        setActiveSuggestion((activeSuggestion) => activeSuggestion + 1);
        break;
    }
  };

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    const selectedElementText = e.currentTarget.innerText;

    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(selectedElementText);
  };

  let suggestionsListComponent;
  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            if (index === activeSuggestion) {
              className = "suggestion-active";
            }

            return (
              <li className={className} key={suggestion} onClick={onClick}>
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
