import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';
import { HttpService } from '../http.service'
import { User } from '../login/user';
import { LoginService } from '../login/login.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [simAnim]
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService, private loginService: LoginService) { }

  private banners = []

  private lattices = []

  private article: string;

  private isLogin: boolean = false;

  private user: User;

  private isShowTopLink: boolean = false;

  private topLink: Object = { text: '登录', href: '/login'};

  ngOnInit() {
    this.user = this.loginService.getUser();
    if(this.loginService.getLogin()) {
      this.isLogin = true
      this.topLink = this.user.level > 18 ? { text: '我', href: '/view'} : { text: '我', href: '/user'}
    }
    this.isShowTopLink = true;
    this.httpService.get('/assets/data/home/banners.json')
    .subscribe(res => this.banners = res)
    this.httpService.get('/assets/data/home/lattices.json')
    .subscribe(res => this.lattices = res)
    this.httpService.get('/assets/data/home/article.json')
    .subscribe(res => this.article = res.content)
  }

}
