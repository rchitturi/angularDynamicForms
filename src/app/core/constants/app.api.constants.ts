import { Injectable } from '@angular/core';

@Injectable()
export class ApiConstants {

  public static ROOT: string = process.env.API_URL;
  public static VS: string = process.env.API_VS;
  public static PREFIX: string = `/v${ApiConstants.VS}${process.env.API_PREFIX}`;
  public static ENDPOINTHOST: string = `${ApiConstants.ROOT}${ApiConstants.PREFIX}`;

  public static ENDPOINTS = {
    // AUTH
    login: '/auth/login',
    logout: '/auth/logout'
  };

  public static _ENDPOINT( API: string ) {
    return ApiConstants.ENDPOINTHOST + ApiConstants.ENDPOINTS[API];
  }

}
