import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export enum ETypeButtonIcon {
  primary = 'PRIMARY',
  secondary = 'SECONDARY',
}

export type TButtonIconMode = ETypeButtonIcon;

export interface ButtonIconProps extends TouchableOpacityProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
  type?: TButtonIconMode;
  titleViewMore?: string;
}

export interface ButtonIconStyleProps {
  type: TButtonIconMode;
}
