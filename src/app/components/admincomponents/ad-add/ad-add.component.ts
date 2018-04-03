import { Component, OnInit } from '@angular/core';
import { simAnim } from '../../../animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Ad, AdDetail } from '../../../class/ad';
import { HdStateInterface } from '../../../class/hd.state.interface';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service'
import { NzModalService } from 'ng-zorro-antd';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-ad-add',
  templateUrl: './ad-add.component.html',
  styleUrls: ['./ad-add.component.css'],
  animations: [simAnim]
})
export class AdAddComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService, private hdStateService: HdStateService, private router: Router, private route: ActivatedRoute) { }

  public hasAccess: boolean;
  public adid: number;
  public hdState: HdStateInterface;
  public data: Ad = {
    adid: 0,
    title: '',
    dsc: '',
    imgsrc: '',
    price: '',
    num: 0
  }

  previewImage = '';
  previewVisible = false;

  save() {
    console.log(this.data)
    this.httpService.get('/assets/data/adadd/adadd.json')
      .subscribe(res => {
        if(res.status == 200) {
            if(this.adid == -1) {
              this.data.adid = Math.ceil(Math.random()*1000);
              this.hdState.adList.push(this.data);
            }
            this.hdStateService.setHdState(this.hdState);
            var successModal = this.nzModalService.open({
              content : CONFIG.success.s5,
              closable: false,
              footer: false,
              width: 200,
              wrapClassName: 'vertical-center-modal hd-tip'
            })

            setTimeout(() => {
              successModal.destroy();
              this.router.navigate(['/admin/adupload/']);
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
    this.adid = parseInt(this.route.snapshot.paramMap.get('id'));
    this.httpService.get('/assets/data/adupload/adupload.json')
      .subscribe(res => {
        this.hdStateService.getHdStateObservable(hdState => {
            this.hdState = hdState;
            if(!this.hdState.adList) {
              this.hdState.adList = res.data;
            }
            this.hasAccess = false;
            for(var i = 0; i < this.hdState.adList.length; i++) {
              if(this.hdState.adList[i].adid == this.adid) {
                this.hasAccess = true;
                this.data = this.hdState.adList[i];
              }
            }
            if(this.adid == -1) this.hasAccess = true;
            if(!this.hasAccess && this.adid != -1) {
              var successModal = this.nzModalService.open({
                content : CONFIG.error.e13,
                closable: false,
                footer: false,
                width: 200,
                wrapClassName: 'vertical-center-modal hd-tip'
              })

              setTimeout(() => {
                successModal.destroy();
                this.router.navigate(['/admin/adupload'])
              }, 2000)
            }
        })
      })
  }

}
