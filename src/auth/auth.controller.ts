import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Session,
  HttpException,
  HttpStatus,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import ICreateUserDto from 'src/interface/ICreateUserDto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthenticatedGuard } from './guards/authentication.guard';

interface IUser {
  _id?: string;
  email: string;
  password: string;
  name: string;
  contactPhone: string;
  role: string;
}

@Controller('api')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async signin(@Request() req) {
    try {
      console.log(req.user);

      return req.user;
    } catch (e) {
      return e;
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/sss')
  async gethe(@Request() req) {

    console.log(req.user);
    return req.user;
  }

  @Post('/client/register')
  async signup(@Body() CreateUserDto: ICreateUserDto) {
    const { password } = CreateUserDto;
    try {
      const hashPassword = await bcrypt.hash(
        password,
        Number(process.env.SALT),
      );

      const user: IUser = await this.usersService.create({
        ...CreateUserDto,
        password: hashPassword,
      });
      console.log(user);

      const { _id, email, name } = user;

      return {
        id: _id,
        email: email,
        name: name,
      };
    } catch (e) {
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Данный еmail уже занят',
      });
    }
  }
}
