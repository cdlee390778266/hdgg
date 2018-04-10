import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../service/auth-guard.service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetpwdComponent } from './getpwd/getpwd.component';
import { SetpwdComponent } from './setpwd/setpwd.component';

const routes: Routes = [
  {
    path: '',
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
        path: 'setpwd/:name',
        component: SetpwdComponent,
        data: {
          title: '重置密码'
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AuthRoutingModule { }
