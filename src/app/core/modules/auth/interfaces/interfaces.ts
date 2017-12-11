export interface ILoginData {
  username: string;
  password: string;
}

export interface ISignupData extends ILoginData, IUserDetails {
}

export interface ITokenUser {
  username: string;
  role: string;
  token: string;
}

export interface IUserDetails {
  firstName: string;
  lastName: string;
}

export interface ISecurity {
  mfa: boolean;
  mfaMethod: string;
}

export interface IDBUser extends ITokenUser {
  security: ISecurity;
  userDetails: IUserDetails;
}
