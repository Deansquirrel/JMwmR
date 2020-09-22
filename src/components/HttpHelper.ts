export interface RespData<T> {
  code: number;
  message: string;
  data?: T;
}

//TODO HTTP返回结果为非json时未测试

export const HttpGetJson = async <T>(url: string): Promise<RespData<T>> => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(function(data: RespData<T>) {
      return data;
    })
    .catch(function(e) {
      console.log(e);
      let resp: RespData<T> = {
        code: -1,
        message: e,
        data: undefined,
      };
      return resp;
    });
};

export const HttpPostJson = async <T>(
  url: string,
  body: {},
): Promise<RespData<T>> => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(function(data: RespData<T>) {
      return data;
    })
    .catch(function(e) {
      console.log(e);
      let resp: RespData<T> = {
        code: -1,
        message: e,
        data: undefined,
      };
      return resp;
    });
};
