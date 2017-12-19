import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Account } from '../../models/account/account.interface'

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account={} as Account;
  @Output() loginStatus:EventEmitter<any>;


  constructor(private navCtrl: NavController, 
    private afAuth : AngularFireAuth, private toast:ToastController) {
    console.log('Hello LoginFormComponent Component');
    this.loginStatus=new EventEmitter<any>();
  }

  navigateToPage(page: string) {
    page === 'TabsPage' ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.push(page);
  }
  async login() {
    try{
     const result = await this.afAuth
     .auth.signInWithEmailAndPassword(this.account.email,this.account.password)
 
     this.toast.create({
       message:'Logged in successfully.',
       duration:3000,
       position:'top'
     }).present();
 
     console.log(result);
     this.loginStatus.emit(result);

    }catch(e){
      this.toast.create({
        message:e.message,
        duration:3000,
        position:'top'
      }).present();
      this.loginStatus.emit(e);
    }
   }
}
