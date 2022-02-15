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
  getAllActivatedStores(skip: number=0, limit?: number): Observable<Partial<Store>[]> {

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

  getAllDesactivatedStores(skip: number=0, limit?: number): Observable<Partial<Store>[]> {

    const params = new HttpParams({
      fromObject: {
        skip: skip,
        limit: limit,
      }
    });

    return this.http.get<Partial<Store>[]>
    (`${CONSTANTS.apiURL}/store/all/deactivated`,
      {params: params});
  }

  acceptStoreRequest(id):Observable<Store>{
   return this.http.get<Store> (`${CONSTANTS.apiURL}/store/activate/${id}`);
  }
  deleteStore(id):Observable<Store>{
    return this.http.delete<Store> (`${CONSTANTS.apiURL}/store/delete/${id}`);
  }
  getNumberOfStores():Observable<number>{
    return this.http.get<number>(`${CONSTANTS.apiURL}/store/number`)
  }
}
