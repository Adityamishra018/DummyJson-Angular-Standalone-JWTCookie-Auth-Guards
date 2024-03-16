import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @ViewChild('loginForm') form : NgForm;

  example = JSON.stringify({
    user : 'kminchelle',
    pwd : '0lelplR'
  },undefined,'\t')

  constructor(public auth : AuthService){}

  login(){
    this.auth.login(this.form.value)
  }
}
