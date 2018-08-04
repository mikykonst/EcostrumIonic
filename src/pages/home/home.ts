import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {MainPage} from "../main/main";
import {AndroidFingerprintAuth} from "@ionic-native/android-fingerprint-auth";
import {ProductProvider} from "../../providers/product/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
              private authService: AuthServiceProvider,
              private alertCtrl: AlertController,
              private fingerPrint: AndroidFingerprintAuth,
              private service: ProductProvider) {
  }

  loginUser() {
    this.authService.login();
  }
  ionViewDidLoad() {
    this.nextPage();
  }

  test() {
    this.service.getAllProducts().subscribe(res => {
      console.log(res);
    }, error1 => console.log(error1));
  }
  nextPage() {
    this.fingerPrint.isAvailable()
      .then(res => {
        if (res.isAvailable) {
          this.fingerPrint.encrypt({clientId: 'ecostrumManager', username: 'mikykonst', password: '0000'})
            .then(res => {
              if (res.withFingerprint) {
                this.loginUser();
                this.navCtrl.push(MainPage);
              } else if (res.withBackup) {
                this.loginUser();
                this.navCtrl.push(MainPage);
              } else {
                let alert = this.alertCtrl.create({
                  title: 'Access denied!',
                  subTitle: 'Wrong password or login!',
                  buttons: ['Okay']
                });
                alert.present().catch(err => console.log(err));
              }
            }).catch(err => {
            if (err === this.fingerPrint.ERRORS.FINGERPRINT_CANCELLED) {
              console.log('Fingerprint authentication cancelled');
            } else console.log(err);
          });
        } else {
        }
      }).catch(err => console.log(err));

  }
}
