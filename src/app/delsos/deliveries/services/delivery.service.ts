import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shopper} from '../../shoppers/model/shopper';
import {CONSTANTS} from '../../utils/constants';
import {Delivery} from '../modal/delivery.modal';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {


  constructor(private http: HttpClient) {
  };
  getAllDeliveries(skip: number=0, limit?: number): Observable<Partial<Delivery>[]> {

    const params = new HttpParams({
      fromObject: {
        skip: skip,
        limit: limit,
      }
    });

    return this.http.get<Partial<Delivery>[]>
    (`${CONSTANTS.apiURL}/delivery/entire`,
      {params: params});
  }

  getNumberOfDeliveries():Observable<number>{
    return this.http.get<number>(`${CONSTANTS.apiURL}/delivery/number`)
  }
}
