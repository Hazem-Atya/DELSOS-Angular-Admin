import {Component, ElementRef, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
//import {ROUTES} from '../../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public focus;
  public listTitles: any[];
  public location: Location;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router
  ) {
    this.location = location;
  }

  ngOnInit() {
//    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  logout() {
    localStorage.removeItem('adminToken');
    this.router.navigate(['/sign-in']);
  }
}
