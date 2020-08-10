import React from 'react';
import styles from './index.less';

// import { connect } from 'umi';
// import ProductList from '@/components/ProductList';

// const Products = ({ dispatch, products }) => {
//   function handleDelete(id: number) {
//     dispatch({
//       type: 'products/delete',
//       payload: id,
//     })
//   }

//   return (
//     <div>
//       <h2>List of Products</h2>
//       <ProductList onDelete={handleDelete} products={products} />
//     </div>
//   )
// }

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};

// export default connect(({ products }) => ({
//   products,
// }))(Products);
