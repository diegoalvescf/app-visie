import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ButtonIconStyleProps, ETypeButtonIcon } from './props';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  margin-left: ${({ theme }) => theme.spacing.md.responsive}px;

  flex-direction: row;
`;

export const DescriptionViewMore = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.green_700};
    text-align: right;
  `}
`;

export const Icon = styled(MaterialIcons).attrs<ButtonIconStyleProps>(
  ({ theme, type }) => ({
    size: theme.sizeIcon.xl.responsive,

    color:
      type === ETypeButtonIcon.primary
        ? theme.colors.green_700
        : theme.colors.red,
  })
)``;
