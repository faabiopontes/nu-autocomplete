import { render } from "@testing-library/react";
import LabelsList from "./index";
import { mockLabels } from "./mocks";

describe("LabelsList", () => {
  it("should be rendered", () => {
    const { getByText } = render(<LabelsList labels={mockLabels} />);
    const labelElement = getByText(mockLabels[0].name);

    expect(labelElement).toBeDefined();
  });
});
