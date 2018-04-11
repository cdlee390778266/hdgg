import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../../service/admin-guard.service';

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
    path: '',
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
        path: 'team',
        component: TeamComponent,
        data: {
          title: '团队'
        }
      },
      {
        path: 'teamsize',
        component: TeamSizeComponent,
        data: {
          title: '团队规模'
        }
      },
      {
        path: 'upgraded',
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
        path: 'adupload',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
