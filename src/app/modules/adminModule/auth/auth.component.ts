import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
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
export class AuthComponent implements OnInit, OnDestroy {

  constructor(private hdStateService: HdStateService, private httpService: HttpService, private nzModalService: NzModalService) { }

  public hdState: HdStateInterface;
  public isAuthSuccess: boolean = true;
  public sub: Subscription;

  auth() {
  	this.httpService.get('/assets/data/updatepwd/updatepwd.json')
      .subscribe(res => {
        if(res.status == 200) {
            this.hdStateService.setHdState(this.hdState);
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
    this.sub = this.hdStateService.getHdStateObservable()
      .subscribe(hdState =>  {
        this.hdState = hdState;
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
