import { IUser } from '@domain/models/IUser';
import { useNavigation } from '@react-navigation/native';
import { ERouteName } from '@routes/routes';
import { useEffect, useState } from 'react';
import { UserDataRepository } from '@domain/repositories/UserRepository';
import { UserService } from '@domain/services/UserService';
import useDebounce from '@hooks/use-debounce';
import { getFirstName } from './helper/getFirstName';
import {
  Container,
  CreateButton,
  Header,
  HighlightFeedback,
  SearchInput,
  UserItem,
  UsersList,
} from './styles';

export const UsersScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const [users, setUsers] = useState<IUser[]>([]);
  const [value, setValue] = useState('');
  const searchText = useDebounce(value, 500);
  const userRepository = new UserDataRepository();
  const userService = new UserService(userRepository);
  const filteredUser =
    users?.filter((obj) =>
      obj.name
        .toLocaleLowerCase()
        .includes((searchText || value).toLocaleLowerCase())
    ) || [];

  useEffect(() => {
    userService.getUsers().then((_users) => setUsers(_users));
  }, [users]);

  return (
    <Container>
      <Header disabled />

      <SearchInput
        placeholder='Procurar usuário'
        onChangeText={(text) => setValue(text)}
        value={value}
        returnKeyType='done'
      />

      <UsersList
        data={filteredUser}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <UserItem
            key={item._id}
            name={getFirstName(item, users)}
            description={`Admissão: ${item.admissionDate}`}
            viewMore={() =>
              navigate(ERouteName.UserScreen, {
                action: 'show',
                user: item,
              })
            }
            titleViewMore={`ver ${'\n'} mais`}
          />
        )}
        ListEmptyComponent={() => (
          <HighlightFeedback title='Não há usuários cadastrados.' />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          users.length === 0 && {
            flex: 1,
          },
        ]}
      />

      <CreateButton
        title='Cadastrar novo usuário'
        onPress={() =>
          navigate(ERouteName.UserScreen, {
            action: 'register',
          })
        }
      />
    </Container>
  );
};
