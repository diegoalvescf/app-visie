export interface IUserDTO {
  name: string;
  rg?: string;
  cpf?: string;
  dateOfBirth?: string;
  admissionDate?: string;
  role?: string;
}

export interface IUser extends IUserDTO {
  _id: string;
}

export interface UserRepository {
  getUsers(): Promise<IUser[]>;
  getUserById(id: IUser['_id']): Promise<IUser>;
  createUser(user: IUserDTO): Promise<IUser>;
  updateUser(id: IUser['_id'], user: IUser): Promise<IUser>;
  deleteUser(id: IUser['_id']): Promise<void>;
}
