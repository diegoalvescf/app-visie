import { View, Text } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(View)`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.sm.responsive}px 0;
`;

export const Title = styled(Text)`
  ${({ theme }) => css`
    line-height: ${theme.typography.lineHeight.xl.responsive}px;
    font-size: ${theme.typography.fontSize.lg.responsive}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.white};
  `}
  text-align: center;
`;

export const Subtitle = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.md.responsive}px;
    line-height: ${theme.typography.lineHeight.md.responsive}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.gray_300};
  `}
  text-align: center;
`;
