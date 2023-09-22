export interface UserState {
  user: {
    email: string;
    token: string;
  };
}
export interface RootState {
  user: UserState;
}
