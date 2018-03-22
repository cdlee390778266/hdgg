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
import { AddressDComponent } from './address-d/address-d.component';
import { OaComponent } from './oa/oa.component';
import { BbComponent } from './bb/bb.component';
import { AgentComponent } from './agent/agent.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { ReceiveComponent } from './receive/receive.component';
import { ViewComponent } from './view/view.component';
import { TeamComponent } from './team/team.component';
import { TeamSizeComponent } from './team-size/team-size.component';
import { UpgradeDComponent } from './upgrade-d/upgrade-d.component';
import { ExamineComponent } from './examine/examine.component';
import { AdAddComponent } from './ad-add/ad-add.component';
import { AdUploadComponent } from './ad-upload/ad-upload.component';
import { MyApplyComponent } from './my-apply/my-apply.component';
import { ApplyListComponent } from './apply-list/apply-list.component';
import { SmComponent } from './sm/sm.component';

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
    path: 'sm',
    component: SmComponent
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
    path: 'addressd',
    component: AddressDComponent
  },
  {
    path: 'oa',
    component: OaComponent
  },
  {
    path: 'bb',
    component: BbComponent
  },
  {
    path: 'agent',
    component: AgentComponent
  },
  {
    path: 'maillist',
    component: MailListComponent
  },
  {
    path: 'receive',
    component: ReceiveComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'teamsize',
    component: TeamSizeComponent
  },
  {
    path: 'upgraded',
    component: UpgradeDComponent
  },
  {
    path: 'examine',
    component: ExamineComponent
  },
  {
    path: 'adadd',
    component: AdAddComponent
  },
  {
    path: 'adupload',
    component: AdUploadComponent
  },
  {
    path: 'applylist',
    component: ApplyListComponent
  },
  {
    path: 'myapply',
    component: MyApplyComponent
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
