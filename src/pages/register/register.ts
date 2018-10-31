import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { User } from '../../models/user';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthServiceProvider,
  ) {}

  private user = {} as User;

  Cancel(){
    this.navCtrl.setRoot(LoginPage).catch(e => console.error(e));
  }

  async Register(user: User) {
    // this.auth.googleLogin()
  }

}


