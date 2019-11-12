import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(private global: GlobalService, private router: Router) { }

  ngOnInit() {

  }

  login(){
    this.global.setSession();
  }

  home(){
    this.router.navigateByUrl("/home")
  }

}
