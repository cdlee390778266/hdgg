import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { simAnim } from '../../../animations';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-update-single',
  templateUrl: './update-single.component.html',
  styleUrls: ['./update-single.component.css'],
  animations: [simAnim]
})
export class UpdateSingleComponent implements OnInit {

  constructor(private httpService: HttpService, private hdStateService: HdStateService, private router: Router, private route: ActivatedRoute, private nzModalService: NzModalService) { }

  public hdState: HdStateInterface;

  public viewTitle: string;

  public inputText: string;

  public inputVal: string;

  public keyName: string;

  public isUpdateSuccess: boolean = true;

  hideUpdateError() {
  	this.isUpdateSuccess = true;
  }

  update() {
    var inputVal = this.inputVal;
  	this.httpService.get('/assets/data/updatepwd/updatepwd.json')
      .subscribe(res => {
        if(res.status == 200) {
            var obj = {};
            obj[this.keyName] = inputVal;
          	this.hdStateService.setHdState(obj);
          	var successModal = this.nzModalService.open({
              content : `保存${this.inputText}成功`,
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
  	this.hdStateService.getHdStateObservable()
      .subscribe(hdState => {
        this.hdState = hdState;
        this.route.queryParams.subscribe(params => {
            this.viewTitle = params['title'];
            this.inputText = params['inputText'];
            this.keyName = params['keyName'];
            this.inputVal = this.hdState[this.keyName]
        });
      })
  }

}
