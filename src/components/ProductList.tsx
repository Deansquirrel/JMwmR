import React from 'react';
import PropTypes from 'prop-types';

import { Table, Space, Button, Popconfirm } from 'antd';
import { IProduct } from '@/model/products';

const ProductList = () => {
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
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button type="primary">Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

  const onDelete = (id: number) => {
    console.log(id);
  };

  const products: Array<IProduct> = [
    { name: 'dva', id: 1, key: 1 },
    { name: 'antd', id: 2, key: 2 },
  ];

  return <Table dataSource={products} columns={columns} />;
};

export default ProductList;
