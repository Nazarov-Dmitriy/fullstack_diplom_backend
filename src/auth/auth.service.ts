import { Injectable } from '@nestjs/common';
import ICreateUserDto from 'src/interface/ICreateUserDto';
import User from 'src/interface/IUser';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import IUserValidate from 'src/interface/IUserValidate';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<IUserValidate | null> {
    console.log('validateUser');
    console.log(email);
    console.log(password);

    const user = await this.usersService.findByEmail(email);
    const validatePass = await bcrypt.compare(password, user.password);

    if (user && validatePass) {
      const result = {
        email: user.email,
        name: user.name,
        contactPhone: user.contactPhone,
        role: user.role,
      };
      return result;
    }
    return null;
  }
}
