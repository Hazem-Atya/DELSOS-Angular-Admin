import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShopperService} from '../shoppers/services/shopper.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-shopper-info',
  templateUrl: './shopper-info.component.html',
  styleUrls: ['./shopper-info.component.scss']
})
export class ShopperInfoComponent implements OnInit {
  shopperId: String;
  shopper;

  constructor(
    private router: ActivatedRoute,
    private shopperService: ShopperService
  ) {
    router.params.subscribe(params => {
      this.shopperId = params['id'];
    });
  }

  ngOnInit(): void {
    console.log(this.shopperId);
    this.shopperService.getShopperById(this.shopperId).subscribe(
      {
        next: (response) => {
          this.shopper = response;
          console.log(response);
          this.shopper.previousDeliv = Math.ceil(Math.random() * 100);
          this.shopper.currentDeliv = Math.ceil(Math.random() * 100);
          this.shopper.delivered = Math.ceil(Math.random() * 80);
          this.shopper.nbStores = Math.ceil(Math.random() * 80);
          this.shopper.percentageSuccessfuleliveries =
            Math.ceil((this.shopper.delivered * 100) / this.shopper.previousDeliv);

        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      }
    );
  }

}
