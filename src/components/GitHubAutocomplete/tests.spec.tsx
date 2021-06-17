import { fireEvent, render, waitFor } from "@testing-library/react";
import GitHubAutocomplete from "./index";
import { mockIssues } from "../IssuesList/mocks";

jest.mock("../../services/github", () => ({
  searchIssuesByText: () => mockIssues,
}));

describe("GitHubAutocomplete", () => {
  it("should be rendered", () => {
    const { getByPlaceholderText } = render(<GitHubAutocomplete />);
    const inputElement = getByPlaceholderText("Type here to get React issues");

    expect(inputElement).toBeDefined();
  });

  it("should search and render issues", async () => {
    const { getByPlaceholderText, getByText } = render(<GitHubAutocomplete />);
    const inputElement = getByPlaceholderText("Type here to get React issues");

    fireEvent.change(inputElement, {
      target: { value: "input value" },
    });

    await waitFor(() => {
      const issueElement = getByText(mockIssues[0].title);
      expect(issueElement).toBeDefined();
    });
  });
});
