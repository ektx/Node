# Express

## session 说明

| 参数                | 说明                                       |
| ----------------- | ---------------------------------------- |
| resave            | 是指每次请求都重新设置 session cookie ,假设你的 cookie 是 5分钟过期, 每次请求都会再设置 5 分钟 |
| saveUninitialized | 是指无论有没有session cookie,每次请求都设置个session cookie,默认给个标示为 connect.sid |
| secure            | 应用在https                                 |