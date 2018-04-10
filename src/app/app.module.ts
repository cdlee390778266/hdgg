import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/reducer';
import { HttpService } from './service/http.service';
import { HdStateService } from './service/hd.state.service';
import { AuthService } from './service/auth.service';

import { SharedModule } from './modules/sharedModule/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/appModule/home/home.component'
import { PEComponent } from './modules/appModule/pe/pe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PEComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({ reducer: reducer }) 
  ],
  providers: [HttpService, HdStateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
