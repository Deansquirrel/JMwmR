import React from 'react';
import BaseComponent from '@/component/BaseComponent';

import { Link } from 'umi';

class Welcome extends BaseComponent {
  render() {
    return (
      <div>
        <div>
          <h1>Welcome</h1>
        </div>
        <Link to="/">to Home page</Link>
      </div>
    );
  }
}

export default Welcome;
