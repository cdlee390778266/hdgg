import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hd-ad-add',
  templateUrl: './ad-add.component.html',
  styleUrls: ['./ad-add.component.css']
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
