import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/models/auth-response.dto';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  login() {
    console.log(this.form.value);
    this.http
      .post<AuthResponse>(
        'https://localhost:7243/api/Auth/Login',
        this.form.value
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']);
        },
        error: (error) => console.log(error),
      });
  }
}
