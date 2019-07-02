[TOC]

# 查看文件的加载方式

```shell
node
> require.extensions
{ '.js': [Function], '.json': [Function], '.node': [Function] }
```

# 查看文件(夹)信息

- **__filename**: 当前文件的具体路径信息
- **__dirname**: 当前文件夹的具体路径信息