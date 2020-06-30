# Web-learning

这是我学习前端的记录，走过的各种弯路也会记录在其中。
### 步骤
1. HTML+CSS+JavaScript（包含ES6语法）
2. 利用HTML+CSS做一个静态页面模仿Demo（比如模仿小米或者魅族官网）
3. 使用JavaScript制作轮播图和可以实现模糊查询的todolist
4. 选择框架(Vue or React)学习【这里我用Vue举例】 
    1. 先学习怎么用（基本语法v-bind/b-on/v-if/v-model/父子传参/引入components等）
    2. 做一个通过在`<script>`中引入Vue文件的项目熟悉基本语法和用法
    3. 学习VueRouter和Vuex等其他组件
    4. 做一个`vue create project-name`用脚手架创建的项目（最好是贴近现实/不是那种垃圾项目）。PS：垃圾项目的定义就是项目设计简陋并且和实际开发不贴近，花时间学习不到太多干货。
    5. 深入学习Vue的生命周期/MVVM/diff算法等原理（推荐慕课网的相关课程）。然后你会明白Vue的神奇之处，很多第1/2步积攒的疑问迎刃而解（比如data里为什么返回的是函数/什么时候函数放created or methods or mounted or computed等）
5. 前端框架学习完成后，建议学习一点后台(比如NodeJS and express和数据库MongDB and mongoose)
6. 找一个技术栈为Vue/React + Node的全栈项目自己尝试做
7. 自己根据之前的经验自己做一个全栈项目（这里我自己做了自己的博客）

---
### 项目
1. 小米官网静态页面 `HTML&CSS/mi`
1. todolist`todolist.html`
   - 纯JS实现模糊查询
   - 防抖和节流用来解决这类事件`防抖和节流/debounce.js and throttle.js`
2. boss官网`boss`
   - script引入vue做的静态页面 
3. todolist`todolist/src`
   - Vue + Vuex + Ant Design Vue技术栈
   - 实现添加、删除、选中、一键删除、过滤等
4. shoppingmall
5. Node-Vue-MOBA`Node-Vue-MOBA`
   - 全栈项目：前端为Vue， 后端为Node + MongDB + ElementUI
   - 实现王者荣耀官网移动端
6.自己的博客网站（未完成）
7. 实时聊天页面
---
#### 原文章，断断续续写的，比较杂乱
HTML CSS JS都是学习的尚硅谷李立超，反正讲挺好的。
https://www.bilibili.com/video/av73233449?spm_id_from=333.337.b_62696c692d6865616465722d6d.28

HTML&CSS是尚硅谷李立超2019最新版笔记。
ECMAScript是尚硅谷2017/12月的视频笔记。


学完HTML/CSS/JS以及ES之后，我开始学习框架。但是在学习框架之前，我看了一些Node的基础，比如怎么export和NPM的知识，不需要学得太深。https://www.bilibili.com/video/av75653013?from=search&seid=10459817069764821849 这个也是超哥的基础课，讲得挺清楚。

然后，在React和Vue之中选择学习Vue框架。这个老师讲的不错https://www.bilibili.com/video/av59594689?p=148
选择Vue框架仅仅是因为Vue作者比较活跃，没有关注其他的原因。其实两个框架最好都学习，这里就不要纠结。

mallbyvue是上面vue学习视频的案例，但是我觉得这个案例略显low了一点....有点不想做，创建了项目一直没有开始做。shoppingmall是后面我又鼓起勇气尝试去做这个，但是做了一点还是觉得这个项目太烂了，没做了。*也不推荐大家做*。
boss是在B站上找到的一个用CSS写，然后用vue抽取的boss直聘手机端案例，这个还不错。*适合基础做，这里没有用到Vue CLI*

 boss-1是纯CSS，boss-2是vue抽取。2020/1/09已经完成。

 Node-Vue-MOBA是王者荣耀手机网站全栈项目。2020/1/11开始。
##### 涉及的技术栈为
- NodeJS + MongoDB
- VueJS + ElementUI

**在做这个项目的时候要特别注意一个问题**：axios中的get/post/put等方法中url地址到底要不要斜杠`/`，例如获取 http://localhost:3000/categories 的数据，如果你定义了 baseURL:http://localhost:3000 ，请求数据应该写`get('categories',[options])`，这里是不用拼接`/`。但是在用Node的express用路由写接口时的get/post/put等等路由方法要加`/`，例如`express().Router.get('/categories', callback)` `app.use('/app/, express().Router)`。用Vue的router的get/push等方法也需要写`/`。

最开始我在Node里少写`/`导致post请求返回404 Not Found，找了好久错误，才发现。

Node-Vue-MOBA是一个**非常值得**做的项目。如果有Vue.js+Node.js的基础，我推荐大家都去过一遍这个项目。

最近我开始找工作了，所以开始整理面试相关的问题。防抖和节流是考得比较多，但是平时很少用的知识。

todolist是一个小组件。2020/6/29
##### 涉及的技术栈为
- VueJS + Ant Design Vue
