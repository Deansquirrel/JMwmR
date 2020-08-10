import React from 'react';
import PropTypes from 'prop-types';

import { Table, Popconfirm, Button } from 'antd';
import { IProduct } from '@/model/products';

interface IDelete {
  (id: number): void;
}

const ProductList = (onDelete: IDelete, products: Array<IProduct>) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text: string, record: IProduct) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
