export interface IMenuState {
  openKeys: string[];
  selectedKeys: string[];
}

const menuInitialState: IMenuState = {
  openKeys: [],
  selectedKeys: [],
};

declare interface IMenuAction {
  type: string;
  data: any;
}

const constants = {
  openKeys: 'OPEN_KEYS',
  selectedKeys: 'SELECTED_KEYS',
};

export const OpenKeys = (data: string[]): IMenuAction => ({
  type: constants.openKeys,
  data,
});

export const SelectedKeys = (data: string[]): IMenuAction => ({
  type: constants.selectedKeys,
  data,
});

export const menu = (
  state = menuInitialState,
  action: IMenuAction,
): IMenuState => {
  switch (action.type) {
    case constants.openKeys:
      return Object.assign({}, state, {
        openKeys: action.data,
      });
    case constants.selectedKeys:
      return Object.assign({}, state, {
        selectedKeys: action.data,
      });
    default:
      return state;
  }
};
