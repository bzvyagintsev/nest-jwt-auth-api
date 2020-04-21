import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { UserEntity } from './user.entity';

export class User {
  id: string;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async findOne(username: string): Promise<User> {
    let user: User;
    try {
      user = await this.userRepository.findOne({ where: { username } });
    } catch (error) {}
    if (!user) {
      throw new NotFoundException(
        `User with ${JSON.stringify(username)} does not exist`,
      );
    }
    return user;
  }

  async createUser(user: User): Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);

    try {
      return await this.userRepository.save(user);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  // public async getAll(): Promise<User[]> {
  //   let users: User[];

  //   try {
  //     users = await this.userRepository.find();
  //   } catch (error) {}
  //   if (!users) {
  //     throw new NotFoundException(
  //       `Users do not exist`,
  //     );
  //   }
  //   return users;
  // }
}
