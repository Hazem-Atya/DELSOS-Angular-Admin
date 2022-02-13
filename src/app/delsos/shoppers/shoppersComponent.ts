import {Component, OnInit} from '@angular/core';
import {Shopper} from './model/shopper';
import {ShopperService} from './services/shopper.service';
import {error} from 'protractor';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-shoppers',
  templateUrl: './shoppers.component.html',
  styleUrls: ['./shoppers.component.scss']
})

export class ShoppersComponent implements OnInit {
  shoppersPerPage = 3;
  currentPage;
  pages = [];
  shoppers = [];
  currentDisplayedShoppers = [];
  private shoppersPerRequest= 9;

  constructor(private shopperService: ShopperService) {
  }

  ngOnInit(): void {
    this.getShoppers(0, true);
  }

  next() {
    if (this.currentPage == this.pages[this.pages.length - 1]) {
      console.log(this.pages[this.pages.length - 1] * this.shoppersPerPage);
      const skip = this.pages[this.pages.length - 1] * this.shoppersPerPage;
      this.getShoppers(skip, true);
    } else {
      const pageNumber = this.currentPage + 1;
      this.changePage(pageNumber);
    }
  }

  previous() {
    if(this.currentPage==1)
        return
    if (this.currentPage == this.pages[0]) {
      const skip = (this.pages[0] - this.pages.length-1) * this.shoppersPerPage;
      this.getShoppers(skip, false);
    } else {
      const pageNumber = this.currentPage - 1;
      this.changePage(pageNumber);
    }
  }

  changePage(pageNumber) {
    this.currentPage = pageNumber;
    const start = (pageNumber - this.pages[0]) * this.shoppersPerPage;
    this.currentDisplayedShoppers = this.shoppers.slice(start, start + this.shoppersPerPage);
  }

  getShoppers(skip: number, forward: boolean) {
    this.shopperService.getAllShoppers(skip, this.shoppersPerRequest).subscribe(
      {
        next: (response) => {

          response.forEach((el) => {
              el.previousDeliv = Math.floor(Math.random() * 180);
              el.imagePath = 'profile.jpg';
              el.delivered = Math.floor(Math.random() * 100);
            }
          );

          this.shoppers = response;
          this.currentDisplayedShoppers = this.shoppers.slice(0, this.shoppersPerPage);
          console.log(response);
          const nbPages = Math.ceil(response.length / this.shoppersPerPage);
          console.log("nbpages= ",nbPages);
          let firstPage;
          if (skip == 0) {
            firstPage = 1;
          }
          else if (forward) {
            firstPage = this.pages[this.pages.length - 1] + 1;
          } else {
            firstPage = this.pages[0] -
              Math.floor(this.shoppersPerRequest / this.shoppersPerPage);
          }
          this.pages = Array(nbPages).fill(1).map((x, i) => i + firstPage);
          this.currentPage = this.pages[0];
          console.log(firstPage);
          console.log(this.pages);
        },
        error: (error: HttpErrorResponse) => {
          this.shoppers = this.shopperService.getFakeShoppers();
          console.log(error);
        }
      }
    );
  }
}
