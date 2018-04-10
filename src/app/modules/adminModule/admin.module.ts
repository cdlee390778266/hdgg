import { NgModule } from '@angular/core';

import { SharedModule } from '../sharedModule/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

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
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [
    UserComponent,
    UpdatepwdComponent,
    PayComponent,
    AuthComponent,
    ShareComponent,
    UpgradeComponent,
    OaComponent,
    AgentComponent,
    MailListComponent,
    ReceiveComponent,
    ViewComponent,
    TeamComponent,
    TeamSizeComponent,
    UpgradeDComponent,
    ExamineComponent,
    AdAddComponent,
    AdUploadComponent,
    MyApplyComponent,
    ApplyListComponent,
    SmComponent,
    OrderdComponent,
    OrderlistComponent,
    UpdateSingleComponent,
    RecordComponent,
    MailComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
