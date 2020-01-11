# Web-learning

这是我学习前端的记录，走过的各种弯路也会记录在其中。

HTML CSS JS都是学习的尚硅谷李立超，反正讲挺好的。
https://www.bilibili.com/video/av73233449?spm_id_from=333.337.b_62696c692d6865616465722d6d.28

HTML&CSS是尚硅谷李立超2019最新版笔记。
ECMAScript是尚硅谷2017/12月的视频笔记。


学完HTML/CSS/JS以及ES之后，我开始学习框架。但是在学习框架之前，我看了一些Node的基础，比如怎么export和NPM的知识，不需要学得太深。https://www.bilibili.com/video/av75653013?from=search&seid=10459817069764821849 这个也是超哥的基础课，讲得挺清楚。

然后，在React和Vue之中选择学习Vue框架。这个老师讲的不错https://www.bilibili.com/video/av59594689?p=148
选择Vue框架仅仅是因为Vue作者比较活跃，没有关注其他的原因。其实两个框架最好都学习，这里就不要纠结。

mallbyvue是上面vue学习视频的案例，但是我觉得这个案例略显low了一点....有点不想做，创建了项目一直没有开始做。
boss是在B站上找到的一个用CSS写，然后用vue抽取的boss直聘手机端案例，这个还不错。

boss-1是纯CSS，boss-2是vue抽取。2020/1/09已经完成。

Node-Vue-MOBA是王者荣耀手机网站全栈项目。2020/1/11开始。
##### 涉及的技术栈为
- NodeJS + MongoDB
- VueJS + ElementUI

**在做这个项目的时候要特别注意一个问题**：axios中的get/post/put等方法中url地址不要斜杠`/`，例如获取 http://localhost:3000/categories 的数据，应该写`get('categories',[options])`。但是在用Node的express写接口时的get/post/put等等路由方法要加`/`，例如`express().get('/categories', callback)`。

最开始我少写`/`导致post请求返回404 Not Found，找了好久错误，才发现。
