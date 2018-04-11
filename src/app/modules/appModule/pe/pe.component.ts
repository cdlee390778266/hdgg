import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { simAnim } from '../../../animations';
import { HttpService } from '../../../service/http.service';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-pe',
  templateUrl: './pe.component.html',
  styleUrls: ['./pe.component.css'],
  animations: [simAnim]
})
export class PEComponent implements OnInit {

  constructor(private httService: HttpService, private route: ActivatedRoute) { }

  public pe: any = {
    "src": "",
    "dsc": "",
    "more": "",
    "name": "",
    "price": "",
    "article": ""
  }

  public url: string;

  public defaultImg: string = CONFIG.defaultImgUrl;

  ngOnInit() {
    switch (this.route.snapshot.paramMap.get('id')) {
      case "0": 
        this.url = '/assets/data/pe/pe0.json';
        break;
      case "1": 
        this.url = '/assets/data/pe/pe1.json';
        break;
      case "2": 
        this.url = '/assets/data/pe/pe2.json';
        break;
      case "3": 
        this.url = '/assets/data/pe/pe3.json';
        break;
      default:
        this.url = '/assets/data/pe/pe0.json';
        break;
    }

    this.httService.get(this.url).subscribe(data => this.pe = data);
  }

}
