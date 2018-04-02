import { Component, OnInit } from '@angular/core';
import { simAnim } from '../../../animations';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: [simAnim]
})
export class TeamComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private hdStateService: HdStateService) { }

  public hdState: HdStateInterface;

  apply() {
    this.httpService.get('/assets/data/login/login.json')
      .subscribe(res => {
        this.hdStateService.setHdState({isJoinTeam: !this.hdState.isJoinTeam});
        var successModal = this.nzModalService.open({
            content : CONFIG.success.s12,
            closable: false,
            footer: false,
            width: 200,
            wrapClassName: 'vertical-center-modal hd-tip'
          })

        setTimeout(() => {
          successModal.destroy();
        }, 2000)
      })
  }

  ngOnInit() {
  	this.httpService.get('/assets/data/login/login.json')
  		.subscribe(res => {
        this.hdStateService.getHdStateObservable()
          .subscribe(hdState => {
            this.hdState = hdState;
          })
  		})
  }

}
