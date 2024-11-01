# Caddy使用教程

![](https://picgo.dalualex.com/202409025153.png)

Caddy是一个开源、跨平台的Web服务器，支持HTTP/2的TLS加密和自动HTTPS。它还支持反向代理、自动HTTPS、WebSocket、Websockets等功能。
重要的是，Caddy自带了一个内置的HTTP/2服务器，支持自动TLS，Caddy可以自动申请并续期Let's Encrypt的证书。对于繁琐的TLS配置，Caddy可以自动完成所有操作。
并且不用担心云服务商的SSL证书到期问题。
# 一、Ubuntu安装

1、从[github](https://github.com/caddyserver/caddy/releases)上下载最新版本的Caddy。下载相应的版本。

[https://github.com/caddyserver/caddy/releases](https://github.com/caddyserver/caddy/releases)

2、上传到服务器，安装

```jsx
dpkg -i  caddy_2.7.6_linux_amd64.deb
```

3、安装完成后，校验是否成功。

```jsx
caddy version
```

# 二、Caddy常用命令

```jsx
caddy adapt                             将配置文档适配为原生JSON
caddy build-info                        打印构建信息
caddy environ                           打印环境
caddy file-server                       一个简单但可用于生产的文件服务器
caddy fmt                               格式化一个 Caddyfile
caddy hash-password                     散列密码并输出 base64
caddy help                              查看 caddy 命令的帮助
caddy list-modules                      列出已安装的 Caddy 模块
caddy reload                            更改正在运行的 Caddy 进程的配置
caddy reverse-proxy                     一个简单但可用于生产的 HTTP(S) 反向代理
caddy run                               在前台启动 Caddy 进程
caddy start                             在后台启动 Caddy 进程
caddy stop                              停止正在运行的 Caddy 进程
caddy trust                             将证书安装到本地信任存储中
caddy untrust                           不信任来自本地信任存储的证书
caddy upgrade                           将 Caddy 升级到最新版本
caddy add-package                       将 Caddy 升级到最新版本，添加了额外的插件
caddy remove-package                    将 Caddy 升级到最新版本，删除了一些插件
caddy validate                          测试配置文件是否有效
caddy version                           打印版本
```

# 三、使用Caddyfile配置文件创建服务

> **`在创建Caddyfile文件的目录下运行Caddy start命令，即可生效Caddyfile中的配置`**
> 

1、创建一个文本文件Caddyfile（无后缀）

2、文件中写入如下代码：

```jsx
localhost

respond "Hello, world!"
```

3、保存文件并在当前包含Caddyfile的目录下运行命令：

```jsx
caddy start

测试：
curl https://localhost
Hello, world!
```

4、查看caddy运行状态

**`systemctl status caddy.service`**

# 四、使用Caddyfile配置反向代理
1、创建一个文本文件Caddyfile（无后缀），并写入如下代码：
```jsx
dalualex.com {
  reverse_proxy  localhost:9999 {
    header_up -Origin
  }
}

portainer.dalualex.com {
  reverse_proxy  localhost:9000 {
    header_up -Origin
  }
}
```
2、保存文件并在当前包含Caddyfile的目录下运行命令：
`caddy start`；如果未停止caddy服务，则先运行`caddy stop`暂停caddy服务器。
# 五、常见错误

- 使用caddy start启动caddy服务器，报错2019端口被占用
    
    
    1、报错如下：
    
    2024/08/31 13:47:27.872 INFO    using adjacent Caddyfile
    Error: loading initial config: loading new config: starting caddy administration endpoint: listen tcp 127.0.0.1:2019: bind: address already in use
    Error: caddy process exited with error: exit status 1
    
    2、解决方法：
    
    `systemctl stop caddy.service`或者`caddy stop`  停止caddy服务
    
    `caddy start`   启动caddy
    
    3、原因：
    
    在服务器启动时，caddy自启动，会监听2019端口，此时再使用`caddy start`  ，相当于又开启了一个caddy，就会报错端口被占用。所以，先将caddy停掉，然后再启动，启动时自动读取Caddyfile，来达到