import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {ProductProvider} from "../../providers/product/product";

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
fetchedProducts: any;
loading: any;
message: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthServiceProvider,
              private productService: ProductProvider,
              private loadingCtrl: LoadingController) {
    this.loading = loadingCtrl.create({
      content: 'Loading...'
    });
    this.loading.present();
    debugger;
    this.productService.getAllProducts().subscribe((res) => {
      this.loading.dismiss().then(() => {
        this.fetchedProducts = res;
      });
    }, error => {
      console.log(error);
      this.message = error.message;
      this.loading.dismiss();
    });
  }

  ionViewCanEnter(): boolean {
    return this.authService.authentificated();
  }

}
