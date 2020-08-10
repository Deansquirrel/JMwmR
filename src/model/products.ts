export interface IProduct {
  key: number;
  id: number;
  name: string;
}

declare interface IDel {
  payload: number;
}

export default {
  nampspace: 'products',
  state: [
    { name: 'dva', id: 1 },
    { name: 'antd', id: 2 },
  ],
  reducers: {
    delete(state: Array<IProduct>, action: IDel) {
      return state.filter(item => item.id !== action.payload);
    },
  },
};
