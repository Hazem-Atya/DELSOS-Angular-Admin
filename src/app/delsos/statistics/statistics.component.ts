import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  constructor() { }
    nbShoppers=Math.random()*100;
    nbStores=Math.random()*100;
    nbDeliveries=Math.random()*100;
    successfulDeliveries=Math.random()*100;
  ngOnInit(): void {
    this.successfulDeliveries=(this.successfulDeliveries*100)/this.nbDeliveries;
    if(this.successfulDeliveries>100)
        this.successfulDeliveries=48
  }

}
