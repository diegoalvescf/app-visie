import { IUser, UserRepository } from '@domain/models/IUser';
import { api } from '@infra/http/axios/api';

export class UserDataRepository implements UserRepository {
  getUsers(): Promise<IUser[]> {
    return api.get('/users').then((response) => response.data);
  }

  getUserById(id: IUser['_id']): Promise<IUser> {
    return api.get(`/users/${id}`).then((response) => response.data);
  }

  createUser(user: IUser): Promise<IUser> {
    return api.post('/users', user).then((response) => response.data);
  }

  updateUser(id: IUser['_id'], user: IUser): Promise<IUser> {
    return api.put(`/users/${id}`, user).then((response) => response.data);
  }

  deleteUser(id: IUser['_id']): Promise<void> {
    return api.delete(`/users/${id}`);
  }
}
