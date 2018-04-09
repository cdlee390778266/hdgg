import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/reducer';
import { HttpService } from './service/http.service';
import { HdStateService } from './service/hd.state.service';
import { AuthService } from './service/auth.service';

import { AuthRoutingModule } from './router/auth-routing.module';

import { FootComponent } from './components/common/foot/foot.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';

import { LoginComponent } from './components/authcomponents/login/login.component';
import { RegisterComponent } from './components/authcomponents/register/register.component';
import { GetpwdComponent } from './components//authcomponents/getpwd/getpwd.component';
import { SetpwdComponent } from './components//authcomponents/setpwd/setpwd.component';

import { EmailDirective } from './Directives/email.directive';
import { PhoneDirective } from './directives/phone.directive';

@NgModule({
  declarations: [
    FootComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    GetpwdComponent,
    SetpwdComponent,
    EmailDirective,
    PhoneDirective
  ],
  imports: [
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ reducer: reducer })
  ]
})
export class AuthModule { }
