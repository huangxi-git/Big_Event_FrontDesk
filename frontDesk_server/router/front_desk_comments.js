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


// 导出
module.exports = router;