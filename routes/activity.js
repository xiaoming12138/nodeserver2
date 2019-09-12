const app = require('express')();

// app.use((req, res, next)=>{
//     if (req.method == 'OPTIONS') {
//         res.send(204); /*让options请求快速返回*/
//     }else {
//         next();
//     }
// })
app.get('/api/activity', (req, res) => {


    let data = ﻿﻿{
        "code": "20000",
            "message": "success",
            "data": {
            "servertime": 1567756997,
                "activity": [{
                "id": "1",
                "name": "9.9包邮",
                "is_show": "1",
                "image": "https://img.alicdn.com/imgextra/i3/2053469401/TB22BQvoYZnBKNjSZFrXXaRLFXa-2053469401.png",
                "url": "",
                "score": "0",
                "create_time": "0",
                "start_time": "0",
                "end_time": "0",
                "type": "0",
                "cid": "0",
                "worlds": "",
                "start_price": "0.00",
                "end_price": "10.00"
            }, {
                "id": "2",
                "name": "淘抢购",
                "is_show": "1",
                "image": "https://img.alicdn.com/imgextra/i2/2053469401/TB2Z1Qso7UmBKNjSZFOXXab2XXa-2053469401.png",
                "url": "",
                "score": "0",
                "create_time": "0",
                "start_time": "0",
                "end_time": "0",
                "type": "1",
                "cid": "0",
                "worlds": "",
                "start_price": "0.00",
                "end_price": "0.00"
            }, {
                "id": "3",
                "name": "编辑精选",
                "is_show": "1",
                "image": "https://img.alicdn.com/imgextra/i4/2053469401/TB2DEqooHZnBKNjSZFKXXcGOVXa-2053469401.png",
                "url": "",
                "score": "0",
                "create_time": "0",
                "start_time": "0",
                "end_time": "0",
                "type": "2",
                "cid": "0",
                "worlds": "",
                "start_price": "0.00",
                "end_price": "0.00"
            }, {
                "id": "4",
                "name": "疯抢排行",
                "is_show": "1",
                "image": "https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png",
                "url": "",
                "score": "0",
                "create_time": "0",
                "start_time": "0",
                "end_time": "0",
                "type": "3",
                "cid": "0",
                "worlds": "",
                "start_price": "0.00",
                "end_price": "0.00"
            }]
        }
    }


    res.send(data);
});
app.listen();
