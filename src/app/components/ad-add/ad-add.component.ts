import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../animations';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { HttpService } from '../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../config';

@Component({
  selector: 'hd-ad-add',
  templateUrl: './ad-add.component.html',
  styleUrls: ['./ad-add.component.css'],
  animations: [simAnim]
})
export class AdAddComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private loginService: LoginService, private router: Router) { }

  public data: any;

  public fileList = [];

  previewImage = '';
  previewVisible = false;

  save() {
    this.httpService.get('/assets/data/adadd/adadd.json')
      .subscribe(res => {
        if(res.status == 200) {
            var successModal = this.nzModalService.open({
              content : CONFIG.success.s5,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              this.router.navigate(['/adupload/4']);
            }, 2000)
        }else {
          var successModal = this.nzModalService.open({
              content : CONFIG.error.e5,
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
    this.httpService.get('/assets/data/adadd/adadd.json')
      .subscribe(res => {
        this.data = res.data;
        this.fileList = res.data.banners;
      })
  }

}
