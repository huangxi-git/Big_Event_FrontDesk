// 分类模块接口

// 初始化
const express = require('express');
const router = express.Router();
// 连接数据库
const conn = require('../tool/sql');

// // 测试端口
// router.get('/qqq2', (req, res) => {
//     res.send('FD_Categories 服务器连接成功！');
// });

// 1、接收的参数
// 2、拼接sql
// 3、操作sql
// 4、返回值


// 1、 get 接口 -- 文章类型
router.get('/index/category', (req, res) => {
    // 2、拼接sql
    const sqlStr = `select id,name from categories`;
    // 3、操作sql
    conn.query(sqlStr, (err, result) => {
        // 4、返回值
        if (err) return res.json({ code: 400, message: '获取文章类型失败！' });
        // console.log(result);
        res.json({ code: 200, message: '获取文章类型成功！', data: result });
    });
});



// 导出
module.exports = router;