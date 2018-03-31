import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { GetpwdComponent } from '../components/getpwd/getpwd.component';
import { PEComponent } from '../components/pe/pe.component';
import { UserComponent } from '../components/user/user.component';
import { UpdateSingleComponent } from '../components/update-single/update-single.component';
import { UpdatepwdComponent } from '../components/updatepwd/updatepwd.component';
import { PayComponent } from '../components/pay/pay.component';
import { AuthComponent } from '../components/auth/auth.component';
import { ShareComponent } from '../components/share/share.component';
import { UpgradeComponent } from '../components/upgrade/upgrade.component';
import { OaComponent } from '../components/oa/oa.component';
import { AgentComponent } from '../components/agent/agent.component';
import { MailListComponent } from '../components/mail-list/mail-list.component';
import { MailComponent } from '../components/mail/mail.component';
import { ReceiveComponent } from '../components/receive/receive.component';
import { ViewComponent } from '../components/view/view.component';
import { TeamComponent } from '../components/team/team.component';
import { TeamSizeComponent } from '../components/team-size/team-size.component';
import { UpgradeDComponent } from '../components/upgrade-d/upgrade-d.component';
import { ExamineComponent } from '../components/examine/examine.component';
import { AdAddComponent } from '../components/ad-add/ad-add.component';
import { AdUploadComponent } from '../components/ad-upload/ad-upload.component';
import { MyApplyComponent } from '../components/my-apply/my-apply.component';
import { ApplyListComponent } from '../components/apply-list/apply-list.component';
import { SmComponent } from '../components/sm/sm.component';
import { OrderdComponent } from '../components/orderd/orderd.component';
import { OrderlistComponent } from '../components/orderlist/orderlist.component';
import { RecordComponent } from '../components/record/record.component';

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
