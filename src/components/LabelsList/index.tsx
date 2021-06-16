import { IResponseIssuesItemsLabels } from '../../services/types';
import { Label, Container } from './styles';

interface ComponentProps {
  labels: IResponseIssuesItemsLabels[];
}

const LabelsList = ({
  labels,
}: ComponentProps) => {
  return (
    <Container>
      {labels.map(({ name, id, color }) => (
        <Label
          key={id}
          color={color}
        >
          {name}
        </Label>
      ))}
    </Container>
  );
};

export default LabelsList;
