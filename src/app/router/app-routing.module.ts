import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/appcomponents/home/home.component';
import { PEComponent } from '../components/appcomponents/pe/pe.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: '互动广告'
    }
  },
  {
    path: 'pe/:id',
    component: PEComponent,
    data: {
      title: '广告体验'
    }
  },
  // {
  //   path: 'auth',
  //   loadChildren: 'app/auth.module#AuthModule'
  // },
  {
    path: '**',
    component: HomeComponent,
    data: {
      title: '互动广告'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
