import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    min-height: ${theme.sizeIcon.xxl.absolute}px;
    max-height: ${theme.sizeIcon.xxl.absolute}px;

    background-color: ${theme.colors.gray_700};
    color: ${theme.colors.white};

    padding-left: ${theme.spacing.xm.responsive}px;

    font-size: ${theme.typography.fontSize.md.responsive}px;
    font-family: ${theme.fonts.regular};
    line-height: ${theme.typography.lineHeight.md.responsive}px;
  `}
  flex: 1;
  width: 100%;
  border-radius: ${RFValue(6)}px;
  justify-content: center;
`;

export const ErrorMessage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.red};
    margin-left: ${({ theme }) => theme.spacing.xs.responsive}px;
  `}
`;
