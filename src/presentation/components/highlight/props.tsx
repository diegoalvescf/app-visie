import { TextProps, ViewProps } from 'react-native';

export interface HighlightProps {
  title: string;
  subtitle?: string;
  elements?: {
    containerProps?: ViewProps;
    titleProps?: TextProps;
    subtitleProps?: TextProps;
  };
}
