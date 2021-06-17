import { render } from "@testing-library/react";
import { LabelsListLabels } from './types';
import LabelsList from './index';

const mockLabels: LabelsListLabels[] = [
  {
    id: 1,
    name: "name-1",
    color: "red",
  },
];

describe("LabelsList", () => {
  it("should be rendered", () => {
    const { getByText } = render(
      <LabelsList labels={mockLabels} />
    );
    const labelElement = getByText(mockLabels[0].name);

    expect(labelElement).toBeDefined();
  });
});
