import { FC } from 'react';
import { useTransition } from 'react-spring';
import { IToastMessage } from '../../hooks/toast';

import { Container } from './styles';
import Toast from './Toast';

interface IToastContainerProps {
  messages: IToastMessage[];
}

const ToastContainer: FC<IToastContainerProps> = ({ messages }) => {
  const toastsWithTransitions = useTransition(messages, message => message.id, {
    from: { right: '-120%' },
    enter: { right: '0%' },
    leave: { right: '-120%' },
  });
  return (
    <Container>
      {toastsWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} toast={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
