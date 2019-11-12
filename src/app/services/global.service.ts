import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  isLoggedIn = false;

  constructor() { }

  setSession(){
    this.isLoggedIn = true;
  }

  getSession(){
    return this.isLoggedIn;
  }
}
