import {Component, OnInit} from '@angular/core';
import {Shopper} from './model/shopper';


@Component({
  selector: 'app-shoppers',
  templateUrl: './shoppers.component.html',
  styleUrls: ['./shoppers.component.scss']
})

export class ShoppersComponent implements OnInit {

  shoppers: Shopper[] = [
    {
      name: 'hazem', age: 23, phoneNumber: 25969655, email: 'hazem@gmail.com',
      previousDeliv: 10, delivered: 95, imagePath: 'profile.jpg'
    },
    {
      name: 'Hamza', age: 23, phoneNumber: 28369819, email: 'mahajib@gmail.com',
      previousDeliv: 57, delivered: 20, imagePath: 'profile.jpg'
    },
    {
      name: 'Amal', age: 70, phoneNumber: 12587965, email: 'amal@gmail.com',
      previousDeliv: 78, delivered: 51, imagePath: 'profile2.png'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
