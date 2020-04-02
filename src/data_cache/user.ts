const constants = {
  UserName: 'USER_NAME',
  Token: 'TOKEN',
};

export interface IUserState {
  username: string | undefined;
  token: string | undefined;
}

const userInitialState: IUserState = {
  username: undefined,
  token: undefined,
};

declare interface IUserAction {
  type: string;
  data: any;
}

export const UserUserName = (data: string): IUserAction => ({
  type: constants.UserName,
  data,
});

export const UserToken = (data: string): IUserAction => ({
  type: constants.Token,
  data,
});

export const user = (
  state = userInitialState,
  action: IUserAction,
): IUserState => {
  switch (action.type) {
    case constants.UserName:
      return Object.assign({}, state, {
        username: action.data,
      });
    case constants.Token:
      return Object.assign({}, state, {
        token: action.data,
      });
    default:
      return state;
  }
};
