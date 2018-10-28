import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  fg : FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, public api: HttpServiceProvider, public loadingController: LoadingController) {
    this.fg = new FormGroup({
      name: new FormControl (null, [Validators.required,Validators.pattern(/[A-Za-z]+/)]),
      lastname: new FormControl (null, [Validators.required,Validators.pattern(/[A-Za-z]+/)]),
      email: new FormControl (null, [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      username: new FormControl (null, [Validators.required,Validators.pattern(/[A-Za-z]+/)]),
      password: new FormControl (null, [Validators.required]),
      confPass: new FormControl (null, [Validators.required]),
    }, this.passwordMatchValidator)
  }

  

  ionViewDidLoad() {
  }

  passwordMatchValidator = function(fg: FormGroup) {
    return fg.get('pass').value === fg.get('confPass').value ? null : { 'mismatch': true };
  }

  register(): void{
    if(this.fg.valid){
      console.log(this.fg.value);
      this.api.postSignUp(this.fg.value)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
    }
    else{
      console.log("No es valido");
    }
  }

  /**
   * Method for redirect to Register Page
   * @returns Returns void
   */
  redirect(): void{
    this.navCtrl.setRoot(HomePage);
  }
}
