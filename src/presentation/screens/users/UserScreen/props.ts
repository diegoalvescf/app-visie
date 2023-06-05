import { IUser } from '@domain/models/IUser';

export interface IFieldValues {
  _id: string;
  name: string;
  rg: string;
  cpf: string;
  dateOfBirth: string;
  admissionDate: string;
}

export type valueName = 'name' | 'rg' | 'cpf' | 'dateOfBirth' | 'admissionDate';

export interface IUserRouteProps {
  user?: IUser;
  action: 'show' | 'edit' | 'register';
}
