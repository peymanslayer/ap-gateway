import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';
import { Inject } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/userDto/create.user.dto';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH-SERVICE') private readonly client: ClientProxy) {}
  async signUp(user: CreateUserDto) {
    const insertUser = await this.client.send('signUp', user).toPromise();
    return insertUser;
  }

  async signIn(user:CreateUserDto){
   const logInUser=await this.client.send('logIn',user).toPromise();
   return logInUser;
  }
}
