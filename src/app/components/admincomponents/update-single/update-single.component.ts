import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../authcomponents/login/user';
import  { simAnim } from '../../../animations';
import { LoginService } from '../../authcomponents/login/login.service';
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

  constructor(private httpService: HttpService, private loginService: LoginService, private router: Router, private route: ActivatedRoute, private nzModalService: NzModalService) { }

  public user: User;

  public viewTitle: string;

  public inputText: string;

  public inputVal: string;

  public keyName: string;

  public isUpdateSuccess: boolean = true;

  hideUpdateError() {
  	this.isUpdateSuccess = true;
  }

  update() {
  	this.httpService.get('/assets/data/updatepwd/updatepwd.json')
      .subscribe(res => {
        if(res.status == 200) {
          	this.loginService.setUserVal(this.keyName.split('.'), this.inputVal);
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
  	this.user = this.loginService.getUser();
  	this.route.queryParams.subscribe(params => {
        this.viewTitle = params['title'];
        this.inputText = params['inputText'];
        this.keyName = params['keyName'];
        this.inputVal = this.loginService.getUserVal(this.keyName.split('.'));
    });
  }

}
