import {Component, OnInit} from '@angular/core';
import {DeliveryService} from './services/delivery.service';
import {Delivery, DELIVERY_STATUS, PRIORITY} from './modal/delivery.modal';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit {

  deliveries: Partial<Delivery> [];
  displayedDeliveries: Partial<Delivery> [];
  deliveryPriority = ['HIGH', 'NORMAL', 'LOW'];
  deliveryStatus = ['Pending', 'On the way', 'Delivered'];

  constructor(
    private deliveryService: DeliveryService,
    private toastr: ToastrService
  ) {
  }
  activeLink=1;
  ngOnInit(): void {
    this.getAlldeliveries();
  }

  getAlldeliveries() {
    this.deliveryService.getAllDeliveries().subscribe(
      {
        next: (response) => {
          this.deliveries = response;
          this.displayedDeliveries = response;
        },
        error: (error: HttpErrorResponse) => {
          this.toastr.error('Cannot load the deliveries, please try later');
        }
      }
    );
  }

  filter(choice) {
    this.activeLink=choice;
    switch (choice) {
      case 1:
        console.log('i am here');
        console.log(this.deliveries);
        this.displayedDeliveries=this.deliveries;
        break;
      case 2:

       this.displayedDeliveries= this.deliveries.filter((deliv)=>{
           return deliv.status==DELIVERY_STATUS.PENDING;
        });
        console.log("tata",this.displayedDeliveries);
        console.log("baba",this.deliveries);

        break;
      case 3:
        this.displayedDeliveries = this.deliveries.filter((deliv)=>{
          return deliv.status==DELIVERY_STATUS.ON_THE_WAY;
        });
        console.log(this.deliveries);

        break;
        case 4:
        this.displayedDeliveries=this.deliveries.filter((deliv)=>{
         return  deliv.status==DELIVERY_STATUS.DELIVERED;
        });
        break;

    }
  }
}
