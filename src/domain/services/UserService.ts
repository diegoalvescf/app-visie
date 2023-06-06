import { IUser, IUserDTO, UserRepository } from '@domain/models/IUser';
import _ from 'lodash';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUsers(): Promise<IUser[]> {
    return await this.userRepository.getUsers();
  }

  async getUserById(id: IUser['_id']): Promise<IUser> {
    return await this.userRepository.getUserById(id);
  }

  async createUser(user: IUserDTO): Promise<IUser> {
    return await this.userRepository.createUser(user);
  }

  async updateUser(id: IUser['_id'], user: IUser): Promise<IUser> {
    return await this.userRepository.updateUser(id, user);
  }

  async deleteUser(id: IUser['_id']): Promise<void> {
    await this.userRepository.deleteUser(id);
  }
}
