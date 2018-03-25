import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpService } from './http.service';
import { LoadingService }  from './loading/loading.service';
import { LoginService } from './login/login.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './common/head/head.component';
import { FootComponent } from './common/foot/foot.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { PEComponent } from './pe/pe.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetpwdComponent } from './getpwd/getpwd.component';
import { UserComponent } from './user/user.component';
import { EmailComponent } from './email/email.component';
import { UpdatepwdComponent } from './updatepwd/updatepwd.component';
import { PayComponent } from './pay/pay.component';
import { AuthComponent } from './auth/auth.component';
import { ShareComponent } from './share/share.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AddressComponent } from './address/address.component';
import { OaComponent } from './oa/oa.component';
import { BbComponent } from './bb/bb.component';
import { AddressDComponent } from './address-d/address-d.component';
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
import { LoadingComponent } from './loading/loading.component';

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
    EmailComponent,
    UpdatepwdComponent,
    PayComponent,
    AuthComponent,
    ShareComponent,
    UpgradeComponent,
    AddressComponent,
    OaComponent,
    BbComponent,
    AddressDComponent,
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
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [HttpService, LoadingService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
