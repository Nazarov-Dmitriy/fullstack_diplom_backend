import SearchUserParams from './ISearchUserParams';
import IUser from './IUser';

interface IUserService {
  create(data: Partial<IUser>): Promise<IUser>;
  //   findById(id: ID :string): Promise<User>;
  findByEmail(email: string): Promise<IUser>;
  findAll(params: SearchUserParams): Promise<IUser[]>;
}

export default IUserService;
