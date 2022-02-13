import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '../../stores/model/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  // getAllDeactivatedStores():Observable<Store[]>{
  //   this.http.get()
  // }
}
