import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { simAnim } from '../../../animations';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-updatepwd',
  templateUrl: './updatepwd.component.html',
  styleUrls: ['./updatepwd.component.css'],
  animations: [simAnim]
})
export class UpdatepwdComponent implements OnInit, OnDestroy {

  constructor(private nzModalService: NzModalService, private hdStateService: HdStateService, private httpService: HttpService, private router: Router) { }

  public hdState: HdStateInterface;

  public oldPwd: string;

  public newPwd: string;

  public confirmPwd: string;

  public isUpdateSuccess: boolean = true;

  hideUpdatePwdError() {
  	this.isUpdateSuccess = true;
  }

  upPwd() {
  	this.httpService.get('/assets/data/updatepwd/updatepwd.json')
      .subscribe(res => {
        if(res.status == 200) {
          if(this.hdState.password == this.oldPwd) {
            this.hdState.password = this.newPwd;
            this.hdStateService.setHdState(this.hdState);
          	var successModal = this.nzModalService.open({
              content : CONFIG.success.s3,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              	history.back();
            }, 2000)
            this.isUpdateSuccess = true;
          }else {
          	this.isUpdateSuccess = false;
          }
        }else {
          this.nzModalService.open({
            content : CONFIG.error.e2 + res.status,
            closable: false,
            footer: false,
            width: 200,
            wrapClassName: 'vertical-center-modal hd-tip'
          })
        }
      })
  }

  ngOnInit() {
    this.hdStateService.getHdStateObservable(hdState => {
      this.hdState = hdState;
    })
  }

  ngOnDestroy() {
    this.hdStateService.unSubsribe();
  }

}
