import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';
import { HttpService } from '../http.service'
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [simAnim]
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModal: NzModalService) { }

  private banners = []

  private lattices = []

  private article: string;

  ngOnInit() {
    this.httpService.get('/assets/data/banners.json')
    .subscribe(res => this.banners = res)
    this.httpService.get('/assets/data/lattices.json')
    .subscribe(res => this.lattices = res)
    this.httpService.get('/assets/data/article.json')
    .subscribe(res => this.article = res.content)
  }

}
