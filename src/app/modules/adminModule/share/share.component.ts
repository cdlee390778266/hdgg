import { Component, OnInit } from '@angular/core';
import { simAnim } from '../../../animations';
import { CONFIG } from '../../../config';

@Component({
  selector: 'hd-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
  animations: [simAnim]
})
export class ShareComponent implements OnInit {

	constructor() { }

	public isVisible: boolean = false;
	public defaultImg: string = CONFIG.defaultImgUrl;

	showModal() {
		this.isVisible = true;
	}

	close() {
		this.isVisible = false;
	}

	ngOnInit() {
	}

}
