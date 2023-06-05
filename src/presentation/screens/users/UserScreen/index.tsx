import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { Alert, KeyboardTypeOptions } from 'react-native';
import { INPUTS, schema } from './data';
import {
  Container,
  CancelButton,
  Footer,
  Header,
  Input,
  InputList,
  SaveButton,
  DeleteButton,
} from './styles';
import { UserDataRepository } from '@domain/repositories/UserRepository';
import { UserService } from '@domain/services/UserService';
import { IFieldValues, IUserRouteProps, valueName } from './props';
import { useEffect, useState } from 'react';
import { ERouteName } from '@infra/config/routes/routes';

export const UserScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const { action, user } = useRoute().params as IUserRouteProps;
  const [currentAction, setCurrentAction] = useState<
    'show' | 'edit' | 'register' | 'delete'
  >(action);
  const userRepository = new UserDataRepository();
  const userService = new UserService(userRepository);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset: resetForm,
  } = useForm<IFieldValues>({
    resolver: yupResolver(schema),
  });

  const handleEditSubmit = (data: IFieldValues) => {
    setLoading(true);
    userService
      .updateUser(user?._id, data)
      .then((updatedUser) => {
        Alert.alert('Usuário atualizado');
        console.log('Usuário atualizado:', updatedUser);
        navigate(ERouteName.UsersScreen);
      })
      .catch((error) => {
        Alert.alert('Erro ao atualizar o usuário!');
        console.error('Erro ao atualizar o usuário:', error);
      });

    setLoading(false);
  };

  const handleCreateSubmit = (data: IFieldValues) => {
    setLoading(true);
    userService
      .createUser(data)
      .then((createdUser) => {
        Alert.alert('Novo usuário criado');
        console.log('Novo usuário criado:', createdUser);
        navigate(ERouteName.UsersScreen);
      })
      .catch((error) => {
        Alert.alert('Erro ao criar o usuário!');
        console.error('Erro ao criar o usuário:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDeleteSubmit = () => {
    setLoading(true);
    userService
      .deleteUser(user?._id)
      .then(() => {
        Alert.alert('Usuário removido com sucesso');
        navigate(ERouteName.UsersScreen);
      })
      .catch((error) => {
        Alert.alert('Erro ao excluir o usuário!');
        console.error('Erro ao excluir o usuário:', error);
      });

    setLoading(false);
  };

  const onSubmit = handleSubmit((data: IFieldValues) => {
    currentAction === 'edit'
      ? handleEditSubmit(data)
      : handleCreateSubmit(data);
  });

  const handleSave = () => {
    setCurrentAction(currentAction === 'edit' ? 'edit' : 'register');

    onSubmit();
  };

  const handleEdit = () => {
    setCurrentAction('edit');
  };

  const handleCancel = () => {
    navigate(ERouteName.UsersScreen);
  };

  const handleDelete = () => {
    setCurrentAction('delete');
    Alert.alert('Confirmação', 'Tem certeza que deseja excluir o usuário?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Confirmar',
        style: 'destructive',
        onPress: () => {
          handleDeleteSubmit();
        },
      },
    ]);
  };

  useEffect(() => {
    if ((user && currentAction === 'show') || currentAction === 'edit') {
      resetForm(user);
    }
  }, [user, currentAction, resetForm]);

  return (
    <Container>
      <Header
        showBackButton
        onPress={goBack}
      />

      <InputList>
        {INPUTS.map((item, index) => {
          const itemName = item.name as valueName;
          return (
            <Controller
              key={item.id}
              control={control}
              name={itemName}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  key={item.id}
                  placeholder={item.placeholder}
                  errorMessage={errors[itemName]?.message}
                  onChangeText={(e: string) => {
                    onChange(item?.onChangeText(e));
                  }}
                  value={value ? String(value) : undefined}
                  maxLength={item.maxLength}
                  onBlur={onBlur}
                  editable={currentAction !== 'show'}
                  returnKeyType={INPUTS.length === index + 1 ? 'send' : 'next'}
                  autoCapitalize={item.autoCapitalize}
                  autoCorrect={item.autoCorrect}
                  keyboardType={
                    item.keyboardType as KeyboardTypeOptions | undefined
                  }
                />
              )}
            />
          );
        })}
      </InputList>
      <Footer>
        {currentAction === 'show' || currentAction === 'delete' ? (
          <>
            <SaveButton
              title='Editar usuário'
              onPress={handleEdit}
            />
            <DeleteButton
              title='Excluir usuário'
              onPress={handleDelete}
            />
          </>
        ) : (
          <>
            <SaveButton
              title='Salvar'
              onPress={handleSave}
              loading={loading}
            />
            <CancelButton
              title='Cancelar'
              onPress={handleCancel}
            />
          </>
        )}
      </Footer>
    </Container>
  );
};
