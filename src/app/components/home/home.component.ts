import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) Emitters.authEmitter.emit(true);

    // Emitters.authEmitter.subscribe({
    //   next: (auth: boolean) => (this.authenticated = auth),
    //   error: (error: any) => console.log(error),
    // });
  }
}
