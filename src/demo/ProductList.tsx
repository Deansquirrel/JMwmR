import BaseComponent from '../components/BaseComponent ';
import React from 'react';

import { Table, Button } from 'antd';
import { IProduct, ProductListActionDelete } from './ProductData';

import store from '@/data/store';

const onDelete = (id: number) => {
  console.log(id);
  store.dispatch(ProductListActionDelete(id));
};

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Actions',
    render: (text: string, record: IProduct) => {
      return (
        <Button type="primary" onClick={() => onDelete(record.id)}>
          Delete
        </Button>
      );
    },
  },
];

const products = () => {
  const list = store.getState().ProductListReducer?.list;
  if (list == undefined) return [];
  let products: { name: string; id: number; key: number }[] = [];
  let index = 0;
  list.forEach(item => {
    products.push({ name: item.name, id: item.id, key: index++ });
  });
  return products;
};

class ProductList extends BaseComponent {
  render() {
    const p = products();
    return <Table dataSource={p} columns={columns} />;
  }
}

export default ProductList;
