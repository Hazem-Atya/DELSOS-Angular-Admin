import {Component, OnInit} from '@angular/core';
import {Shopper} from '../shoppers/model/shopper';
import {ShopperService} from '../shoppers/services/shopper.service';
import {StoreService} from '../stores/services/store.service';
import {DeliveryService} from '../deliveries/services/delivery.service';
import {HttpErrorResponse} from '@angular/common/http';
import {DELIVERY_STATUS} from '../deliveries/modal/delivery.modal';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  constructor(
    private shopperService: ShopperService,
    private storeService: StoreService,
    private deliveryService: DeliveryService
  ) {
  }

  nbShoppers;
  nbStores;
  nbDeliveries;
  successfulDeliveries;

  ngOnInit(): void {
    this.getNumberOfDeliveries();
    this.getNumberOfShopper();
    this.getNumberOfStores();
    this.getNumberOfSuccessfulDeliveries();

  }

  getNumberOfShopper() {
    this.shopperService.getNumberOfShopper().subscribe({
      next: (response) => {
        this.nbShoppers = response;
      },
      error: (erreur: HttpErrorResponse) => {
        console.log(erreur);
      }
    });
  }

  getNumberOfStores() {
    this.storeService.getNumberOfStores().subscribe({
      next: (response) => {
        this.nbStores = response;
      },
      error: (erreur: HttpErrorResponse) => {
        console.log(erreur);
      }
    });
  }

  getNumberOfDeliveries() {
    this.deliveryService.getNumberOfDeliveries().subscribe({
      next: (response) => {
        this.nbDeliveries = response;
      },
      error: (erreur: HttpErrorResponse) => {
        console.log(erreur);
      }
    });
  }

  getNumberOfSuccessfulDeliveries() {
    let deliveries;
    this.deliveryService.getAllDeliveries().subscribe(
      {
        next: (response) => {
          deliveries = response;
          let suscessfulDeliveries= deliveries.filter((deliv)=>{
            return deliv.status==DELIVERY_STATUS.DELIVERED;
          })
          console.log(suscessfulDeliveries);
           this.successfulDeliveries=suscessfulDeliveries.length;
           this.successfulDeliveries=(this.successfulDeliveries*100)/this.nbDeliveries;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      }
    );
  }


}
