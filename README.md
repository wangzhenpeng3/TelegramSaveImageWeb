## nginx
#### nginx -v 查看版本号
#### service nginx status 是否运行
#### mv 文件名 -> 被重命名的文件名 命令用来为文件或目录改名、或将文件或目录移入其它位置。
#### touch 文件名 创建文件
#### nginx -t 检查配置文件是否有问题
#### vim 文件名 查看文件名
#### nginx -s reload 表示重启nginx, nginx -s <stop|quit|reload|reopen>命令用于向 Nginx 主进程发送信号 

## nginx.conf 说明：
#### nginx.conf 是 Nginx 服务器的主配置文件，它控制着 Nginx 的行为。以下是 nginx.conf 文件中一些常见配置字段的说明：
    user: 指定 Nginx 工作进程运行的用户和用户组。
    worker_processes: 定义 Nginx 的工作进程数。通常设置为等于 CPU 核心数。
    error_log: 定义全局错误日志文件的位置和日志级别。
    pid: 存放主进程ID的文件。
    worker_connections: 每个工作进程的最大连接数。
    events { ... }: 事件模块，用于定义 Nginx 如何处理连接，包括 worker_connections。
    http { ... }: HTTP 模块，用于定义如何处理 HTTP/HTTPS 相关的配置，包括服务器、缓存、文件路径等。
    include: 包含其他配置文件。
    default_type: 设置默认的 MIME 类型。
    access_log: 定义访问日志文件的位置。
    sendfile: 指定是否使用 sendfile 函数（高效地从文件中读取数据）。
    keepalive_timeout: 保持连接的超时时间。
    server_tokens: 控制服务器标记的显示（如 Nginx 版本号）。
    server { ... }: 定义服务器的配置。
    listen: 指定服务器监听的端口和IP。
    server_name: 定义服务器的域名。
    root: 定义服务器的文档根目录。
    index: 定义默认索引文件的名称。
    location { ... }: 定义不同请求的处理方式和路由。
    root: 定义 location 块的文档根目录。
    proxy_pass: 定义代理服务器的协议和地址。
    try_files: 尝试按顺序提供文件，如果找不到则进行下一步处理。
    mail { ... }: 邮件代理模块，用于定义邮件代理服务器的配置。
    stream { ... }: 用于 TCP/UDP 流量的配置。