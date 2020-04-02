import mockjs from 'mockjs';

import { uuid } from '../src/component/tool';

export default {
  'GET /api/user': { users: [1, 2] },
  '/api/users/1': { id: 1 },
  // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
  'POST /api/login': (req: any, res: any) => {
    const data = req.body;
    setTimeout(() => {
      if (data.username == 'yuansong' && data.password == 'yuansong') {
        res.json({
          code: 0,
          msg: 'success',
          data: {
            username: data.username,
            token: uuid(),
          },
        });
      } else {
        res.json({
          code: -1,
          msg: 'login failed',
        });
      }
    }, 1000);
  },
  'POST /api/record/add': (req: any, res: any) => {
    const data = req.body;
    console.log(data);
    setTimeout(() => {
      if (data.money > 10) {
        res.json({
          code: 0,
          msg: 'success',
        });
      } else {
        res.json({
          code: -1,
          msg: 'record add failed',
        });
      }
    }, 3000);
  },
};
