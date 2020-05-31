import React from 'react';
import BaseComponent from '@/component/BaseComponent';

import { history } from 'umi';

declare interface IState {
  isLoging: boolean;
}

type State = Readonly<IState>;

class Login extends BaseComponent<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      isLoging: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoging: false,
    });
  }

  render() {
    return <div>Welcome</div>;
  }
}

export default Login;
