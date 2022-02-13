import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AdminDashboardComponent} from './delsos/admin-dashboard/admin-dashboard.component';
import {StatisticsComponent} from './delsos/statistics/statistics.component';
import {ShoppersComponent} from './delsos/shoppers/shoppersComponent';
import {StoresComponent} from './delsos/stores/stores.component';
import {StoresRequestsComponent} from './delsos/stores-requests/stores-requests.component';
import {DeliveriesComponent} from './delsos/deliveries/deliveries.component';
import {ShopperInfoComponent} from './delsos/shopper-info/shopper-info.component';
import {AuthGuard} from './delsos/guards/auth.guard';
import {SignInComponent} from './delsos/sign-in/sign-in.component';
import {NotFoundPageComponent} from './delsos/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'statistics',
        component: StatisticsComponent,

      },
      {
        path: 'shoppers',
        component: ShoppersComponent
      },
      {
        path: 'stores',
        component: StoresComponent
      },
      {
        path: 'requests',
        component: StoresRequestsComponent
      },
      {
        path: 'deliveries',
        component: DeliveriesComponent
      }, {
        path: 'shopper/info/:id',
        component: ShopperInfoComponent
      },

    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, {
    path: '**',
    component:NotFoundPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      // useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule {
}
