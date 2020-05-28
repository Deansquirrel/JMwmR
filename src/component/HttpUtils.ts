import { IResponseMessage } from '@/type/Message';
import Constant from '@/component/Constant';
import { message } from 'antd';
import { util } from 'prettier';

export enum Method {
  GET,
  POST,
}

export default class HttpUtils {
  static request<T>(type: Method, url: string, data = {}) {
    let body: string | undefined = undefined;
    let method = '';
    switch (type) {
      case Method.GET:
        body = undefined;
        method = 'GET';
        break;
      case Method.POST:
        body = JSON.stringify(data);
        method = 'POST';
        break;
    }
    let token = localStorage.getItem(Constant.LOGIN_TOKEN);
    return new Promise<IResponseMessage<T>>((resolve, reject) => {
      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token == null ? '' : token,
        },
        body,
      })
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static handleData<T>(data: IResponseMessage<T>, slient: boolean = false) {
    if (data.code == 0) {
      return data.data;
    }
    if (!slient) {
      message.error(`error:[${data.code}]${data.msg}`);
    }
    return undefined;
  }
}
