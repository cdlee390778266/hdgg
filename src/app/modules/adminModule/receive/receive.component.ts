import { Component, OnInit, OnDestroy } from '@angular/core';
import { simAnim } from '../../../animations';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css'],
  animations: [simAnim]
})
export class ReceiveComponent implements OnInit, OnDestroy {

  constructor(private hdStateService: HdStateService, private httpService: HttpService, private nzModalService: NzModalService) { }

  public hdState: HdStateInterface;


  public isCanSubmit: boolean = false;

  public isSaveSuccess: boolean = true;

  checkCanSubmit() {
  	if(this.hdState.zfbReceiveId || this.hdState.qqReceiveId || this.hdState.wxReceiveId || this.hdState.yhkReceiveId) {
  		this.isCanSubmit = true;
  	}else {
  		this.isCanSubmit = false;
  	}
  }

  save() {
  	this.httpService.get('/assets/data/updatepwd/updatepwd.json')
      .subscribe(res => {
        if(res.status == 200) {
            this.hdStateService.setHdState(this.hdState);
          	var successModal = this.nzModalService.open({
              content : CONFIG.success.s5,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              	history.back();
            }, 2000)
            this.isSaveSuccess = true;
        }else {
          this.isSaveSuccess = false;
        }
      })
  }

  ngOnInit() {
  	this.hdStateService.getHdStateObservable(hdState => {
      this.hdState = hdState;
      this.checkCanSubmit();
    })
  }

  ngOnDestroy() {
    this.hdStateService.unSubsribe();
  }
}
