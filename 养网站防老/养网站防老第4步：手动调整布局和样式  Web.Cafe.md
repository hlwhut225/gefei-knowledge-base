---
created: 2026-04-30T09:31:11 (UTC +08:00)
tags: []
source: https://new.web.cafe/tutorial/detail/aucjab67rxKvyoJudKV4oM
author: 
---

# 养网站防老第4步：手动调整布局和样式 | Web.Cafe

> ## Excerpt
> 养网站防老第4步：手动调整布局和样式大家好，我是哥飞。网站养老系列哥飞已经更新了5篇了：今天我们紧接着第3步，在GPT4生成的网页上进行一些手动调整，让布局和样式更好看一点。昨天的网页长这样： 调整后的网页长下面这样： 这里为了截图方便，正文国家列表只保留了三个，其它都暂时隐藏了 我们来一一看一下，改了哪些地方。1、Logo左右两边是 Logo 调整前后对比：调整前调整后这里哥飞没有去设计图片Lo

---
# 养网站防老第4步：手动调整布局和样式

大家好，我是哥飞。

网站养老系列哥飞已经更新了5篇了：

今天我们紧接着第3步，在GPT4生成的网页上进行一些手动调整，让布局和样式更好看一点。

昨天的网页长这样： ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC4%E6%AD%A5%EF%BC%9A%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B8%83%E5%B1%80%E5%92%8C%E6%A0%B7%E5%BC%8F%20%20Web.Cafe/16b7c1b5336d43eb8e26253bdc58a870.png) 调整后的网页长下面这样： ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC4%E6%AD%A5%EF%BC%9A%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B8%83%E5%B1%80%E5%92%8C%E6%A0%B7%E5%BC%8F%20%20Web.Cafe/ff78d6724a2d4270aef8d28f10d3efd6.png) 这里为了截图方便，正文国家列表只保留了三个，其它都暂时隐藏了 我们来一一看一下，改了哪些地方。

1、Logo

左右两边是 Logo 调整前后对比：

|    调整前    |    调整后    |
|-----------|-----------|
| ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC4%E6%AD%A5%EF%BC%9A%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B8%83%E5%B1%80%E5%92%8C%E6%A0%B7%E5%BC%8F%20%20Web.Cafe/ccbc2d306cf64ce7a59cc9c9576e2dcf.png) | ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC4%E6%AD%A5%EF%BC%9A%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B8%83%E5%B1%80%E5%92%8C%E6%A0%B7%E5%BC%8F%20%20Web.Cafe/4a2997099f644e5196114eab356f9f6e.png) |

这里哥飞没有去设计图片Logo，直接用黑色背景加白色文字加圆角形式实现的文字Logo。 大多数时候我们快速上线一个网站时，都可以用这种方式做文字Logo。

首页 html 代码如下：

```php-template
<h1 class="logo">
  <a href="./">Phone Number Generator</a>
</h1>
```

内页 html 代码如下：

```javascript
<div class="logo">
  <a href="./">Phone Number Generator</a>
</div
```

可以看到首页和内页的区别就是首页logo这里哥飞用了h1，而内页直接用的 div 。这是因为内页的 h1 另有别的，所以logo这里不能放h1。

对应的 css 代码如下：

```css
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
```

因为既有 h1 也有 div ，所以这里通过 font-style: normal; 去掉h1的默认字体样式。其它的都是常规css写法了，如果不会的话，可以先学习一下前端基础。

另外说明下，哥飞也不是专业前端，所以写法可能不专业，可能会有更好的写法，但是没关系，不用纠结技术细节，只要页面看起来能达到效果就行。

2、菜单栏

上下两个图是导航栏修改前后对比：

|  导航栏前后对比  |
|-----------|
| ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC4%E6%AD%A5%EF%BC%9A%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B8%83%E5%B1%80%E5%92%8C%E6%A0%B7%E5%BC%8F%20%20Web.Cafe/b9ae1e867ad74b28a987b92e76b83f07.png) |
| ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC4%E6%AD%A5%EF%BC%9A%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B8%83%E5%B1%80%E5%92%8C%E6%A0%B7%E5%BC%8F%20%20Web.Cafe/03a23c7c35f947e6bf88c798d1ad57ad.png) |
|           |

可以看到，增加了“Home”即首页的导航链接，另外还给每个导航链接增加了背景色和圆角。

html 代码如下：

```php-template
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
```

对应的 css 代码如下：

```css
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
```

增加了个 curr 类，用来标识当前页面。

3、页头

上下两图是修改前后页头对比：

|  前后页头对比   |
|-----------|
| ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC4%E6%AD%A5%EF%BC%9A%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B8%83%E5%B1%80%E5%92%8C%E6%A0%B7%E5%BC%8F%20%20Web.Cafe/560cebef88284168a14e88658a8f1f46.png) |
| ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC4%E6%AD%A5%EF%BC%9A%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B8%83%E5%B1%80%E5%92%8C%E6%A0%B7%E5%BC%8F%20%20Web.Cafe/47d23ce848b14b43b66b59ef2cc247d1.png) |
|           |

页头整体背景改成了白色，并且让页头宽度等于网页宽度，还修改了logo和导航位置，不再居中布局，而是改为左对齐布局。

html 代码如下：

```php-template
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
```

对应的 css 代码如下：

```css
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
```

其它 logo 和导航的 css 代码前文已经贴出来过，这里就不再贴出来了。

4、按钮样式

左右两图是修改前后对比：

|    修改前    |    修改后    |
|-----------|-----------|
| ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC4%E6%AD%A5%EF%BC%9A%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B8%83%E5%B1%80%E5%92%8C%E6%A0%B7%E5%BC%8F%20%20Web.Cafe/864044413ff54fd69ac78f43913dc20f.png) | ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC4%E6%AD%A5%EF%BC%9A%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B8%83%E5%B1%80%E5%92%8C%E6%A0%B7%E5%BC%8F%20%20Web.Cafe/246d8dc2668d40e4b26d43fbf03a2d9b.png) |
|           |           |

默认按钮颜色不再用色块，而是改为了白色背景色，增加了按钮的边框颜色。

这样好处是，一眼望过去，不会整个页面都是蓝绿色按钮。

html 代码保持不变：

```php-template
<a href="china-phone-number-generator.html" title="Generate China Phone Number">
    <button>China Phone Number Generator</button>
</a>
```

只修改了 css 代码：

```css
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
```

5、footer

页脚增加了常规的版权文字：

```php-template
<footer>
    Copyright 2023 &copy; <a href="./" style="color:#333;">Phone Number Generator</a>. All rights reserved.
</footer>
```

显示出来的效果如下： ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC4%E6%AD%A5%EF%BC%9A%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4%E5%B8%83%E5%B1%80%E5%92%8C%E6%A0%B7%E5%BC%8F%20%20Web.Cafe/bdecc9307ac04b0d9fe2160c8784526f.png)

好了，首页的改动我们就说完了。
