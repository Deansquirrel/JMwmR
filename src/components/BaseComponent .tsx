import React from 'react';

import store from '@/data/store';

class BaseComponent<P = {}, S = {}, SS = any> extends React.Component<
  P,
  S,
  SS
> {
  unmount: boolean | undefined;
  unsubscribe: any;

  componentDidMount() {
    if (super.componentDidMount != undefined) {
      super.componentDidMount();
    }
    this.unmount = false;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unmount = true;
    this.unsubscribe();
    if (super.componentWillUnmount != undefined) {
      super.componentWillUnmount();
    }
  }

  setState<K extends keyof S>(
    state:
      | ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null)
      | (Pick<S, K> | S | null),
    callback?: () => void,
  ) {
    if (this.unmount == true) return;
    super.setState(state, callback);
  }
}

export default BaseComponent;
