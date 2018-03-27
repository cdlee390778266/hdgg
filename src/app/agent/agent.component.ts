import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';
import { LoginService } from '../login/login.service';
import { HttpService } from '../http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../config';

@Component({
  selector: 'hd-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
  animations: [simAnim]
})
export class AgentComponent implements OnInit {

  constructor(private httpService: HttpService, private loginService: LoginService, private nzModalService: NzModalService) { }

  showModal(confirmTpl) {
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
          		if(res.status != 200) {
          			tip = CONFIG.error.e7;
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
  }

}
