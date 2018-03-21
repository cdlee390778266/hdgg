import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private banners = [
      {
          imgSrc: '/assets/images/flash1.png',
          href: ''
      },
      {
          imgSrc: '/assets/images/flash1.png',
          href: ''
      },
      {
          imgSrc: '/assets/images/flash1.png',
          href: ''
      }
  ]

  private lattices = [
      {
          imgSrc: '/assets/images/icon1.png',
          text: '产品体验',
          href: ''
      },
      {
          imgSrc: '/assets/images/icon2.png',
          text: '系统公告',
          href: ''
      },
      {
          imgSrc: '/assets/images/icon3.png',
          text: '经纪交流',
          href: ''
      },
      {
          imgSrc: '/assets/images/icon4.png',
          text: '互动规则',
          href: ''
      }
  ]

  ngOnInit() {
  }

}
