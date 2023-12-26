# React环境构建

### 安装React脚手架

+ **全局安装脚手架**

::: tip
>
>1. `npm install -g create-react-app` 全局安装脚手架
>
> 2. `create-react-app -v` 查看脚手架版本
> 3. `create-react-app mydemo` 创建项目 mydemo(项目名)
:::

全局安装 `npm install -g create-react-app` 脚手架之后，创建项目只需要 `create-react-app 项目名`  就可以啦

+ **局部安装脚手架**

> `npx create-react-app mydemo` 就可以创建一个项目
::: tip 安装过程实际会有三个东西
>
>+ **react：** react顶级库
>+ **react-dom：** react有很多运行环境,比如aoo端的react-native，我们在web端运行就使用react-dom
> + **react-scripts：** 包含运行和打包react应用程序的所有脚本配置
:::

### scrips命令

::: tip
>
> + **npm start：** 启动项目终端
> + **npm test：** 启动项目测试命令
> + **npm run build：** 打包项目
> + **npm run eject：** 如果您对构建工具和配置选择不满意，您可以随时使用。此命令将从您的项目中删除单个生成依赖项
:::
