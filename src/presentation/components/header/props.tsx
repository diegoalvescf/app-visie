import { ViewProps } from 'react-native';

export type HeaderProps = {
  showBackButton?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  elements?: {
    containerProps?: ViewProps;
  };
};
