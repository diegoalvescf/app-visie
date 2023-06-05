import { TouchableOpacityProps } from 'react-native';

export enum EModeButton {
  create = 'create',
  delete = 'delete',
}
export interface ButtonProps extends TouchableOpacityProps {
  type?: EModeButton;
  title: string;
  loading?: boolean;
}

export interface ButtonStyleProps {
  type?: EModeButton;
  disabled: boolean;
}
