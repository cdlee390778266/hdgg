import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../animations';
import { LoginService } from '../login/login.service';
import { HttpService } from '../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../config';

@Component({
  selector: 'hd-sm',
  templateUrl: './sm.component.html',
  styleUrls: ['./sm.component.css'],
  animations: [simAnim]
})
export class SmComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private loginService: LoginService) { }

  public data: Object[];

  public isCanSend: boolean = false;

  changeStatus(item) {
  	for(var i = 0; i < this.data.length; i++) {
  		if(this.data[i] == item) {
  			item.isactive = this.isCanSend = !item.isactive;
  		}else {
  			this.data[i]['isactive'] = false;
  		}
  	}
  }

  send() {
  	if(!this.isCanSend) return;
  	this.httpService.get('/assets/data/adadd/adadd.json')
      .subscribe(res => {
        if(res.status == 200) {
            var successModal = this.nzModalService.open({
              content : CONFIG.success.s8,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
            }, 2000)
        }else {
          var successModal = this.nzModalService.open({
              content : CONFIG.error.e8,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
            }, 2000)
        }
      })
  }

  ngOnInit() {
  	this.httpService.get('/assets/data/sm/sm.json')
      .subscribe(res => this.data = res.data)
  }

}
