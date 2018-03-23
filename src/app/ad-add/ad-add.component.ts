import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-ad-add',
  templateUrl: './ad-add.component.html',
  styleUrls: ['./ad-add.component.css'],
  animations: [simAnim]
})
export class AdAddComponent implements OnInit {

  constructor() { }

  fileList = [
	  // {
	  //   uid: -1,
	  //   name: 'xxx.png',
	  //   status: 'done',
	  //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	  // }
  ];
  previewImage = '';
  previewVisible = false;

  ngOnInit() {
  }

}
