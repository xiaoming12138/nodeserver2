const app = require('express')();
app.get('/', (req, res) => {
    res.send('Hello from 首页!');
});
app.listen();
