import { Component, OnInit } from '@angular/core';
import { simAnim } from '../../../animations';
import { HttpService } from '../../../service/http.service';
import { HdStateService } from '../../../service/hd.state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [simAnim]
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService, private getHdStateService: HdStateService) { }

  public banners = []

  public lattices = []

  public article: string;

  public isShowTopLink: boolean = false;

  public topLink: Object = { text: '登录', href: '/auth/login'};

  ngOnInit() {
    this.getHdStateService.getHdStateObservable()
      .subscribe(hdState =>  {
        if(hdState.isLogin) {
          this.topLink = { text: '我', href: '/admin/view'};
        }
        this.isShowTopLink = true;
      })
    this.httpService.get('../../assets/data/home/banners.json')
    .subscribe(res => this.banners = res)
    this.httpService.get('../../assets/data/home/lattices.json')
    .subscribe(res => this.lattices = res)
    this.httpService.get('../../assets/data/home/article.json')
    .subscribe(res => this.article = res.content)
  }

}
