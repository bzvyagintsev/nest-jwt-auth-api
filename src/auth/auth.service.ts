import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(user: any) {
    user = await this.usersService.createUser(user);

    return {
      access_token: this.jwtService.sign(user),
    };
  }

  async validateUser(username: string, password: string) {
    const result = await this.usersService
      .findOne(username)
      .then(async user => {
        return await bcrypt
          .compare(password, user.password)
          .then(isValid => {
            return isValid ? user : Promise.reject('Invalid password');
          })
          .catch(err =>
            Promise.reject(new UnauthorizedException(err.toString())),
          );
      })
      .catch(err => console.log(err));

    return result;
  }
}
