# Linux常用包管理

![](https://picgo.dalualex.com/20240925194207.png)

# 搭建ssh服务器

- 安装ssh服务器

```bash
sudo apt install openssh-server
```

- 重启ssh服务器，设置密码

```bash
/etc/init.d/ssh restart
```

# 安装JDK

```bash
下载好tar包，解压到/opt文件夹下，编辑/etc/profile文件，加入下面一段：
export JAVA_HOME=/opt/jdk1.8.0_181
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
激活文件：
sudo source /etc/profile
```

# 安装mysql

```bash
sudo apt-get install mysql-server
sudo apt install mysql-client
sudo apt install libmysqlclient-dev
查看初始密码：
sudo cat /etc/mysql/debian.cnf
修改登陆密码
use mysql;
alter user 'root'@'localhost' identified with mysql_native_password by ‘root’
```

# 安装Git、nodejs、nginx、docker

```bash
sudo apt install git

sudo apt install nodejs
sudo apt install npm

sudo apt install nginx

sudo apt install docker.io
```

# 升级nodejs和npm
```bash
sudo npm install n -g #首先下载 n 这个用于更新 node 版本的工具
sudo n stable #升级nodejs
sudo npm install npm@latest -g #升级npm

# 查看版本
node -v
npm -v
```