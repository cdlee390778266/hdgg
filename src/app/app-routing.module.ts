import { NgModule } from '@angular/core';
import { Routes, RouterModule,  PreloadAllModules } from '@angular/router';

import { AuthGuard } from './service/auth-guard.service';
import { AdminGuard } from './service/admin-guard.service';

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
    canLoad: [AuthGuard],
    loadChildren: 'app/modules/authModule/auth.module#AuthModule'
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
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
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: true,
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    }
    )],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard]
})
export class AppRoutingModule { }
