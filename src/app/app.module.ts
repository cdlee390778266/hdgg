import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/reducer';
import { HttpService } from './service/http.service';
import { HdStateService } from './service/hd.state.service';
import { AuthService } from './service/auth.service';

import { SharedModule } from './modules/sharedModule/shared.module';
import { AuthModule } from './auth.module';
import { AdminModule } from './admin.module';

import { AppRoutingModule } from './router/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/appcomponents/home/home.component';
import { PEComponent } from './components/appcomponents/pe/pe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PEComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    AdminModule,
    AppRoutingModule,
    StoreModule.forRoot({ reducer: reducer }) 
  ],
  providers: [HttpService, HdStateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
