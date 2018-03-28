import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetpwdComponent } from './getpwd/getpwd.component';
import { PEComponent } from './pe/pe.component';
import { UserComponent } from './user/user.component';
import { UpdateSingleComponent } from './update-single/update-single.component';
import { UpdatepwdComponent } from './updatepwd/updatepwd.component';
import { PayComponent } from './pay/pay.component';
import { AuthComponent } from './auth/auth.component';
import { ShareComponent } from './share/share.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { OaComponent } from './oa/oa.component';
import { AgentComponent } from './agent/agent.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailComponent } from './mail/mail.component';
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
import { OrderdComponent } from './orderd/orderd.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RecordComponent } from './record/record.component';

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
    path: 'updatesingle',
    component: UpdateSingleComponent
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
    path: 'oa',
    component: OaComponent
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
    path: 'mail/:id',
    component: MailComponent
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
    path: 'team/:id',
    component: TeamComponent
  },
  {
    path: 'teamsize/:id',
    component: TeamSizeComponent
  },
  {
    path: 'upgraded/:id',
    component: UpgradeDComponent
  },
  {
    path: 'examine/:id',
    component: ExamineComponent
  },
  {
    path: 'adadd/:id',
    component: AdAddComponent
  },
  {
    path: 'adupload/:id',
    component: AdUploadComponent
  },
  {
    path: 'applylist/:id',
    component: ApplyListComponent
  },
  {
    path: 'myapply/:id',
    component: MyApplyComponent
  },
  {
    path: 'orderd/:id',
    component: OrderdComponent
  },
  {
    path: 'orderlist/:id',
    component: OrderlistComponent
  },
  {
    path: 'record',
    component: RecordComponent
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
