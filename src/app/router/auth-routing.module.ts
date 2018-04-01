import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../service/auth-guard.service';

import { LoginComponent } from '../components/authcomponents/login/login.component';
import { RegisterComponent } from '../components/authcomponents/register/register.component';
import { GetpwdComponent } from '../components/authcomponents/getpwd/getpwd.component';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: '登录'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: '注册'
        }
      },
      {
        path: 'getpwd',
        component: GetpwdComponent,
        data: {
          title: '找回密码'
        }
      },
      {
        path: '**',
        component: LoginComponent,
        data: {
          title: '登录'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AuthRoutingModule { }
