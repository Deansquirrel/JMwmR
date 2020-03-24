export interface IMenuState {
    defaultOpenKeys: string[];
    defaultSelectedKeys: string[];
}

const menuInitialState: IMenuState = {
    defaultOpenKeys: [],
    defaultSelectedKeys: [],
}

declare interface IMenuAction {
    type: string;
    data: any;
}

const constants = {
    defaultOpenKeys: "DEFAULT_OPEN_KEYS",
    defaultSelectedKeys: "DEFAULT_SELECTED_KEYS",
};

export const DefaultOpenKeys = (data: string[]): IMenuAction => (
    {
        type: constants.defaultOpenKeys,
        data
    }
);

export const DefaultSelectedKeys = (data: string[]): IMenuAction => (
    {
        type: constants.defaultSelectedKeys,
        data
    }
);

export const menu = (state = menuInitialState, action: IMenuAction): IMenuState => {
    switch (action.type) {
        case constants.defaultOpenKeys:
            return Object.assign({}, state, {
                defaultOpenKeys: action.data
            });
        case constants.defaultSelectedKeys:
            return Object.assign({}, state, {
                defaultSelectedKeys: action.data
            });
        default:
            return state;
    }
}