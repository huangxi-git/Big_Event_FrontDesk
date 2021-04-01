// 文章模块接口

// 初始化
const express = require('express');
const router = express.Router();
// 连接数据库
const conn = require('../tool/sql');

// // 测试端口
// router.get('/qqq1', (req, res) => {
//     res.send('FD_Articles 服务器连接成功！');
// });


// 1、接收的参数
// 2、拼接sql
// 3、操作sql
// 4、返回值


// 1、 get 接口 -- 文章热门排行
router.get('/index/rank', (req, res) => {
    // 1、接收的参数
    // 2、拼接sql
    const sqlStr = `select id,title from articles`;
    // 3、操作sql
    conn.query(sqlStr, (err, result) => {
        // 4、返回值
        if (err) return res.json({ code: 400, message: '文章热门排行获取失败！' });
        res.json({ code: 200, message: '文章热门排行获取成功！', data: result });
    });
});


// 2、 get 接口 -- 最新资讯
router.get('/index/latest', (req, res) => {
    // 2、拼接sql
    const sqlStr = `select * from articles`;
    // 3、操作sql
    conn.query(sqlStr, (err, result) => {
        // 4、返回值
        if (err) return res.json({ code: 400, message: '最新资讯获取失败！' });
        res.json({ code: 200, message: '最新资讯获取成功！', data: result });
    });
});

// 3、 get 接口 -- 文章详细内容
router.get('/index/artitle', (req, res) => {
    // 2、拼接sql
    const sqlStr = `select * from articles`;
    // 3、操作sql
    conn.query(sqlStr, (err, result) => {
        // 4、返回值
        if (err) return res.json({ code: 400, message: '文章详细内容获取失败！' });
        res.json({ code: 200, message: '文章详细内容获取成功！', data: result });
    });
});


// 导出
module.exports = router;