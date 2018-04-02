import { Component, OnInit } from '@angular/core';
import { simAnim } from '../../../animations';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService} from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [simAnim]
})
export class AuthComponent implements OnInit {

  constructor(private hdStateService: HdStateService, private httpService: HttpService, private nzModalService: NzModalService) { }

  public hdState: HdStateInterface;

  public rname: string;

  public ID: string;

  public isAuthSuccess: boolean = true;

  auth() {
  	this.httpService.get('/assets/data/updatepwd/updatepwd.json')
      .subscribe(res => {
        if(res.status == 200) {
            this.hdStateService.setHdState({
              rname: this.rname,
              ID: this.ID
            })
          	var successModal = this.nzModalService.open({
              content : CONFIG.success.s4,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              	history.back();
            }, 2000)
            this.isAuthSuccess = true;
        }else {
          this.isAuthSuccess = false;
        }
      })
  }

  ngOnInit() {
    this.hdStateService.getHdStateObservable()
      .subscribe(hdState =>  {
        this.hdState = hdState;
        this.rname = hdState.rname
        this.ID = hdState.ID;
      })
  }

}
