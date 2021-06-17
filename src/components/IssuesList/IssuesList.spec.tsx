import { render } from "@testing-library/react";
import IssuesList from "./index";
import { mockIssues } from "./mocks";

describe("LabelsList", () => {
  it("should be rendered", () => {
    const { getByText } = render(<IssuesList issues={mockIssues} />);
    const issueElement = getByText(mockIssues[0].title);

    expect(issueElement).toBeDefined();
  });
});
