const app = require('express')();

// app.use((req, res, next)=>{
//     if (req.method == 'OPTIONS') {
//         res.send(204); /*让options请求快速返回*/
//     }else {
//         next();
//     }
// })
app.get('/api/goods', (req, res) => {


    let data = ﻿{
        "code": "20000",
            "message": "success",
            "data": {
            "servertime": 1567756998,
                "goods": [{
                "id": "22034932",
                "cid": "8",
                "dtitle": "【古尚古】苹果防爆钻石膜2片",
                "goods_id": "560253896325",
                "main_pic": "https://img.alicdn.com/imgextra/i2/2024058652/TB2XRqSpHsTMeJjy1zeXXcOCVXa_!!2024058652.jpg",
                "shop_type": "1",
                "original_price": "3.80",
                "month_sales": "427645",
                "actual_price": "2.80",
                "coupon_total_num": "10000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-07 23:59:59",
                "coupon_price": "1.00"
            }, {
                "id": "22002732",
                "cid": "7",
                "dtitle": "拍40件【柯达】照片冲印钱包电子照5寸",
                "goods_id": "15913177712",
                "main_pic": "https://gd1.alicdn.com/imgextra/i1/842047185/O1CN01GgfFsl22wmDYhc4HK_!!842047185.jpg",
                "shop_type": "0",
                "original_price": "9.36",
                "month_sales": "478475",
                "actual_price": "6.36",
                "coupon_total_num": "20000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-10 23:59:59",
                "coupon_price": "3.00"
            }, {
                "id": "22003683",
                "cid": "6",
                "dtitle": "【拍5件】滋食蛋黄夹心饼干5大包",
                "goods_id": "595739139497",
                "main_pic": "https://img.alicdn.com/imgextra/i1/2201195930685/O1CN016tKjgb1Gvlq2u4BvN_!!2201195930685.jpg",
                "shop_type": "1",
                "original_price": "28.80",
                "month_sales": "1184874",
                "actual_price": "18.80",
                "coupon_total_num": "100000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-06 23:59:59",
                "coupon_price": "10.00"
            }, {
                "id": "22024077",
                "cid": "3",
                "dtitle": "LERFM烟酰胺焕颜宫廷贵妇膏",
                "goods_id": "598089055725",
                "main_pic": "https://img.alicdn.com/imgextra/i3/2794538083/O1CN01zsUX7U29a3whvdszb_!!2794538083.jpg",
                "shop_type": "1",
                "original_price": "188.00",
                "month_sales": "239379",
                "actual_price": "28.00",
                "coupon_total_num": "100000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-09 23:59:59",
                "coupon_price": "160.00"
            }, {
                "id": "22015582",
                "cid": "10",
                "dtitle": "大牌俞兆林！男士夏季透气内裤4条装",
                "goods_id": "595312743186",
                "main_pic": "https://img.alicdn.com/imgextra/i3/159085404/O1CN01seZXyc1pn4tYgaE0D_!!159085404.jpg",
                "shop_type": "1",
                "original_price": "26.90",
                "month_sales": "59593",
                "actual_price": "16.90",
                "coupon_total_num": "102000",
                "coupon_receive_num": "2000",
                "coupon_end_time": "2019-09-07 23:59:59",
                "coupon_price": "10.00"
            }, {
                "id": "21973284",
                "cid": "4",
                "dtitle": "秒杀！42卷4层卷纸到手21.99元",
                "goods_id": "582302039775",
                "main_pic": "https://img.alicdn.com/imgextra/i2/3087155153/O1CN014z5vjO1nw7T0mNnNX_!!3087155153.jpg",
                "shop_type": "1",
                "original_price": "24.99",
                "month_sales": "236467",
                "actual_price": "21.99",
                "coupon_total_num": "100000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-08 23:59:59",
                "coupon_price": "3.00"
            }, {
                "id": "22013098",
                "cid": "3",
                "dtitle": "第2、3件0元！TSOSK洗发水",
                "goods_id": "598105076443",
                "main_pic": "https://img.alicdn.com/imgextra/i1/1637899820/O1CN01VtTBgg2MPbujdRbHM_!!1637899820.png",
                "shop_type": "1",
                "original_price": "199.90",
                "month_sales": "362314",
                "actual_price": "39.90",
                "coupon_total_num": "142000",
                "coupon_receive_num": "42000",
                "coupon_end_time": "2019-09-06 23:59:59",
                "coupon_price": "160.00"
            }, {
                "id": "22035790",
                "cid": "7",
                "dtitle": "【维克多利】本色护眼田字格拼音本20本装",
                "goods_id": "538445738554",
                "main_pic": "https://img.alicdn.com/imgextra/i4/1661921718/O1CN011OYstKmBdeEK6OQ_!!1661921718.jpg",
                "shop_type": "1",
                "original_price": "11.90",
                "month_sales": "88650",
                "actual_price": "9.90",
                "coupon_total_num": "100000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-08 23:59:59",
                "coupon_price": "2.00"
            }, {
                "id": "22016997",
                "cid": "6",
                "dtitle": "【拍4件】卜珂榴莲蓝莓软心曲奇4大包",
                "goods_id": "597923755632",
                "main_pic": "https://img.alicdn.com/imgextra/i3/199085155/O1CN01gAcJTh1nx2GomBLNn_!!199085155.jpg",
                "shop_type": "1",
                "original_price": "28.99",
                "month_sales": "171716",
                "actual_price": "18.99",
                "coupon_total_num": "100000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-06 23:59:59",
                "coupon_price": "10.00"
            }, {
                "id": "21924106",
                "cid": "6",
                "dtitle": "【洽洽】6袋喀吱脆薯片零食非油炸",
                "goods_id": "598543595282",
                "main_pic": "https://img.alicdn.com/imgextra/i2/2081314055/O1CN01iA1aaI1fpEaB30v5T_!!2081314055.jpg",
                "shop_type": "1",
                "original_price": "9.90",
                "month_sales": "9529",
                "actual_price": "7.90",
                "coupon_total_num": "106000",
                "coupon_receive_num": "6000",
                "coupon_end_time": "2019-09-06 23:59:59",
                "coupon_price": "2.00"
            }, {
                "id": "22035183",
                "cid": "8",
                "dtitle": "【抖音爆款】洗衣机通用高脚架",
                "goods_id": "596759635544",
                "main_pic": "https://img.alicdn.com/imgextra/i1/388820905/O1CN01KM3DLW1IYWyoeu1pB_!!388820905.jpg",
                "shop_type": "1",
                "original_price": "19.90",
                "month_sales": "35401",
                "actual_price": "9.90",
                "coupon_total_num": "20000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-06 23:59:59",
                "coupon_price": "10.00"
            }, {
                "id": "22035210",
                "cid": "6",
                "dtitle": "【已抢7万件】应季红富士整箱10斤",
                "goods_id": "601362785023",
                "main_pic": "https://img.alicdn.com/imgextra/i2/159085404/O1CN01GckMYY1pn4tYqzWTg_!!159085404.jpg",
                "shop_type": "1",
                "original_price": "54.90",
                "month_sales": "100977",
                "actual_price": "34.90",
                "coupon_total_num": "100000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-08 23:59:59",
                "coupon_price": "20.00"
            }, {
                "id": "22034343",
                "cid": "10",
                "dtitle": "【南极人15双】商务休闲棉袜短袜",
                "goods_id": "549239069755",
                "main_pic": "https://img.alicdn.com/imgextra/i4/353926403/O1CN01MO1cBc1xAcXdTeJ3u_!!353926403.jpg",
                "shop_type": "1",
                "original_price": "16.80",
                "month_sales": "634109",
                "actual_price": "6.80",
                "coupon_total_num": "130000",
                "coupon_receive_num": "30000",
                "coupon_end_time": "2019-09-07 23:59:59",
                "coupon_price": "10.00"
            }, {
                "id": "22031800",
                "cid": "3",
                "dtitle": "【爆款返场】玻尿酸原液100ML",
                "goods_id": "589732545576",
                "main_pic": "https://img.alicdn.com/imgextra/i4/784483598/O1CN01XfU4mJ1cRvX8CYVid_!!784483598.jpg",
                "shop_type": "1",
                "original_price": "89.90",
                "month_sales": "27650",
                "actual_price": "9.90",
                "coupon_total_num": "118000",
                "coupon_receive_num": "18000",
                "coupon_end_time": "2019-09-07 23:59:59",
                "coupon_price": "80.00"
            }, {
                "id": "22035305",
                "cid": "13",
                "dtitle": "神价！南极人5双情侣长筒篮球运动袜",
                "goods_id": "597010524770",
                "main_pic": "https://img.alicdn.com/imgextra/i4/353926403/O1CN017tEnk51xAcYxb7JeX_!!353926403.jpg",
                "shop_type": "1",
                "original_price": "16.90",
                "month_sales": "37129",
                "actual_price": "6.90",
                "coupon_total_num": "102000",
                "coupon_receive_num": "2000",
                "coupon_end_time": "2019-09-07 23:59:59",
                "coupon_price": "10.00"
            }, {
                "id": "21993105",
                "cid": "4",
                "dtitle": "龙源养生艾草泡脚丸30颗",
                "goods_id": "45034936342",
                "main_pic": "https://img.alicdn.com/imgextra/i4/2437640286/O1CN011Dz1k2BTUsgZM33_!!2437640286.jpg",
                "shop_type": "1",
                "original_price": "57.90",
                "month_sales": "33783",
                "actual_price": "17.90",
                "coupon_total_num": "100000",
                "coupon_receive_num": "7000",
                "coupon_end_time": "2019-09-06 23:59:59",
                "coupon_price": "40.00"
            }, {
                "id": "22014421",
                "cid": "4",
                "dtitle": "【炫衣彩】5斤装天然皂粉洗衣粉",
                "goods_id": "591903517605",
                "main_pic": "https://img.alicdn.com/imgextra/i2/1935371611/O1CN01sgxvNG1NlsbgQTqjF_!!1935371611.jpg",
                "shop_type": "1",
                "original_price": "22.90",
                "month_sales": "262446",
                "actual_price": "12.90",
                "coupon_total_num": "100000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-06 23:59:59",
                "coupon_price": "10.00"
            }, {
                "id": "22032657",
                "cid": "4",
                "dtitle": "Vipoon本色抽纸家庭装45包",
                "goods_id": "597663972410",
                "main_pic": "https://img.alicdn.com/imgextra/i1/2837363315/O1CN01k9tcH01aMJUq5d8EX_!!2837363315.jpg",
                "shop_type": "1",
                "original_price": "29.99",
                "month_sales": "49381",
                "actual_price": "24.99",
                "coupon_total_num": "109000",
                "coupon_receive_num": "9000",
                "coupon_end_time": "2019-09-07 23:59:59",
                "coupon_price": "5.00"
            }, {
                "id": "22012219",
                "cid": "6",
                "dtitle": "【蟹乡渔舍】阳澄湖大闸蟹礼券8只",
                "goods_id": "599057481428",
                "main_pic": "https://img.alicdn.com/bao/uploaded/O1CN01EM8RJG1XbwATl7pbk_!!2-item_pic.png",
                "shop_type": "1",
                "original_price": "299.00",
                "month_sales": "61500",
                "actual_price": "79.00",
                "coupon_total_num": "100000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-07 23:59:59",
                "coupon_price": "220.00"
            }, {
                "id": "22035288",
                "cid": "10",
                "dtitle": "【南极人】韩版纯棉长袖家居服套装",
                "goods_id": "555328322357",
                "main_pic": "https://gd2.alicdn.com/imgextra/i3/3075240479/O1CN01Rfu4hb1FPQGpNMmqb_!!3075240479.jpg",
                "shop_type": "0",
                "original_price": "39.00",
                "month_sales": "21907",
                "actual_price": "36.00",
                "coupon_total_num": "50000",
                "coupon_receive_num": "0",
                "coupon_end_time": "2019-09-07 23:59:59",
                "coupon_price": "3.00"
            }]
        }
    }

    res.send(data);
});
app.listen();