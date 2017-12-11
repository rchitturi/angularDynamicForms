import { Injectable, Inject } from '@angular/core';

export interface InternalCookie {
  [key: string]: any;
}

@Injectable()
export class SessionsService {

  public _sessions: any = [];

  public _session: InternalCookie = {};

  constructor(
    // @Inject('REQUEST') public request: any
  ) {}

  public get sessions() {
    return this._sessions;
  }

  public set sessions( session ) {
    throw new Error('do not mutate the sessions directly');
  }

  public get() {
    return this.sessions;
  }

  public set() {
    return this._sessions =  this.getServer() || this.getClient();
  }

  public getStorage( object?: any ) {
    return object ? sessionStorage.getItem(object) : this.listStorage();
  }

  private getClient():any {
    try {
      // if (document) {
      //   console.log('document');
      //   return this.listCookies(document.cookie);
      // }
      return document ? this.listSessions(document.cookie) : null;
    } catch (err) {
      console.log('ERROR');
      return false;
    }
  }

  private getServer():any {
    try {
      // if (this.request.headers) {
      //   return this.listCookies(this.request.headers.cookie);
      // }
      // return this.request.headers ? this.listSessions(this.request.headers.cookie) : null;
      return false;
    } catch (err) {
      console.log('ERROR');
      return false;
    }
  }

  private listStorage() {
    const aArray: any = {};
    for ( let i = 0, len = sessionStorage.length; i < len; ++i ) {
      aArray[sessionStorage.key( i )] = JSON.parse(sessionStorage.getItem( sessionStorage.key( i ) ));
    }
    return aArray;
  }

  private listSessions( sessions: any ) {
    const theSessions = sessions.split(';');
    const aArray = [];
    const aObject = {};
    if (theSessions.length > 0) {
      for (let i = 1 ; i <= theSessions.length; i++) {
        if (theSessions[i - 1].trim() !== '') {
          const session = theSessions[i - 1].trim().split('=');
          const o = {
            key: session[0],
            value: session[1]
          };
          aArray.push(o);
        }
      }
    }
    return aArray;
  }

}
