import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { simAnim } from '../../../animations';
import { Oa } from '../../../class/oa';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-oa',
  templateUrl: './oa.component.html',
  styleUrls: ['./oa.component.css'],
  animations: [simAnim]
})
export class OaComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private hdStateService: HdStateService, private router: Router) { }

  public hdState: HdStateInterface;
  public isUpdateSuccess: boolean = true;
  public data: Oa = {
    name: '',
	ID: '',
	oaType: '',
	oaId: null,
	address: ''
  }
  public oaTypeAll = [
  	{
  		typeId: 0,
  		label: '中国工商银行'
  	},
  	{
  		typeId: 1,
  		label: '中国农业银行'
  	},
  	{
  		typeId: 2,
  		label: '中国银行'
  	},
  	{
  		typeId: 3,
  		label: '中国建设银行'
  	},
  	{
  		typeId: 4,
  		label: '中国邮政储蓄银行'
  	},
  	{
  		typeId: 5,
  		label: '交通银行'
  	}
  ]

  hideUpdateError() {
  	this.isUpdateSuccess = true;
  }

  update() {
  	this.httpService.get('/assets/data/mail/mail.json')
      .subscribe(res => {
        if(res.status == 200) {
        	if(!this.hdState.oa) {
        		this.hdState.oa = this.data;
        	}
            this.hdStateService.setHdState(Object.assign({}, this.hdState));
          	var successModal = this.nzModalService.open({
              content : `保存成功`,
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
      })
  }

  ngOnInit() {
    this.hdStateService.getHdStateObservable(hdState => {
      this.hdState = hdState;
      if(this.hdState.oa) {
      	this.data = this.hdState.oa;
      }
    })
  }

  ngOnDestroy() {
    this.hdStateService.unSubsribe();
  }

}
