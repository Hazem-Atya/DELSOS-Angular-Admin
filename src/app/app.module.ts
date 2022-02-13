import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { SideBarComponent } from './delsos/components/side-bar/side-bar.component';
import { NavBarComponent } from './delsos/components/nav-bar/nav-bar.component';
import { AdminDashboardComponent } from './delsos/admin-dashboard/admin-dashboard.component';
import { FooTerComponent } from './delsos/components/foo-ter/foo-ter.component';
import { StatisticsComponent } from './delsos/statistics/statistics.component';
import { ShoppersComponent } from './delsos/shoppers/shoppersComponent';
import { StoresComponent } from './delsos/stores/stores.component';
import { StoresRequestsComponent } from './delsos/stores-requests/stores-requests.component';
import { DeliveriesComponent } from './delsos/deliveries/deliveries.component';
import { ShopperInfoComponent } from './delsos/shopper-info/shopper-info.component';
import { SignInComponent } from './delsos/sign-in/sign-in.component';
import {ToastrModule} from 'ngx-toastr';
import { NotFoundPageComponent } from './delsos/not-found-page/not-found-page.component';
import {AuthentificationInterceptorProvider} from './delsos/interceptors/auth.interceptor';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    SideBarComponent,
    NavBarComponent,
    AdminDashboardComponent,
    FooTerComponent,
    StatisticsComponent,
    ShoppersComponent,
    StoresComponent,
    StoresRequestsComponent,
    DeliveriesComponent,
    ShopperInfoComponent,
    SignInComponent,
    NotFoundPageComponent
  ],
  providers: [
    AuthentificationInterceptorProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
