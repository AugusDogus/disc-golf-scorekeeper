import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';

import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user = {} as User;

  constructor (
    public navCtrl: NavController,
    public auth: AuthServiceProvider,
  ) {}

  async Login(user: User) {

  }

  Register(){
    this.navCtrl.setRoot(RegisterPage).catch(e => console.error(e));
  }

  GoogleLogin(){
    // this.auth.googleLogin().then(data => {
    //   console.log('google login data', data);
    // });
  }
}
