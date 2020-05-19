import { IUserInfo } from '@/service_interface/user.d';

const constants = {
  UserInfo: 'USER_INFO',
};

export interface IUserState {
  user_info: IUserInfo | undefined;
  // expire_date: Date;
}

const userInitialState: IUserState = {
  user_info: undefined,
  // expire_date: new Date(),
};

declare interface IUserAction {
  type: string;
  data: any;
}

export const UserInfo = (data: IUserInfo | undefined): IUserAction => ({
  type: constants.UserInfo,
  data,
});

export const user = (
  state = userInitialState,
  action: IUserAction,
): IUserState => {
  switch (action.type) {
    case constants.UserInfo:
      return Object.assign({}, state, {
        username: action.data,
      });
    default:
      return state;
  }
};
