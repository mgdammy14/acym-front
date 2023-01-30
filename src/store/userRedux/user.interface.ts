export interface IInitialUserState {
    user: IUser | {};
    token: string;
    loading: boolean;
    error: string;
    loggedIn: boolean;
  }
  
  export interface IUser {
    idUser: number;
    username: string;
    password: string;
  }
  