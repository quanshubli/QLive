# QLive
A live aggregation web for fun

## 记录与总结

### 数据的获取与存储（node）

* 获取不同平台的直播间信息，直接从页面的网络请求中找出请求一页直播间的URL，得到一个JSON数据，对其进行格式化。

* 先获取平台正在直播的直播间页数，再获取每页的直播间，采用async异步控制并发请求数。

* 数据的存储，MySQL数据库，使用sql语句，每次请求到数据时，对表进行先清空再插入的操作。

* 插入的数据量过大，需要设置 mysql 默认的 max_allowed_packet

### 服务端（Express）

* 处理请求，执行数据库操作。

### 前端（React+Redux）

* 路由使用 hashHistory