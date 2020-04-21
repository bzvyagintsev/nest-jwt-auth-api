import {
  Controller,
  Request,
  UseGuards,
  Post,
  Body,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('users')
  // async getUsers(@Request() req) {
  //   return this.usersService.getAll();
  // }

  @Post('auth/signup')
  async signUp(@Body() user) {
    return this.authService.signUp(user);
  }
}
