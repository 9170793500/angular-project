import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: "fonada@125.com";
  password: "Fonada@123";


  constructor(private router: Router, private authService: AuthService) { }

  onLoginSubmit() {
  
    const loggedIn = this.authService.login(this.username, this.password);

    if (loggedIn) {
      this.router.navigate(['/dashboard']); 
    } else {
      console.log('Invalid credentials. Please try again.');
    }
  }
}
