import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Api } from '../api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class SecurityService {

  events: Observable<boolean>

  private authenticationEvents = new BehaviorSubject<boolean>(false)

  constructor(private http: Http, private requestOptions: RequestOptions, private api: Api) {
    this.events = this.authenticationEvents.asObservable()
  }

  isAuthenticated(): boolean {
    return this.authenticationEvents.getValue()
  }

  login(username: string, password: string): Observable<string> {
    let payload = this.preparePayload(username, password)
    return this.http.post(this.api.oauthServer, payload)
      .map(response => response.json())
      .map(json => json.access_token)
      .do(token => this.onLoginSuccess(token))
  }

  logout() {
    this.requestOptions.headers.delete('Authorization')
    this.authenticationEvents.next(false)
  }

  private onLoginSuccess(token: string) {
    this.requestOptions.headers.set('Authorization', `Bearer ${token}`)
    this.authenticationEvents.next(true)
  }

  private preparePayload(username: string, password: string): URLSearchParams {
    let payload = new URLSearchParams()
    payload.set('username', username)
    payload.set('password', password)
    payload.set('grant_type', 'password')
    payload.set('client_id', 'connect-app')
    return payload
  }

}
