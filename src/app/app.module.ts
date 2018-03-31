import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/reducer';
import { HttpService } from './service/http.service';
import { LoginService } from './components/login/login.service';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeadComponent } from './components/common/head/head.component';
import { FootComponent } from './components/common/foot/foot.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { PEComponent } from './components/pe/pe.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GetpwdComponent } from './components/getpwd/getpwd.component';
import { UserComponent } from './components/user/user.component';
import { UpdateSingleComponent } from './components/update-single/update-single.component';
import { UpdatepwdComponent } from './components/updatepwd/updatepwd.component';
import { PayComponent } from './components/pay/pay.component';
import { AuthComponent } from './components/auth/auth.component';
import { ShareComponent } from './components/share/share.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { OaComponent } from './components/oa/oa.component';
import { AgentComponent } from './components/agent/agent.component';
import { MailListComponent } from './components/mail-list/mail-list.component';
import { ReceiveComponent } from './components/receive/receive.component';
import { ViewComponent } from './components/view/view.component';
import { TeamComponent } from './components/team/team.component';
import { TeamSizeComponent } from './components/team-size/team-size.component';
import { UpgradeDComponent } from './components/upgrade-d/upgrade-d.component';
import { ExamineComponent } from './components/examine/examine.component';
import { AdAddComponent } from './components/ad-add/ad-add.component';
import { AdUploadComponent } from './components/ad-upload/ad-upload.component';
import { MyApplyComponent } from './components/my-apply/my-apply.component';
import { ApplyListComponent } from './components/apply-list/apply-list.component';
import { SmComponent } from './components/sm/sm.component';
import { OrderdComponent } from './components/orderd/orderd.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { RecordComponent } from './components/record/record.component';
import { MailComponent } from './components/mail/mail.component';

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
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    StoreModule.forRoot({ reducer: reducer }) 
  ],
  providers: [HttpService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
