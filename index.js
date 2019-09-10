const app = require('express')();
app.get('*', (req, res) => {
    res.send('Hello from Express.js!');
});
app.listen();
