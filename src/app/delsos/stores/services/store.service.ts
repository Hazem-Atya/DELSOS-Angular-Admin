import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Shopper} from '../../shoppers/model/shopper';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CONSTANTS} from '../../utils/constants';
import {Store} from '../model/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private http: HttpClient
  ) { }
  getAllStores(skip: number=0, limit?: number): Observable<Partial<Store>[]> {

    const params = new HttpParams({
      fromObject: {
        skip: skip,
        limit: limit,
      }
    });

    return this.http.get<Partial<Store>[]>
    (`${CONSTANTS.apiURL}/store/all/activated`,
      {params: params});
  }
}
