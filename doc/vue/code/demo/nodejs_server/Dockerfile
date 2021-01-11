FROM node
RUN mkdir -p /root/js
COPY plateRecognitionServer.js /root/js
COPY package.json /root/js
WORKDIR /root/js
RUN npm install
ENV HOST=0.0.0.0
ENV PORT=3000
# 腾讯云secretId和secretKey，请替换
ENV OCR_ID=XXXX
ENV OCR_KEY=XXXX
EXPOSE 3000
ENTRYPOINT [ "node","plateRecognitionServer.js" ]
