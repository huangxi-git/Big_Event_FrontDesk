// 测试数据库连接
// 连接数据库
const conn = require('../tool/sql');
conn.query('select * from articles', (err, result) => {
    console.log('返回值：', result);        // 连接成功
});