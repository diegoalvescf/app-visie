import { ButtonComponent } from '@components/button';
import { EModeButton } from '@components/button/props';
import { HeaderComponent } from '@components/header';
import { InputComponent } from '@components/input';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_600};
    padding: ${theme.spacing.xm.responsive}px;
  `}
  flex: 1;
`;

export const Header = styled(HeaderComponent)``;

export const InputList = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Input = styled(InputComponent)`
  margin: ${({ theme }) => theme.spacing.sm.responsive}px 0;
`;

export const Footer = styled(SafeAreaView).attrs({ edges: ['bottom'] })`
  margin-bottom: ${({ theme }) => theme.spacing.xxl.responsive}px;
`;

export const SaveButton = styled(ButtonComponent).attrs({
  type: EModeButton.create,
})`
  margin-top: ${({ theme }) => theme.spacing.xm.responsive}px;
`;

export const DeleteButton = styled(ButtonComponent).attrs({
  type: EModeButton.delete,
})`
  margin-top: ${({ theme }) => theme.spacing.sm.responsive}px;
`;

export const CancelButton = styled(ButtonComponent).attrs({
  type: EModeButton.cancel,
})`
  margin-top: ${({ theme }) => theme.spacing.sm.responsive}px;
`;
