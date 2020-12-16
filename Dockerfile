FROM centos
# 安装Node.js 14
RUN dnf module -y install nodejs:14
# 使用淘宝镜像，加快下载包的速度
RUN npm config set registry https://registry.npm.taobao.org
# 安装cnpm（非必须）
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
