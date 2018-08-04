import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private isLogged: boolean = false;

  constructor() {}
  login() {
    this.isLogged = true;
  }
  logout() {
    this.isLogged = false;
  }
  authentificated(): boolean {
    return this.isLogged;
  }

}
