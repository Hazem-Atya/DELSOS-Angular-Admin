import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shopper} from '../model/shopper';
import {CONSTANTS} from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ShopperService {

  constructor(private http: HttpClient) {
  };

  getAllShoppers(skip: number, limit: number): Observable<Partial<Shopper>[]> {

    const params = new HttpParams({
      fromObject: {
        skip: skip,
        limit: limit,
      }
    });

    return this.http.get<Partial<Shopper>[]>
    (`${CONSTANTS.apiURL}/shopper/get/all`,
      {params: params});
  }

  getShopperById(id: String) {
    return this.http.get<Partial<Shopper>>(CONSTANTS.apiURL + '/shopper/' + id);
  }

  getFakeShoppers() {
    return [{
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
      }];
  }
}
