import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './router/auth-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from './modules/sharedModule/shared.module';

import { LoginComponent } from './components/authcomponents/login/login.component';
import { RegisterComponent } from './components/authcomponents/register/register.component';
import { GetpwdComponent } from './components//authcomponents/getpwd/getpwd.component';
import { SetpwdComponent } from './components//authcomponents/setpwd/setpwd.component';



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
