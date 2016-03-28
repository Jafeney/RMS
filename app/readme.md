# 自助餐厅在线订购管理系统的设计和实现
> @author Jafeney Lou <jiafneg.lou@husor.com>
> @createTime 2016-03-12 

## 系统架构与技术方案
1) 页面搭建采用目前流行的响应式设计框架 `Bootstrap`,
2) 开发模式采用前后端完全分离的方式，前端采用 `EJS+Ajax` 做模版视图的渲染工作,后端采用`NodeJS+Express+Mysql`提供API接口，连调工作都通过前端 `Javascript` 来完成。
3) 静态资源通过`gulp`自动化管理，包括 less编译、css压缩与合并、js语法校验和模块化以及压缩、EJS模板文件预编译、html压缩、图片压缩、livereload等一系类资源整合管理工作。

```
    |---- app 
         |---- bin
              |---- www         //express服务器启动文件
         |---- modules 
              |---- database    //数据层
              |---- controller  //业务逻辑层
         |---- node_modules     //项目依赖的NodeJS模块
         |---- public  
              |---- html 
                   |---- users  //编译后的客户端的HTML
                   |---- admin  //编译后的商户端的HTML
              |---- css         //编译后的css
              |---- js          //编译后的js
              |---- img         //编译后的img
         |---- routes           //路由层
              |---- users.js    //客户端的路由
              |---- admin.js    //商户端的路由
         |---- src 
              |---- less        //开发时的less资源
              |---- js          //开发时的js资源
              |---- img         //开发时的img资源
         |---- views            //视图模板层 
              |---- users       //客户端的ejs模板
              |---- admin       //商户端的ejs模板      
```

## 客户版功能清单
1) 餐厅的菜单
2) 餐厅的动态信息
3) 在线预订
4) 在线支付
5) 会员优惠和活动

## 商户版功能清单
1) 菜谱管理
2) 餐位管理（当前餐位和流量统计）
3) 结算系统（允许客户当面结算）
4) 会员管理 
5) 财务统计（日统计、周统计、月统计、年统计）
6) 信息推送（编辑动态并推送给会员）




