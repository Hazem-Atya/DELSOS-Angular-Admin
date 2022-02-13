import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {CONSTANTS} from '../../utils/constants';
import {LoginInfosDTO} from '../DTO/LoginInfos.dto';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(
    private http:HttpClient
  ) {
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('adminToken') !== null) {
      console.log('waaaaaaaaaaaaaaaaaa');
      return true;
    } else {
      return false
    }
  }
  login(loginInfos):Observable<LoginInfosDTO>{
    return this.http.post<LoginInfosDTO>(`${CONSTANTS.apiURL}/auth/login`,loginInfos)
      .pipe(map(login => {
        localStorage.setItem('adminToken', login.access_token);
        return login;
      }));

  }

}
