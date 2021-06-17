import { render } from "@testing-library/react";
import GitHubAutocomplete from './index';

describe("GitHubAutocomplete", () => {
  it("should be rendered", () => {
    const { getByPlaceholderText } = render(<GitHubAutocomplete />);
    const inputElement = getByPlaceholderText('Type here to get React issues');

    expect(inputElement).toBeDefined();
  });
});
