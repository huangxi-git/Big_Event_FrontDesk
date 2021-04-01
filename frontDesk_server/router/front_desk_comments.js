// 评论模块接口

// 初始化
const express = require('express');
const router = express.Router();
// 连接数据库
const conn = require('../tool/sql');

// // 测试端口
// router.get('/qqq3', (req, res) => {
//     res.send('FD_Comments 服务器连接成功！');
// });

// 1、接收的参数
// 2、拼接sql
// 3、操作sql
// 4、返回值

// 普通键值对
router.use(express.urlencoded());

// 1、get 接口-- 最新评论
router.get('/index/latest_comment', (req, res) => {
    // 2、拼接sql
    const sqlStr = `select * from comments`;
    // 3、操作sql
    conn.query(sqlStr, (err, result) => {
        // 4、返回值
        if (err) return res.json({ code: 400, message: '最新评论获取失败！' });
        res.json({ code: 200, message: '最新评论获取成功！', data: result });
    });
});

// 2、post 接口-- 发表评论
router.post('/index/post_comment', (req, res) => {
    // 1、接收的参数
    console.log('接收的参数:', req.body);
    const { id, author, content, articleId, date, time, state } = req.body;
    // 2、拼接sql
    const sqlStr = `insert into comments (id,author, content,articleId,date,time,state) values("${id}","${author}","${content}","${articleId}","${date}","${time}","${state}")`;
    // console.log(sqlStr);
    // 3、操作sql
    conn.query(sqlStr, (err, result) => {
        // 4、返回值
        if (err) {
            console.log(err);
            res.json({ code: 400, message: '发表评论失败！' });
        }
        else {

            // console.log('返回值：', result);
            res.json({ code: 200, message: '发表评论失成功！' });
        }
    });
});


// 3、get 接口-- 评论列表
router.get('/index/get_comment', (req, res) => {
    // 1、接收的参数
    console.log('接收的参数:', req.query);
    const { articleId } = req.query;
    // 2、拼接sql
    const sqlStr = `select author,date,content from comments where id=${articleId} `;
    // 3、操作sql
    conn.query(sqlStr, (err, result) => {
        // 4、返回值
        if (err) return res.json({ code: 400, message: '评论列表获取失败！' });
        res.json({ code: 200, message: '评论列表获取成功！', data: result });
    });
});

// 导出
module.exports = router;