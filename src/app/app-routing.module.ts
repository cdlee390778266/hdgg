import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/appModule/home/home.component'
import { PEComponent } from './modules/appModule/pe/pe.component';

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
  {
    path: 'auth',
    loadChildren: 'app/modules/authModule/auth.module#AuthModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/modules/adminModule/admin.module#AdminModule'
  },
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
