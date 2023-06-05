import { TextInputProps } from 'react-native';

export interface InputComponentProps extends TextInputProps {
  errorMessage?: string;
}
