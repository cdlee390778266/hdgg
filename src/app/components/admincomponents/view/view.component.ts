import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../../../animations';
import { HdStateService } from '../../../service/hd.state.service';
import { HttpService } from '../../../service/http.service';

@Component({
  selector: 'hd-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations: [simAnim]
})
export class ViewComponent implements OnInit {

  constructor(private hdStateService: HdStateService, private httpService: HttpService) { }

  public nname: string;

  public uid: number;

  public level: number;

  public record: number;

  ngOnInit() {
  	this.httpService.get('/assets/data/login/login.json')
  		.subscribe(res => {
  		  this.hdStateService.getHdStateObservable()
          .subscribe(hdState =>  {
            this.nname = hdState.nname;
            this.uid = hdState.uid;
            this.level = hdState.level;
            this.record = hdState.record;
          })
  		})
  }

}
