import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  url: string = 'https://back-ecostrum.herokuapp.com/getxmlastext';

  constructor(public http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get(this.url, {
      responseType: 'text'
    });
  }
}
