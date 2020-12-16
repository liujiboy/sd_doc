FROM centos
# 安装Node.js 14
RUN dnf module -y install nodejs:14
#新建/root/scripts目录
RUN mkdir -p /root/scripts
#将scripts目录中的代码拷贝到/root/scripts
COPY scripts /root/scripts