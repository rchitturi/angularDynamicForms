import { Injectable, Inject } from '@angular/core';

export interface InternalCookie {
  [key: string]: any;
}

@Injectable()
export class CookieService {

  public _cookies: any = [];

  public _cookie: InternalCookie = {};

  // constructor(
  //   // @Inject('REQUEST') public request: any
  // ) {}

  public get cookies() {
    return this._cookies;
  }

  public set cookies( cookie ) {
    throw new Error('do not mutate the cookies directly');
  }

  public get() {
    return this.cookies;
  }

  public set() {
    return this._cookies =  this.getServer() || this.getClient();
  }

  public getStorage( object?: any ) {
    return object ? localStorage.getItem(object) : this.listStorage();
  }

  private getClient(): any {
    try {
      // if (document) {
      //   console.log('document');
      //   return this.listCookies(document.cookie);
      // }
      return document ? this.listCookies(document.cookie) : null;
    } catch (err) {
      console.log('ERROR');
      return false;
    }
  }

  private getServer(): any {
    try {
      // if (this.request.headers) {
      //   return this.listCookies(this.request.headers.cookie);
      // }
      // return this.request.headers ? this.listCookies(this.request.headers.cookie) : null;
      return false;
    } catch (err) {
      console.log('ERROR');
      return false;
    }
  }

  private listStorage() {
    const aArray: any = {};
    for ( let i = 0, len = localStorage.length; i < len; ++i ) {
      aArray[localStorage.key( i )] = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
    }
    return aArray;
  }

  private listCookies( cookies: any ) {
    const theCookies = cookies.split(';');
    const aArray = [];
    const aObject = {};
    if (theCookies.length > 0) {
      for (let i = 1 ; i <= theCookies.length; i++) {
        if (theCookies[i - 1].trim() !== '') {
          const cookie = theCookies[i - 1].trim().split('=');
          const o = {
            key: cookie[0],
            value: cookie[1]
          };
          aArray.push(o);
        }
      }
    }
    return aArray;
  }

}
