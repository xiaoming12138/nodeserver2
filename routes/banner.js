const app = require('express')();
const baseUrl = 'http://server.zhaobaoge.com:8360'
const request = require('request');
const  options = {
    method: 'get',
    url: `${baseUrl}/api/banner`,
    headers: {
        'Content-Type': 'application/json'
    }
};


/*app.get('/api/banner', (req, res) => {


    let data = ﻿﻿﻿{
        "code": "20000",
            "message": "success",
            "data": {
            "servertime": 1567756996,
                "banner": [{
                "id": "3",
                "name": "宅家暑假",
                "is_show": "1",
                "image": "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Xi0Qx12JJhx3atWN1_!!2053469401.jpg",
                "url": "https://s.click.taobao.com/Yz9jQ7w",
                "score": "0",
                "type": "1",
                "create_time": "0",
                "start_time": "2019-06-18 00:00:00",
                "end_time": "2019-09-20 23:59:59",
                "activity_id": "0"
            }, {
                "id": "5",
                "name": "index_1",
                "is_show": "1",
                "image": "https://img.alicdn.com/imgextra/i2/2053469401/O1CN018T7S7S2JJhx0tTGNe_!!2053469401.gif",
                "url": "https://s.click.taobao.com/J3NnF7w",
                "score": "0",
                "type": "2",
                "create_time": "0",
                "start_time": "2019-06-01 00:00:00",
                "end_time": "2020-06-01 23:59:59",
                "activity_id": "0"
            }]
        }
    }



    res.send(data);
});*/

app.get('/api/banner', (req, res) => {

    request(options, function (err, response, body) {
        if (err) {
            console.log(err)
        }else {
            console.log(123,body);
            res1.send(body);
        }
    })
});
app.listen();
