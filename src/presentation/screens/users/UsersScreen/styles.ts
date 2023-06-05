import { ButtonComponent } from '@components/button';
import { HeaderComponent } from '@components/header';
import { HighlightComponent } from '@components/highlight';
import { HighlightProps } from '@components/highlight/props';
import { InputComponent } from '@components/input';
import { UserCardComponent } from '@components/user-card';
import { IUser } from '@domain/models/IUser';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_600};
    padding: ${theme.spacing.xm.responsive}px;
  `}
  flex: 1;
`;

export const SearchInput = styled(InputComponent)`
  margin: ${({ theme }) => theme.spacing.xm.responsive}px 0;
`;

export const Header = styled(HeaderComponent)``;

export const UsersList = styled(FlatList as new () => FlatList<IUser>).attrs({
  showsVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;

export const UserItem = styled(UserCardComponent)``;

export const HighlightFeedback = styled(
  HighlightComponent
).attrs<HighlightProps>(({ theme }) => ({
  elements: {
    containerProps: {
      style: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    titleProps: {
      style: {
        fontSize: theme.typography.fontSize.md.responsive,
        marginBottom: theme.spacing.md.responsive,
        color: theme.colors.gray_300,
      },
    },
  },
}))``;

export const CreateButton = styled(ButtonComponent)`
  margin-top: ${({ theme }) => theme.spacing.xm.responsive}px;
`;
