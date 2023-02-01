import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/users.schema';
import ISearchUserParams from 'src/interface/ISearchUserParams';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  public async create(data: Partial<User>): Promise<User> {
    const user = new this.UserModel(data);
    return await user.save();
  }

  public async findById(id: string): Promise<User | null> {
    const user = await this.UserModel.findById(id).select('-__v').exec();
    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.UserModel.findOne({ email: email }).select('-__v');
    return user;
  }

  //   public async findAll(params: ISearchUserParams): Promise<User> {
  //     const user = await this.UserModel.findById(id).select('-__v');
  //     return user;
  //   }
}
