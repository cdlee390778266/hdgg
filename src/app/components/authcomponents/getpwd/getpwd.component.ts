import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { simAnim } from '../../../animations';
import { HttpService } from '../../../service/http.service';
import { NzModalService } from 'ng-zorro-antd';
import { DefaultUsers } from '../../../ngrx/reducer';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-getpwd',
  templateUrl: './getpwd.component.html',
  styleUrls: ['./getpwd.component.css'],
  animations: [simAnim]
})
export class GetpwdComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private router: Router) { }

  public isGetSuccess: boolean = true;
  public name: string;
  public email: string;

  hideError() {
  	this.isGetSuccess = true;
  }

  getPwd() {
    this.httpService.get('/assets/data/login/login.json')
      .subscribe(res => {
        if(res.status == 200) {
          var isloginSuccess = false;
          for(let i = 0, len = DefaultUsers.length; i < len; i++) {
            if(DefaultUsers[i].name == this.name && DefaultUsers[i].email == this.email) {
              isloginSuccess = true;
              break;
            }
          }
          if(isloginSuccess) {
            this.isGetSuccess = true;
            var successModal = this.nzModalService.open({
              content : CONFIG.success.s8,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              this.router.navigate(['/auth/setpwd', this.name], { skipLocationChange: true }); 
            }, 2000)
            
          }else {
            this.isGetSuccess = false;
          }
        }else {
          this.nzModalService.open({
            content : CONFIG.error.e8,
            closable: false,
            footer: false,
            width: 200,
            wrapClassName: 'vertical-center-modal hd-tip'
          })
        }
      })
  }

  ngOnInit() {
  }

}
