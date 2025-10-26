import { Get, Module, Post } from '@nestjs/common';

@Module({
  controllers: [],
  providers: [],
})
export class AuthModule {

  @Post("register")
  registerUser() {
    return 'Auth Module Works!';
  }

  @Post("login")
  loginUser() {
    return 'Login Works!';
  }

  @Get("verify")
  verifyToken() {
    return 'Token verified';
  }

}
