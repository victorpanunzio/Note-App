import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  /**
   * Method for redirect to Register Page
   * @returns Returns void
   */
  redirect():void{
    this.navCtrl.setRoot(RegisterPage);
  }

}
