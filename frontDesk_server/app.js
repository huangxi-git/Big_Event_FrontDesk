// 引入 express 
const express = require('express');
// 创建服务
const server = express();

// // 测试服务器
// server.get('/qqq', (req, res) => {
//     console.log('接受到的参数：', req.query);
//     res.send('服务器连接成功！');
// });


// 导入接口
const FD_Articles = require('./router/front_desk_articles');
const FD_Categories = require('./router/front_desk_categories');
const FD_Comments = require('./router/front_desk_comments');
const FD_Hotpic = require('./router/front_desk_hotpic');
server.use('/FD_Articles', FD_Articles);
server.use('/FD_Categories', FD_Categories);
server.use('/FD_Comments', FD_Comments);
server.use('/FD_Hotpic', FD_Hotpic);


// 启用服务
server.listen(8889, () => {
    console.log('服务已启用，端口：8889');
});