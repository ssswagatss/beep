import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {


  constructor(private navCtrl: NavController) {
    console.log('Hello LoginFormComponent Component');
  }

  navigateToPage(page: string) {
    page === 'TabsPage' ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.push(page);
  }
}
