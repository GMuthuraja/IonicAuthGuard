import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})

export class NavguardService implements CanActivate {

  constructor(private global: GlobalService) { }

  canActivate() {
    let session = this.global.getSession();
    if (session) {
      return true;
    } else {
      alert("You must Login first!");
      return false;
    }
  }
}
