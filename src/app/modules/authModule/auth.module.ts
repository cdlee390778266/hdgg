import { NgModule } from '@angular/core';

import { SharedModule } from '../sharedModule/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetpwdComponent } from './getpwd/getpwd.component';
import { SetpwdComponent } from './setpwd/setpwd.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    GetpwdComponent,
    SetpwdComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
