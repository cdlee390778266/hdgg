import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../service/admin-guard.service';

import { UserComponent } from '../components/admincomponents/user/user.component';
import { UpdateSingleComponent } from '../components/admincomponents/update-single/update-single.component';
import { UpdatepwdComponent } from '../components/admincomponents/updatepwd/updatepwd.component';
import { PayComponent } from '../components/admincomponents/pay/pay.component';
import { AuthComponent } from '../components/admincomponents/auth/auth.component';
import { ShareComponent } from '../components/admincomponents/share/share.component';
import { UpgradeComponent } from '../components/admincomponents/upgrade/upgrade.component';
import { OaComponent } from '../components/admincomponents/oa/oa.component';
import { AgentComponent } from '../components/admincomponents/agent/agent.component';
import { MailListComponent } from '../components/admincomponents/mail-list/mail-list.component';
import { MailComponent } from '../components/admincomponents/mail/mail.component';
import { ReceiveComponent } from '../components/admincomponents/receive/receive.component';
import { ViewComponent } from '../components/admincomponents/view/view.component';
import { TeamComponent } from '../components/admincomponents/team/team.component';
import { TeamSizeComponent } from '../components/admincomponents/team-size/team-size.component';
import { UpgradeDComponent } from '../components/admincomponents/upgrade-d/upgrade-d.component';
import { ExamineComponent } from '../components/admincomponents/examine/examine.component';
import { AdAddComponent } from '../components/admincomponents/ad-add/ad-add.component';
import { AdUploadComponent } from '../components/admincomponents/ad-upload/ad-upload.component';
import { MyApplyComponent } from '../components/admincomponents/my-apply/my-apply.component';
import { ApplyListComponent } from '../components/admincomponents/apply-list/apply-list.component';
import { SmComponent } from '../components/admincomponents/sm/sm.component';
import { OrderdComponent } from '../components/admincomponents/orderd/orderd.component';
import { OrderlistComponent } from '../components/admincomponents/orderlist/orderlist.component';
import { RecordComponent } from '../components/admincomponents/record/record.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AdminGuard],
    children: [
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: '个人资料'
        }
      },
      {
        path: 'updatesingle',
        component: UpdateSingleComponent
      },
      {
        path: 'updatepwd',
        component: UpdatepwdComponent,
        data: {
          title: '修改密码'
        }
      },
      {
        path: 'pay',
        component: PayComponent,
        data: {
          title: '付款'
        }
      },
      {
        path: 'auth',
        component: AuthComponent,
        data: {
          title: '实名认证'
        }
      },
      {
        path: 'share',
        component: ShareComponent,
        data: {
          title: '二维码分享'
        }
      },
      {
        path: 'sm',
        component: SmComponent,
        data: {
          title: '短信分享'
        }
      },
      {
        path: 'upgrade',
        component: UpgradeComponent,
        data: {
          title: '我要升级'
        }
      },
      {
        path: 'oa',
        component: OaComponent,
        data: {
          title: '开户'
        }
      },
      {
        path: 'agent',
        component: AgentComponent,
        data: {
          title: '签约代理'
        }
      },
      {
        path: 'maillist',
        component: MailListComponent,
        data: {
          title: '通讯录'
        }
      },
      {
        path: 'mail/:id',
        component: MailComponent,
        data: {
          title: '修改联系人'
        }
      },
      {
        path: 'receive',
        component: ReceiveComponent,
        data: {
          title: '收款'
        }
      },
      {
        path: 'view',
        component: ViewComponent,
        data: {
          title: '个人中心'
        }
      },
      {
        path: 'team/:id',
        component: TeamComponent,
        data: {
          title: '团队'
        }
      },
      {
        path: 'teamsize/:id',
        component: TeamSizeComponent,
        data: {
          title: '团队规模'
        }
      },
      {
        path: 'upgraded/:id',
        component: UpgradeDComponent,
        data: {
          title: '升级详情'
        }
      },
      {
        path: 'examine/:id',
        component: ExamineComponent,
        data: {
          title: '审核状态'
        }
      },
      {
        path: 'adadd/:id',
        component: AdAddComponent,
        data: {
          title: '广告上传'
        }
      },
      {
        path: 'adupload/:id',
        component: AdUploadComponent,
        data: {
          title: '广告列表'
        }
      },
      {
        path: 'applylist/:id',
        component: ApplyListComponent,
        data: {
          title: '申请列表'
        }
      },
      {
        path: 'myapply/:id',
        component: MyApplyComponent,
        data: {
          title: '我的申请'
        }
      },
      {
        path: 'orderd/:id',
        component: OrderdComponent,
        data: {
          title: '订单详情'
        }
      },
      {
        path: 'orderlist/:id',
        component: OrderlistComponent,
        data: {
          title: '订单列表'
        }
      },
      {
        path: 'record',
        component: RecordComponent,
        data: {
          title: '积分'
        }
      },
      {
        path: '**',
        component: ViewComponent,
        data: {
          title: '个人中心'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class AdminRoutingModule { }
