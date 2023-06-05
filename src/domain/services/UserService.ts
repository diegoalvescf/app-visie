import { IUser, IUserDTO, UserRepository } from '@domain/models/IUser';
import _ from 'lodash';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  getUsers(): Promise<IUser[]> {
    return this.userRepository.getUsers();
  }

  getUserById(id: IUser['_id']): Promise<IUser> {
    return this.userRepository.getUserById(id);
  }

  createUser(user: IUserDTO): Promise<IUser> {
    return this.userRepository.createUser(user);
  }

  updateUser(id: IUser['_id'], user: IUser): Promise<IUser> {
    return this.userRepository.updateUser(id, user);
  }

  deleteUser(id: IUser['_id']): Promise<void> {
    return this.userRepository.deleteUser(id);
  }
}
