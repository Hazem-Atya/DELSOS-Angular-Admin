import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare interface RouteInf {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const NAV_ROUTES: RouteInf[] = [
  { path: 'statistics', title: 'Satistics',  icon: 'ni-chart-pie-35 text-primary', class: '' },
  { path: 'shoppers', title: 'Shoppers',  icon:'ni-single-02 text-yellow', class: '' },
  { path: 'stores', title: 'Stores',  icon:'ni-cart text-info', class: '' },
  { path: 'requests', title: 'New store requests',  icon:'ni-bell-55 text-red', class: '' },
  { path: 'deliveries', title: 'Deliveries',  icon:'ni-delivery-fast text-primary', class: '' }
];
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = NAV_ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
