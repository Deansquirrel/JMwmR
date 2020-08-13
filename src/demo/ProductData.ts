//==============================================================
//Common
export interface IProduct {
  id: number;
  name: string;
}
const constants = {
  del: 'DELETE',
};
//==============================================================
//Store
export interface IProductListState {
  list: Array<IProduct>;
}

const initialState: IProductListState = {
  list: [
    { name: 'dva', id: 1 },
    { name: 'antd', id: 2 },
  ],
};

//==============================================================
//Action
export interface IProductListAction {
  type: string;
  data: any;
}

export const ProductListActionDelete = (id: number): IProductListAction => ({
  type: constants.del,
  data: id,
});

//==============================================================
//Reduce
export const ProductListReducer = (
  state = initialState,
  action: IProductListAction,
): IProductListState => {
  switch (action.type) {
    case constants.del:
      return {
        ...state,
        list: state.list.filter(item => item.id != action.data),
      };
    default:
      return state;
  }
};
//==============================================================
