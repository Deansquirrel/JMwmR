import React from 'react';
import styles from './index.less';

import ProductList from '@/components/ProductList';

export default () => {
  return (
    <div>
      <ProductList />
      {/* // onDelete={onDelete} products={products}  */}
    </div>
  );
};

// export default connect(({ products }) => ({
//   products,
// }))(Products);

// // export default connect(({ products }) => ({
// //   products,
// // }))(Products);
