// 初始化
const express = require('express');
const router = express.Router();
// 连接服务器
const conn = require('../tool/sql');

// 1、get 接口-- 热点图
router.get('/index/hotpic', (req, res) => {
    // 拼接sql
    const sqlStr = `select id,imgurl from hotpic`;
    // 操作sql
    conn.query(sqlStr, (err, result) => {
        if (err) return res.json({ code: 400, message: '获取热点图失败！' });
        res.json({ code: 200, message: '获取热点图成功！', data: result });
    });
});

// 导出
module.exports = router;