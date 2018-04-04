import { Component, OnInit, OnDestroy } from '@angular/core';
import { simAnim } from '../../../animations';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
  animations: [simAnim]
})
export class AgentComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService, private hdStateService: HdStateService, private nzModalService: NzModalService) { }

  public hdState: HdStateInterface;

  showModal(confirmTpl) {
    if(this.hdState.isSign) {
      return;
    }

    var that = this;
    this.nzModalService.open({
      content : confirmTpl,
      closable: false,
      wrapClassName: 'vertical-center-modal qy-modal',
      showConfirmLoading: true,
      onOk() {
        return new Promise((resolve) => {
    	    that.httpService.get('/assets/data/agent/agent.json')
          	.subscribe(res => {
          		resolve();
          		var tip = CONFIG.success.s7;
          		if(res.status != 200 || that.hdState.record < 30000) {
          			tip = CONFIG.error.e7;
          		}else {
                that.hdState.isSign = true;
                that.hdState.record = that.hdState.record - 30000;
                that.hdStateService.setHdState(that.hdState);
              }
          		var successModal = that.nzModalService.open({
	              content : tip,
	              closable: false,
	              footer: false,
	              width: 200,
	              wrapClassName: 'vertical-center-modal hd-tip'
	            })

          		setTimeout(() => {
	              successModal.destroy();
	            }, 2000)
          	})
        });
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
