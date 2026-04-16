# 养网站防老第4步：手动调整布局和样式

**作者:** 哥飞
**日期:** 2024-08-12 12:01
**来源:** https://new.web.cafe/tutorial/detail/aucjab67rxKvyoJudKV4oM

---

大家好，我是哥飞。

网站养老系列哥飞已经更新了5篇了：

养网站防老：网站可以做成一生的事业

养网站防老第1步，挖掘出第1个需求

养网站防老第2步：分析搜索意图

养网站防老第1.5步：用一个公式来判断关键词是否值得做，让你选择关键词不再犹豫

养网站防老第3步：根据搜索意图使用ChatGPT的GPT4生成网页

今天我们紧接着第3步，在GPT4生成的网页上进行一些手动调整，让布局和样式更好看一点。

昨天的网页长这样：

调整后的网页长下面这样：

这里为了截图方便，正文国家列表只保留了三个，其它都暂时隐藏了
我们来一一看一下，改了哪些地方。

1、Logo

左右两边是 Logo 调整前后对比：

这里哥飞没有去设计图片Logo，直接用黑色背景加白色文字加圆角形式实现的文字Logo。
大多数时候我们快速上线一个网站时，都可以用这种方式做文字Logo。

首页 html 代码如下：

<h1 class="logo">
  <a href="./">Phone Number Generator</a>
</h1>

内页 html 代码如下：

<div class="logo">
  <a href="./">Phone Number Generator</a>
</div

可以看到首页和内页的区别就是首页logo这里哥飞用了h1，而内页直接用的 div 。这是因为内页的 h1 另有别的，所以logo这里不能放h1。

对应的 css 代码如下：

.logo{
    float: left;
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    height: 34px;
    line-height: 34px;
    background-color: black;
    padding: 0 8px;
    border-radius: 6px;
    margin: 0;
}
.logo a{
    color:white;
}

因为既有 h1 也有 div ，所以这里通过 font-style: normal; 去掉h1的默认字体样式。其它的都是常规css写法了，如果不会的话，可以先学习一下前端基础。

另外说明下，哥飞也不是专业前端，所以写法可能不专业，可能会有更好的写法，但是没关系，不用纠结技术细节，只要页面看起来能达到效果就行。

2、菜单栏

上下两个图是导航栏修改前后对比：

可以看到，增加了“Home”即首页的导航链接，另外还给每个导航链接增加了背景色和圆角。

html 代码如下：

<div class="country-list">
    <a class="curr" href="./">Home</a>
    <a href="china-phone-number-generator.html">China</a>
    <a href="india-phone-number-generator.html">India</a>
    <a href="us-phone-number-generator.html">US</a>
    <a href="indonesia-phone-number-generator.html">Indonesia</a>
    <a href="brazil-phone-number-generator.html">Brazil</a>
    <a href="pakistan-phone-number-generator.html">Pakistan</a>
    <a href="nigeria-phone-number-generator.html">Nigeria</a>
    <a href="bangladesh-phone-number-generator.html">Bangladesh</a>
    <a href="russia-phone-number-generator.html">Russia</a>
    <a href="japan-phone-number-generator.html">Japan</a>
</div>

对应的 css 代码如下：

.country-list {
    float: left;
    width: 100%;
    margin-top: 10px;
}
.country-list a {
    display: block;
    float: left;
    height: 34px;
    line-height: 34px;
    margin-right: 10px;
    margin-top: 10px;
    padding: 0 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    transition: background-color 0.3s;
    color: #333;
}
.country-list a.curr{
    color:#2c89a0;
    font-weight: bold;
}
.country-list a:hover {
    background-color: #d0d0d0;
}

增加了个 curr 类，用来标识当前页面。

3、页头

上下两图是修改前后页头对比：

页头整体背景改成了白色，并且让页头宽度等于网页宽度，还修改了logo和导航位置，不再居中布局，而是改为左对齐布局。

html 代码如下：

<header>
    <nav>
        <h1 class="logo">
            <a href="./">Phone Number Generator</a>
        </h1>

        <div class="country-list">
            <a class="curr" href="./">Home</a>
            <a href="china-phone-number-generator.html">China</a>
            <a href="india-phone-number-generator.html">India</a>
            <a href="us-phone-number-generator.html">US</a>
            <a href="indonesia-phone-number-generator.html">Indonesia</a>
            <a href="brazil-phone-number-generator.html">Brazil</a>
            <a href="pakistan-phone-number-generator.html">Pakistan</a>
            <a href="nigeria-phone-number-generator.html">Nigeria</a>
            <a href="bangladesh-phone-number-generator.html">Bangladesh</a>
            <a href="russia-phone-number-generator.html">Russia</a>
            <a href="japan-phone-number-generator.html">Japan</a>
        </div>
    </nav>
</header>

对应的 css 代码如下：

body {
    background-color: #f4f4f8;
    color: #333;
    line-height: 1.5;
    padding: 0;
}

header {
    width:100%;
    margin-bottom: 20px;
    padding: 20px 0;
    text-align: center;
    background-color: #fff;
    overflow: hidden;
}
header nav{
    width:100%;
    max-width: 1000px;
    margin: 0 auto;
}

其它 logo 和导航的 css 代码前文已经贴出来过，这里就不再贴出来了。

4、按钮样式

左右两图是修改前后对比：

默认按钮颜色不再用色块，而是改为了白色背景色，增加了按钮的边框颜色。

这样好处是，一眼望过去，不会整个页面都是蓝绿色按钮。

html 代码保持不变：

<a href="china-phone-number-generator.html" title="Generate China Phone Number">
    <button>China Phone Number Generator</button>
</a>

只修改了 css 代码：

button {
    color: #247a8c;
    border: solid 1px #2c89a0;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}
button:hover {
    background-color: #247a8c;
    color: white;
}

5、footer

页脚增加了常规的版权文字：

<footer>
    Copyright 2023 &copy; <a href="./" style="color:#333;">Phone Number Generator</a>. All rights reserved.
</footer>

好了，首页的改动我们就说完了。

---
*提取时间: 2026-04-16*
