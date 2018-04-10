import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FootComponent } from './foot/foot.component';

import { EmailDirective } from '../../Directives/email.directive';
import { PhoneDirective } from '../../Directives/phone.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
  	NavBarComponent,
  	FootComponent,
  	EmailDirective,
    PhoneDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    NavBarComponent,
    FootComponent,
    EmailDirective,
    PhoneDirective
  ]
})
export class SharedModule { }
