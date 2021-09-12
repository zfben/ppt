---
theme: default
colorSchema: dark
class: text-center
layout: center
---

# FaasJS 是如何提升开发体验的？

For Ruby Tuesday 2021-09-14

From Ben (https://github.com/zfben)

---
layout: center
---

# 如何让开发从入门到转行？

- 买服务器、配服务器、管理服务器
- 配置本地开发环境
- 写业务代码之前，要学 MVC、ORM 等等
- ...

👆 这些都是必须的吗❓

---
layout: center
---

# Serverless 是如何提升开发体验的？

- 初期无运维
- 后期简单运维（如设置预制并发等）
- 费用低廉，按需付费

---
layout: center
---

# FaaS 是如何提升开发体验的？

- 原子化迭代
- 迭代范围自由可控
- 可作为跨系统的粘合剂

---
layout: center
---

# FaasJS 是如何提升开发体验的？

- Serverless: 跟运维 say Bye
- FaaS: 跟复杂重构 say Bye
- Node.js + Typescript: 跟高效开发 say Hi
- FaasJS: 专注业务逻辑，可扩展、可测试

---
layout: center
---

# FaasJS 的 Hello world

### 云函数的生命周期

1. 初始化
2. 执行业务逻辑

```ts
// hello.func.ts
import { useFunc } from '@faasjs/func'

export default useFunc(function () {
  // 初始化

  return async function () {
    // 执行业务逻辑
    return 'Hello world!'
  }
})
```

---
layout: center
---

# 添加网络请求处理器

```ts
// hello.func.ts
import { useFunc } from '@faasjs/func'
import { useHttp } from '@faasjs/http'

export default useFunc(function () {
  const http = useHttp<{ name: string }>({
    validator: { params: { rules: { name: { requeired: true } } } }
  })

  return async function () {
    /* @returns {
     *  statusCode: 200,
     *  headers: { Content-Type: application/json },
     *  body: {"data": "Hello world!"}
     * }
    */
    return `Hello ${http.params.name}!`
  }
})
```

---
layout: center
---

# FaasJS 的网络请求包含了什么？

- 入参校验（包括 params、cookie 和 session）
- 网络通讯协议（基于 FaasJS，符合原子化开发风格的协议）
- 出参封装（包括 headers、body 和 statusCode）
- 响应内容压缩（支持 brotli、gzip 和 deflate）
- 基于 Cookie 的 Session 加密机制（同 Ruby on Rails）

---
layout: center
---

# 添加数据库访问

```ts
// hello.func.ts
import { useFunc } from '@faasjs/func'
import { useKnex, query } from '@faasjs/knex'

export default useFunc(function () {
  useKnex()

  return async function () {
    return query('users').first()
  }
})
```

---
layout: center
---

# 为什么不用 ORM？

ORM 有悖于原子化开发

- ORM 是一个中心化的工具
- ORM 是一个面向对象的工具

同样的原因也适用于 GraphQL

---
layout: center
class: text-center
---

# 一个开箱即用的 FaasJS Application

Talk is cheap, show me the code.

`git clone https://github.com/faasjs/starter`

---
layout: center
class: text-center
---

# 感谢

致敬国金的 Costa
