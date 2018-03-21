import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetpwdComponent } from './getpwd/getpwd.component';
import { PEComponent } from './pe/pe.component';
import { UserComponent } from './user/user.component';
import { EmailComponent } from './email/email.component';
import { UpdatepwdComponent } from './updatepwd/updatepwd.component';
import { PayComponent } from './pay/pay.component';
import { AuthComponent } from './auth/auth.component';
import { ShareComponent } from './share/share.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'getpwd',
    component: GetpwdComponent
  },
  {
    path: 'pe/:id',
    component: PEComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'email',
    component: EmailComponent
  },
  {
    path: 'updatepwd',
    component: UpdatepwdComponent
  },
  {
    path: 'pay',
    component: PayComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'share',
    component: ShareComponent
  },
  {
    path: 'upgrade',
    component: UpgradeComponent
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
