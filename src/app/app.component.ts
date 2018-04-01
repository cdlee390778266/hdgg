import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HdStateService } from './service/hd.state.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public isShowLoading: boolean;

  constructor(
    private getHdStateService: HdStateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
    ) {}

  ngOnInit() {
    this.getHdStateService.getHdStateObservable()
      .subscribe(hdState => {
        console.log(hdState)
         this.isShowLoading = hdState.isLoading;
      })

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title'] || '互动广告'));
  }

}
