import React from 'react';

export default (props: any) => {
  return (
    <div>
      <h1>CommonLayouts</h1>
      <div>
        <div style={{ padding: 20 }}>{props.children}</div>
      </div>
    </div>
  );
};
