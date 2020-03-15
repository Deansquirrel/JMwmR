const constants = {
    UserName: "USER_NAME",
    IsLogin: "IS_LOGIN",
    Token: "TOKEN",
};

declare interface ILoginAction {
    type: string;
    data: any;
}

export interface ILoginState {
    username: string | undefined;
    isLogin: boolean | undefined;
    token: string | undefined;
}

const loginInitialState: ILoginState = {
    username: undefined,
    isLogin: undefined,
    token: undefined,
}

export const LoginUserName = (data: string): ILoginAction => (
    {
        type: constants.UserName,
        data
    }
);

export const LoginIsLogin = (data: boolean): ILoginAction => (
    {
        type: constants.IsLogin,
        data
    }
)

export const LoginToken = (data: string): ILoginAction => (
    {
        type: constants.Token,
        data
    }
)

export const login = (state = loginInitialState, action: ILoginAction): ILoginState => {
    switch (action.type) {
        case constants.UserName:
            return Object.assign({}, state, {
                username: action.data
            });
        case constants.IsLogin:
            return Object.assign({}, state, {
                isLogin: action.data
            });
        case constants.Token:
            return Object.assign({}, state, {
                token: action.data
            });
        default:
            return state;
    }
}