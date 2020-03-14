import mockjs from 'mockjs';

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
            if (data.username == "yuansong" && data.password == "yuansong") {
                res.json({
                    code: 0,
                    msg: "success"
                });
            } else {
                res.json({
                    code: -1,
                    msg: "login failed"
                });
            }

        }, 3000);
    }
}