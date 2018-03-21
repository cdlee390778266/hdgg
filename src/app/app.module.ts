import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './common/head/head.component';
import { FootComponent } from './common/foot/foot.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { PEComponent } from './pe/pe.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetpwdComponent } from './getpwd/getpwd.component';
import { UserComponent } from './user/user.component';
import { EmailComponent } from './email/email.component';
import { UpdatepwdComponent } from './updatepwd/updatepwd.component';
import { PayComponent } from './pay/pay.component';
import { AuthComponent } from './auth/auth.component';
import { ShareComponent } from './share/share.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    FootComponent,
    NavBarComponent,
    PEComponent,
    LoginComponent,
    RegisterComponent,
    GetpwdComponent,
    UserComponent,
    EmailComponent,
    UpdatepwdComponent,
    PayComponent,
    AuthComponent,
    ShareComponent,
    UpgradeComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
