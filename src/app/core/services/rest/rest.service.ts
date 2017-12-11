import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ErrorHandlerService } from '../error-handler.service';

@Injectable()
export class RestService {

  constructor(
    private _http: Http,
    private exception: ErrorHandlerService
  ) {

  }

  public get(endpoint: string, params?: any): Observable<any> {
    return this._http
      .get(
        endpoint,
        this.options(params ? params : null, 'get')
      )
      .map((response: Response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('This request has failed ' + response.status);
        } else {
          return response.json();
        }
      })
      .catch(this.exception.handleError);
  }

  public post(endpoint: string, data: Object = null): Observable<any> {
    let body = data ? JSON.stringify(data) : null;
    return this._http
      .post(
        endpoint,
        body,
        this.options
      )
      .map((response: Response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('This request has failed ' + response.status);
        } else {
          return response.json();
        }
      })
      .catch(this.exception.handleError);
  }

  public put(endpoint: string, data: Object = null): Observable<any> {
    let body = data ? JSON.stringify(data) : null;
    return this._http
      .put(
        endpoint,
        body,
        this.options
      )
      .map((response: Response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('This request has failed ' + response.status);
        } else {
          return response.json();
        }
      })
      .catch(this.exception.handleError);
  }

  public delete(endpoint: string, data: Object = null): Observable<any> {
    let body = data ? JSON.stringify(data) : null;
    return this._http
      .delete(
        endpoint,
        this.options(body ? body : null, 'delete')
      )
      .map((response: Response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('This request has failed ' + response.status);
        } else {
          return response.json();
        }
      })
      .catch(this.exception.handleError);
  }

  private get headers(): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', '');
    return headers;
  }

  private options( body?: any, type?: string ): RequestOptions {
    let options = {
      headers: this.headers,
      withCredentials: true
    };
    if (type === 'delete') {
      options['body'] = body;
    } else if (type === 'get') {
      options['search'] = this.getParams(body);
    }
    return new RequestOptions(options);
  }

  private getParams( params: any ): URLSearchParams {
    let paramSet: URLSearchParams = new URLSearchParams();

    for (let key in params) {
      if (params[key]) {
        paramSet.set(key, params[key]);
      }
    }
    return paramSet;
  }

}
