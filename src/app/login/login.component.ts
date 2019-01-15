import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    this.http.request('GET', 'https://api.github.com/users').subscribe((res) => {
      console.log("inetrceptor testing", res)
    });
    this.router.navigate(['/dashboard']);
  }
}
