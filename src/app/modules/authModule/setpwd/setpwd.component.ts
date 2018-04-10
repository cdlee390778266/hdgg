import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import  { simAnim } from '../../../animations';
import { HttpService } from '../../../service/http.service';
import { NzModalService } from 'ng-zorro-antd';
import { DefaultUsers } from '../../../ngrx/reducer';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-setpwd',
  templateUrl: './setpwd.component.html',
  styleUrls: ['./setpwd.component.css'],
  animations: [simAnim]
})
export class SetpwdComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private rouer: Router, private route: ActivatedRoute) { }

  public isSetSuccess: boolean = true;
  public name: string;
  public pwd: string;
  public cpwd: string;

  hideError() {
  	this.isSetSuccess = true;
  }

  setPwd() {
    if(!this.name) {
      var successModal = this.nzModalService.open({
          content : CONFIG.error.e10,
          closable: false,
          footer: false,
          width: 200,
          wrapClassName: 'vertical-center-modal hd-tip'
        })

      setTimeout(() => {
        successModal.destroy();
        this.rouer.navigate(['/auth/login'])
      }, 2000)
      return;
    }

    this.httpService.get('/assets/data/login/login.json')
      .subscribe(res => {
        if(res.status == 200) {
          var issetSuccess = false;
          for(let i = 0, len = DefaultUsers.length; i < len; i++) {
            if(DefaultUsers[i].name == this.name) {
              issetSuccess = true;
              DefaultUsers[i].password = this.pwd;
              break;
            }
          }
          if(issetSuccess) {
            this.isSetSuccess = true;
            var successModal = this.nzModalService.open({
              content : CONFIG.success.s11,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              this.rouer.navigate(['/auth/login'])
            }, 2000)
            
          }else {
            this.isSetSuccess = false;
          }
        }else {
          this.nzModalService.open({
            content : CONFIG.error.e11,
            closable: false,
            footer: false,
            width: 200,
            wrapClassName: 'vertical-center-modal hd-tip'
          })
        }
      })
  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
