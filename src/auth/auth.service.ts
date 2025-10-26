import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthService {


  registerUser() {
    return { message: 'User registered successfully' };
  }

  loginUser() {
    return { message: 'User logged in successfully' };
  }

  verifyToken() {
    return { message: 'Token is valid' };
  }

}