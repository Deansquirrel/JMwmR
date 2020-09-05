//==============================================================
//Common
const constants = {
  update_token: 'LOGIN_UPDATE_TOKEN',
};

//==============================================================
//Store
export interface ILoginState {
  token: string;
}

const initialState: ILoginState = {
  token: '',
};
//==============================================================
//Action
export interface ILoginAction {
  type: string;
  data: any;
}

export const ActionLoginUpdateToken = (token: string): ILoginAction => ({
  type: constants.update_token,
  data: token,
});

//==============================================================
//Reduce
export const ReducerLogin = (state = initialState, action: ILoginAction) => {
  switch (action.type) {
    case constants.update_token:
      return {
        ...state,
        token: action.data,
      };
    default:
      return state;
  }
};
//==============================================================
