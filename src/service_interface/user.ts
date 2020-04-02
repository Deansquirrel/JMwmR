import { IResponseMessage } from './common';
import { IUserInfo } from './user.d';

class User {
  checkLoginBySession(session: string): void {
    console.log(session);
  }

  async checkLogin(
    username: string,
    password: string,
  ): Promise<IResponseMessage<IUserInfo>> {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log('request failed', e);
      return {
        code: -1,
        msg: e.message,
        data: undefined,
      };
    }
  }
}

const user = new User();

export default user;
