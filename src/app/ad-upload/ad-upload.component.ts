import { Component, OnInit } from '@angular/core';
import  { simAnim } from '../animations';

@Component({
  selector: 'hd-ad-upload',
  templateUrl: './ad-upload.component.html',
  styleUrls: ['./ad-upload.component.css'],
  animations: [simAnim]
})
export class AdUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
