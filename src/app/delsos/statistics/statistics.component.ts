import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  constructor() { }
    nbShoppers=Math.ceil(Math.random()*100);
    nbStores=Math.ceil(Math.random()*100);
    nbDeliveries=Math.ceil(Math.random()*100);
    successfulDeliveries=Math.ceil(Math.random()*100);
  ngOnInit(): void {
    this.successfulDeliveries=(this.successfulDeliveries*100)/this.nbDeliveries;
    if(this.successfulDeliveries>100)
        this.successfulDeliveries=48
  }

}
