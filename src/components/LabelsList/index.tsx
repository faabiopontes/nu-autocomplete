import { Label, Container } from "./styles";
import { LabelsListComponentProps } from "./types";

const LabelsList = ({ labels }: LabelsListComponentProps) => {
  return (
    <Container>
      {labels.map(({ name, id, color }) => (
        <Label key={id} color={color}>
          {name}
        </Label>
      ))}
    </Container>
  );
};

export default LabelsList;
