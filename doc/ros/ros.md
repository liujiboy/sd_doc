# 使用ROS镜像

执行如下指令启动`liujiboy/ros`镜像

```shell
docker run -it --rm -p 6080:80 -p 5900:5900 --name ros liujiboy/ros
```

启动之后可以通过浏览器、VNC客户端和命令行访问镜像。

浏览器方式访问：http://localhost:6080

![image-20210127152343612](images/image-20210127152343612.png)

[VNC客户端](https://www.realvnc.com/en/connect/download/viewer/)如下设置：

<img src="images/image-20210127152631114.png" alt="image-20210127152631114" style="zoom:50%;" />

访问效果为：

<img src="images/image-20210127152727344.png" alt="image-20210127152727344" style="zoom:50%;" />

命令行访问执行如下指令：

```shell
docker exec -it ros /bin/bash
```

进入命令行界面：

![image-20210127153245079](images/image-20210127153245079.png)

# 运行测试程序

启动镜像后，用浏览器方式（访问http://localhost:6080）进入，点击桌面上的`Terminator`图标进入终端，执行`roscore`启动ros：

```shell
roscore
```

效果如下：

<img src="images/image-20210127153631406.png" alt="image-20210127153631406" style="zoom:50%;" />

接着再打开一个`Terminator`，执行如下指令：

```shell
rosrun turtlesim turtlesim_node
```

屏幕上出现了一只小海龟：

![image-20210127153952241](images/image-20210127153952241.png)

再打开一个`Terminator`，执行如下指令：

```shell
rosrun turtlesim turtle_teleop_key
```

现在我们可以用键盘的上下左右键控制海龟的移动

![image-20210127154233395](images/image-20210127154233395.png)

再打开一个`Terminator`，执行如下指令：

```shell
rqt_graph
```

可以看到已经启动的两个程序`turtlesim_node`和`turtle_teleop_key`之间的关系：

![image-20210127154450628](images/image-20210127154450628.png)

# 用VSCode开发ROS程序

## 为VSCode安装Docker扩展

安装Docker和Remote-Container两个扩展

![image-20210127155009360](images/image-20210127155009360.png)

![image-20210127155101017](images/image-20210127155101017.png)

安装完毕之后，就可以在界面上看到已经启动的Docker容器

<img src="images/image-20210127155410363.png" alt="image-20210127155410363" style="zoom: 50%;" />

## VSCode关联docker容器

在上图中，选择`Attach Visual Studio Code`之后会打开一个新的VSCode窗口，该窗口就和容器是关联的

![image-20210127155733906](images/image-20210127155733906.png)

为了便于操作，我们在`/home/ubuntu`目录下新建一个Project目录，然后打开文件夹（打开`/home/ubuntu/Project`），打开终端进入到`/home/ubuntu/Project`，全部做完的效果如下：

![image-20210127160135489](images/image-20210127160135489.png)

## 新建ROS项目

在`/home/ubuntu/Project`目录下依次执行如下指令

```shell
mkdir -p /home/ubuntu/Project/catkin_ws/src  #创建catkin_ws/src目录
cd /home/ubuntu/Project/catkin_ws/src #进入src目录
catkin_init_workspace #初始化项目
```

执行完成后创建了一个`CMakeLists.txt`

![image-20210127160926120](images/image-20210127160926120.png)

现在在命令行下继续执行如下命令：

```shell
cd ~/Project/catkin_ws
catkin_make
```

程序开始编译，编译完成后，结果如下：

![image-20210127161236350](images/image-20210127161236350.png)

**注意：**`catkin_ws/build`和`catkin_ws/devel`下的代码是`catkin_make`指令自动生成的，我们只会在`catkin_ws/src`目录下编写代码，目前这个项目的代码为空。

## 发布者节点和订阅者节点程序

### 创建功能包

在命令行下执行如下指令：

```shell
cd /home/ubuntu/Project/catkin_ws/src
catkin_create_pkg ros_tutorials_topic message_generation std_msgs roscpp
```

`catkin_ws/src`目录下出现名称为`ros_tutorials_topic`的目录，目录下有一些建好的C++程序文件。

![image-20210127161946345](images/image-20210127161946345.png)

**catkin_create_pkg**的作用是创建功能包，并制定包依赖的功能包，它的命令格式为：

```
catkin_create_pkg [功能包名称] [依赖功能包1] [依赖功能包n]
```

换言之，上述指令创建了一个功能包`ros_tutorials_topic`，依赖于`message_generation` `std_msgs` `roscpp`。

该指令会创建`catkin_ws/src/ros_tutorials_topic/package.xml`内容如下：

```xml
<?xml version="1.0"?>
<package format="2">
  <name>ros_tutorials_topic</name>
  <version>0.0.0</version>
  <description>The ros_tutorials_topic package</description>

  <!-- One maintainer tag required, multiple allowed, one person per tag -->
  <!-- Example:  -->
  <!-- <maintainer email="jane.doe@example.com">Jane Doe</maintainer> -->
  <maintainer email="root@todo.todo">root</maintainer>


  <!-- One license tag required, multiple allowed, one license per tag -->
  <!-- Commonly used license strings: -->
  <!--   BSD, MIT, Boost Software License, GPLv2, GPLv3, LGPLv2.1, LGPLv3 -->
  <license>TODO</license>


  <!-- Url tags are optional, but multiple are allowed, one per tag -->
  <!-- Optional attribute type can be: website, bugtracker, or repository -->
  <!-- Example: -->
  <!-- <url type="website">http://wiki.ros.org/ros_tutorials_topic</url> -->


  <!-- Author tags are optional, multiple are allowed, one per tag -->
  <!-- Authors do not have to be maintainers, but could be -->
  <!-- Example: -->
  <!-- <author email="jane.doe@example.com">Jane Doe</author> -->


  <!-- The *depend tags are used to specify dependencies -->
  <!-- Dependencies can be catkin packages or system dependencies -->
  <!-- Examples: -->
  <!-- Use depend as a shortcut for packages that are both build and exec dependencies -->
  <!--   <depend>roscpp</depend> -->
  <!--   Note that this is equivalent to the following: -->
  <!--   <build_depend>roscpp</build_depend> -->
  <!--   <exec_depend>roscpp</exec_depend> -->
  <!-- Use build_depend for packages you need at compile time: -->
  <!--   <build_depend>message_generation</build_depend> -->
  <!-- Use build_export_depend for packages you need in order to build against this package: -->
  <!--   <build_export_depend>message_generation</build_export_depend> -->
  <!-- Use buildtool_depend for build tool packages: -->
  <!--   <buildtool_depend>catkin</buildtool_depend> -->
  <!-- Use exec_depend for packages you need at runtime: -->
  <!--   <exec_depend>message_runtime</exec_depend> -->
  <!-- Use test_depend for packages you need only for testing: -->
  <!--   <test_depend>gtest</test_depend> -->
  <!-- Use doc_depend for packages you need only for building documentation: -->
  <!--   <doc_depend>doxygen</doc_depend> -->
  <buildtool_depend>catkin</buildtool_depend>
  <build_depend>message_generation</build_depend>
  <build_depend>roscpp</build_depend>
  <build_depend>std_msgs</build_depend>
  <build_export_depend>roscpp</build_export_depend>
  <build_export_depend>std_msgs</build_export_depend>
  <exec_depend>roscpp</exec_depend>
  <exec_depend>std_msgs</exec_depend>


  <!-- The export tag contains other, unspecified, tags -->
  <export>
    <!-- Other tools can request additional information be placed here -->

  </export>
</package>
```

我们可以根据需要修改这个文件。

### 创建消息文件

在`catkin_ws/src/ros_tutorials_topic`目录下增加`msg`目录，并在其中编辑一个`MsgTutorial.msg`文件，文件内容如下：

```
time stamp 
int32 data
```

如下图：

![image-20210127162959062](images/image-20210127162959062.png)



### **修改构建配置文件(CMakeLists.txt)**

修改``catkin_ws/src/ros_tutorials_topic/CMakeLists.txt`为如下：

```cmake
cmake_minimum_required(VERSION 2.8.3)
project(ros_tutorials_topic)

## catkin构建时需要的组件包。
## 是依赖包，是message_generation、 std_msgs和roscpp。
## 如果这些功能包不存在，在构建过程中会发生错误。
find_package(catkin REQUIRED COMPONENTS message_generation std_msgs roscpp)

## 消息声明:MsgTutorial.msg 
add_message_files(FILES MsgTutorial.msg)

## 这是设置依赖性消息的选项。
## 如果未安装std_msgs，则在构建过程中会发生错误。 
generate_messages(DEPENDENCIES std_msgs)

## catkin功能包选项，描述了库、catkin构建依赖项和系统依赖的功能包。 
catkin_package(
  LIBRARIES ros_tutorials_topic
  CATKIN_DEPENDS std_msgs roscpp
)
## 设置包含目录。 
include_directories(${catkin_INCLUDE_DIRS})

## topic_publisher节点的构建选项。
## 配置可执行文件、目标链接库和其他依赖项。
add_executable(topic_publisher src/topic_publisher.cpp)
add_dependencies(topic_publisher ${${PROJECT_NAME}_EXPORTED_TARGETS} ${catkin_EXPORTED_TARGETS}) 
target_link_libraries(topic_publisher ${catkin_LIBRARIES})

## topic_subscriber节点的构建选项。
add_executable(topic_subscriber src/topic_subscriber.cpp)
add_dependencies(topic_subscriber ${${PROJECT_NAME}_EXPORTED_TARGETS} ${catkin_EXPORTED_TARGETS}) 
target_link_libraries(topic_subscriber ${catkin_LIBRARIES})
```

### 创建发布者

在`catkin_ws/src/ros_tutorials_topic/src`中增加`topic_publisher.cpp`文件

```c++
#include "ros/ros.h" // ROS默认头文件
#include "ros_tutorials_topic/MsgTutorial.h" // MsgTutorial消息头文件( 构建后自动生成)
int main(int argc, char **argv)
{ 
    ros::init(argc, argv, "topic_publisher"); // 初始化节点名称
    ros::NodeHandle nh; // 声明一个节点句柄来与ROS系统进行通信
    // 声明发布者，创建一个使用ros_tutorials_topic功能包的MsgTutorial 消息文件的 
    // 发布者ros_tutorial_pub。话题名称是"ros_tutorial_msg"，
    // 消息文件发布者队列(queue)的大小设置为100
    ros::Publisher ros_tutorial_pub =nh.advertise<ros_tutorials_topic::MsgTutorial>("ros_tutorial_msg", 100); 
    // 设定循环周期。"10"是指10Hz，是以0.1秒间隔重复
    ros::Rate loop_rate(10); 
    // 以MsgTutorial消息文件格式声明一个 叫做msg的消息
    ros_tutorials_topic::MsgTutorial msg; 
    int count = 0; // 声明要在消息中使用的变量
    while (ros::ok())
    { 
        msg.stamp = ros::Time::now(); // 把当前时间传给msg的下级消息stamp
        msg.data = count; // 将变量count的值传给下级消息data
        ROS_INFO("send msg = %d", msg.stamp.sec);  // 显示stamp.sec消息
        ROS_INFO("send msg = %d", msg.stamp.nsec); // 显示stamp.nsec消息
        ROS_INFO("send msg = %d", msg.data);  // 显示data消息
        ros_tutorial_pub.publish(msg); // 发布消息
        loop_rate.sleep(); // 按照上面定义的循环周期进行暂歇
        ++count; // 变量count增加1
    } 
    return 0; 
}
```

### 创建订阅者

在`catkin_ws/src/ros_tutorials_topic/src`中增加`topic_subscriber.cpp`文件

```c++
#include "ros/ros.h" // ROS的默认头文件
#include "ros_tutorials_topic/MsgTutorial.h" // MsgTutorial消息头文件(构建后自动生成)
// 这是一个消息后台函数，
// 此函数在收到一个下面设置的名为ros_tutorial_msg的话题时候被调用。 
// 输入的消息是从ros_tutorials_topic功能包接收MsgTutorial消息。
void msgCallback(const ros_tutorials_topic::MsgTutorial::ConstPtr& msg) {
    ROS_INFO("recieve msg = %d", msg->stamp.sec);// 显示stamp.sec消息
    ROS_INFO("recieve msg = %d", msg->stamp.nsec); // 显示stamp.nsec消息
    ROS_INFO("recieve msg = %d", msg->data);  // 显示data消息
} 
int main(int argc, char **argv)
{ 
    ros::init(argc, argv, "topic_subscriber"); // 初始化节点名称
    ros::NodeHandle nh; // 声明用于ROS系统和通信的节点句柄
    // 声明订阅者，创建一个订阅者ros_tutorial_sub，
    // 它利用ros_tutorials_topic功能包的的MsgTutorial消息文件。
    // 话题名称是"ros_tutorial_msg"，订阅者队列(queue)的大小设为100。
    ros::Subscriber ros_tutorial_sub = nh.subscribe("ros_tutorial_msg", 100, msgCallback);
    // 用于调用后台函数，等待接收消息。在接收到消息时执行后台函数。
    ros::spin();
    return 0; 
}
```

### 执行构建

在命令行下执行如下指令：

```shell
cd /home/ubuntu/Project/catkin_ws
catkin_make
```

执行构建，构建成功后在`catkin_ws/devel/lib`下生成可执行文件

![image-20210127165720377](images/image-20210127165720377.png)

### 运行发布者和订阅者

在图形界面(http://localhost:6080)，打开两个`Terminator`，分别执行如下指令：

运行发布者

```shell
source /home/ubuntu/Project/catkin_ws/devel/setup.bash
cd /home/ubuntu/Project/catkin_ws
rosrun ros_tutorials_topic topic_publisher
```

运行订阅者

```shell
source /home/ubuntu/Project/catkin_ws/devel/setup.bash
cd /home/ubuntu/Project/catkin_ws
rosrun ros_tutorials_topic topic_subscriber
```

效果如下：

![image-20210127170908509](images/image-20210127170908509.png)

# Docker镜像

## 发布者和订阅者镜像

```shell
docker run -it --rm -p 6080:80 -p 5900:5900 --name ros liujiboy/ros_tutorials_topic
```

运行发布者

```shell
source /home/ubuntu/Project/catkin_ws/devel/setup.bash
cd /home/ubuntu/Project/catkin_ws
rosrun ros_tutorials_topic topic_publisher
```

运行订阅者

```shell
source /home/ubuntu/Project/catkin_ws/devel/setup.bash
cd /home/ubuntu/Project/catkin_ws
rosrun ros_tutorials_topic topic_subscriber
```

## 用Python3实现发布者和订阅者镜像

```shell
docker run -it --rm -p 6080:80 -p 5900:5900 --name ros liujiboy/ros_python3
```

运行发布者

```shell
/root/start_talker.sh
```

或者

```shell
/root/start_talker2.sh
```

运行订阅者

```shell
/root/start_listener.sh
```

程序实现代码参考：https://github.com/liujiboy/dockerimages/tree/master/ros/ros_python3

## 用Python3实现简单“机器人”控制

```shell
docker run -it --rm -p 6080:80 -p 5900:5900 --name ros liujiboy/ros_robot
```

运行"机器人"

```
/root/start_robot.sh
```

运行速度发布者

```
/root/start_publish_speed.sh
```

程序实现代码参考：https://github.com/liujiboy/dockerimages/tree/master/ros/ros_robot