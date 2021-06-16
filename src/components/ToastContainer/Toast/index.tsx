import { FC, useEffect } from 'react';
import { IToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface IToastProps {
  toast: IToastMessage;
  style: Record<string, unknown>;
}

const Toast: FC<IToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, toast.id]);

  return (
    <Container
      styled={{ hasDescription: Boolean(toast.description), type: toast.type }}
      style={style}
      onClick={() => removeToast(toast.id)}
    >
      <div>
        <strong>{toast.title}</strong>
        {toast.description && <p>{toast.description}</p>}
      </div>
    </Container>
  );
};

export default Toast;
