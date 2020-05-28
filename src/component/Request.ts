import { history } from 'umi';

export enum RequestMethod {
  METHOD_GET,
  METHOD_POST,
}

// export function request(type: RequestMethod, url: string, data = {}) {
//     let body = undefined;
//     let method = '';
//     if (type == RequestMethod.METHOD_GET) {
//         body = undefined;
//         method = 'GET';
//     } else {
//         body = JSON.stringify(data);
//         method = 'POST';
//     }
//     return fetch(url, {
//         method,
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Authorization': localStorage.getItem('token'),
//         },
//         body
//     })
//         .then((res => {
//             if (res.status === 401) {
//                 history.replace('/login');
//                 return Promise.reject('Unauthorized.');
//             }
//             return res;
//         })

// }
