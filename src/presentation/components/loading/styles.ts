import { ActivityIndicator } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ILoadingProps } from './props';

export const Container = styled(ActivityIndicator).attrs({
  size: 'large',
})<ILoadingProps>`
  ${({ theme, bgColor }) => css`
    color: ${theme.colors.white};
    background-color: ${bgColor ? bgColor : theme.colors.gray_700};
  `}
  flex: 1;
`;
