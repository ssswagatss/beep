import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { IonicModule } from 'ionic-angular/module';
@NgModule({
	declarations: [LoginFormComponent],
	imports: [IonicModule],
	exports: [
		LoginFormComponent
	]
})
export class ComponentsModule { }
