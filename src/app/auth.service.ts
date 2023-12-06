import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUsername = 'fonada@125.com';
  private validPassword = 'Fonada@123';

  constructor() { }

  login(username: string, password: string): boolean {
    return username === this.validUsername && password === this.validPassword;
  }
}
