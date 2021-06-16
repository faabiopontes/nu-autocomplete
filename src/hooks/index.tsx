import { FC } from 'react';
import { ToastProvider } from './toast';

const AppProvider: FC = ({ children }) => (
  <ToastProvider>{children}</ToastProvider>
);

export default AppProvider;
