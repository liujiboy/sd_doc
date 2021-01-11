const http = require('http');
const { setTimeout } = require('timers');
//通过环境变量获取HOST和PORT
const hostname = process.env.HOST; 
const port = process.env.PORT;
const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        var file = [];
        req.on('data', (data) => {
            //保存上传数据
            file.push(data);
        })
        req.on('end', (data) => {
            //获取上传数据
            var buffer = Buffer.concat(file);
            let sep = "\r\n";
            var index = buffer.indexOf(sep);
            buffer = buffer.slice(index + sep.length); //第一行
            index = buffer.indexOf(sep);
            buffer = buffer.slice(index + sep.length); //第二行
            index = buffer.indexOf(sep);
            buffer = buffer.slice(index + sep.length); //第三行

            index = buffer.indexOf(sep);
            buffer = buffer.slice(index + sep.length);
            index = buffer.indexOf(sep);
            buffer = buffer.slice(0, index);

            let imageBase64 = buffer.toString("base64");
            const tencentcloud = require("tencentcloud-sdk-nodejs");

            const OcrClient = tencentcloud.ocr.v20181119.Client;

            const clientConfig = {
                credential: {
                    //通过环境变量获取secretId和secretKey
                    secretId:process.env.OCR_ID,
                    secretKey: process.env.OCR_KEY
                },
                region: "ap-beijing",
                profile: {
                    httpProfile: {
                        endpoint: "ocr.tencentcloudapi.com",
                    },
                },
            };

            const client = new OcrClient(clientConfig);
            const params = {
                "ImageBase64": imageBase64
            };
            client.LicensePlateOCR(params).then(
                (data) => {
                    console.log(data);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json;charset=utf-8');
                    res.setHeader("Access-Control-Allow-Origin", "*");
                    res.end(JSON.stringify(data));
                },
                (err) => {
                    console.error("error", err);
                }
            );
        })
 
    } else {
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end("hello world!");
    }



});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});