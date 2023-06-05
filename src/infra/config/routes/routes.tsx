import { IUser } from '@domain/models/IUser';

export type TReactNavigationStackParamList = {
  UsersScreen: undefined;
  UserScreen: {
    action: 'show' | 'edit' | 'register';
    user?: IUser;
  };
};

export enum ERouteName {
  UsersScreen = 'UsersScreen',

  UserScreen = 'UserScreen',
}
