export default {
  'POST /api/login': (req: any, res: any) => {
    const data = req.body;
    console.log(data);
    setTimeout(() => {
      const d = { token: 'test token' };
      res.json({
        code: 0,
        message: 'success',
        data: d,
      });
    }, 3000);
  },

  // 'GET /api/isPasswordVaild': (req: any, res: any) => {
  //     setTimeout(() => {
  //         res.json({
  //             code: 0,
  //             message: 'success',
  //             data: {
  //                 valid: false,
  //             },
  //         });
  //     }, 5000);
  // },

  // 'POST /api/setPassword': (req: any, res: any) => {
  //     const data = req.body;
  //     console.log(data);
  //     setTimeout(() => {
  //         if (data.password !== undefined && data.password !== '') {
  //             if (data.password == '123456') {
  //                 res.json({
  //                     code: 0,
  //                     message: 'success',
  //                 });
  //             } else {
  //                 res.json({
  //                     code: -1,
  //                     message: 'test err msg',
  //                 });
  //             }
  //         } else {
  //             res.json({
  //                 code: -1,
  //                 message: 'req do not contain password',
  //             });
  //         }
  //     }, 5000);
  // },

  // 'GET /api/isSetupCodedVaild': (req: any, res: any) => {
  //     setTimeout(() => {
  //         res.json({
  //             code: 0,
  //             message: 'success',
  //             data: {
  //                 valid: false,
  //             },
  //         });
  //     }, 50);
  // },

  // 'POST /api/setSetupCode': (req: any, res: any) => {
  //     const data = req.body;
  //     console.log(data);
  //     setTimeout(() => {
  //         if (data.setupCode !== undefined && data.setupCode !== '') {
  //             if (data.setupCode == '123456') {
  //                 res.json({
  //                     code: 0,
  //                     message: 'success',
  //                 });
  //             } else {
  //                 res.json({
  //                     code: -1,
  //                     message: 'err test msg',
  //                 });
  //             }
  //         } else {
  //             res.json({
  //                 code: -1,
  //                 message: 'req do not contain setup code',
  //             });
  //         }
  //     }, 5000);
  // },
};
