import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { ButtonStyleProps, EModeButton } from './props';

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  ${({ theme, type, disabled }) => css`
    opacity: ${disabled ? 0.3 : 1};
    min-height: ${theme.sizeIcon.xxl.absolute}px;
    max-height: ${theme.sizeIcon.xxl.absolute}px;
    background-color: ${type === EModeButton.create
      ? theme.colors.green_700
      : type === EModeButton.cancel
      ? 'transparent'
      : theme.colors.red_dark};
    ${type === EModeButton.cancel &&
    css`
      border: 2px solid ${theme.colors.red_dark};
    `}
  `}
  flex: 1;
  width: 100%;

  border-radius: ${RFValue(6)}px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.md.responsive}px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.bold};
  `}
`;
