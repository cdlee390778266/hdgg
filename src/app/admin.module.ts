import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/reducer';
import { HttpService } from './service/http.service';
import { HdStateService } from './service/hd.state.service';
import { AdminRoutingModule } from './router/admin-routing.module';

import { FootComponent } from './components/common/foot/foot.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';

import { UserComponent } from './components/admincomponents/user/user.component';
import { UpdateSingleComponent } from './components/admincomponents/update-single/update-single.component';
import { UpdatepwdComponent } from './components/admincomponents/updatepwd/updatepwd.component';
import { PayComponent } from './components/admincomponents/pay/pay.component';
import { AuthComponent } from './components/admincomponents/auth/auth.component';
import { ShareComponent } from './components/admincomponents/share/share.component';
import { UpgradeComponent } from './components/admincomponents/upgrade/upgrade.component';
import { OaComponent } from './components/admincomponents/oa/oa.component';
import { AgentComponent } from './components/admincomponents/agent/agent.component';
import { MailListComponent } from './components/admincomponents/mail-list/mail-list.component';
import { ReceiveComponent } from './components/admincomponents/receive/receive.component';
import { ViewComponent } from './components/admincomponents/view/view.component';
import { TeamComponent } from './components/admincomponents/team/team.component';
import { TeamSizeComponent } from './components/admincomponents/team-size/team-size.component';
import { UpgradeDComponent } from './components/admincomponents/upgrade-d/upgrade-d.component';
import { ExamineComponent } from './components/admincomponents/examine/examine.component';
import { AdAddComponent } from './components/admincomponents/ad-add/ad-add.component';
import { AdUploadComponent } from './components/admincomponents/ad-upload/ad-upload.component';
import { MyApplyComponent } from './components/admincomponents/my-apply/my-apply.component';
import { ApplyListComponent } from './components/admincomponents/apply-list/apply-list.component';
import { SmComponent } from './components/admincomponents/sm/sm.component';
import { OrderdComponent } from './components/admincomponents/orderd/orderd.component';
import { OrderlistComponent } from './components/admincomponents/orderlist/orderlist.component';
import { RecordComponent } from './components/admincomponents/record/record.component';
import { MailComponent } from './components/admincomponents/mail/mail.component';
import { EmailDirective } from './Directives/email.directive';
import { PhoneDirective } from './directives/phone.directive';

@NgModule({
  declarations: [
   
    FootComponent,
    NavBarComponent,
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
    MailComponent,
    EmailDirective,
    PhoneDirective
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminRoutingModule,
    StoreModule.forRoot({ reducer: reducer }) 
  ],
  providers: [HttpService, HdStateService]
})
export class AdminModule { }
