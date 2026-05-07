---
title: "使用chrome-devtools-mcp + AI自动化发外链"
source: "https://new.web.cafe/topic/u0jwahldq1"
author:
published: 2026-04-24
created: 2026-05-07
description: "使用chrome-devtools-mcp + AI自动化发外链"
tags:
  - "clippings"
---
## 工具准备

这个mcp的安装等会儿讲。

我这里用到的是AI工具是cursor。

cursor的话可以去官方渠道订阅，或者去海鲜市场买一个。

除了用cursor, claude code或者codex之类的也是可以的。

## 安装chrome-devtools-mcp并配置

打开 [https://github.com/ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)

按照文档上的说明来安装，点击这个Add to Cursor按钮，或者手动粘贴配置。

![](https://cdn.mundane.ink/20260329113711035.png)

像这样就算安装好了

![](https://cdn.mundane.ink/20260329114007263.png)

然后点击这里进行额外配置

![](https://cdn.mundane.ink/20260329114523635.png) ![](https://cdn.mundane.ink/20260329114608154.png)
```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "env": {},
      "args": ["-y", "chrome-devtools-mcp@latest", "--autoConnect"]
    }
  }
}
```

然后在chrome中打开这个地址 `chrome://inspect/#remote-debugging` ，勾选Allow remote debugging for this browser instance

![](https://cdn.mundane.ink/20260329115058475.png)

需要更详细的可以看这里 [https://github.com/ChromeDevTools/chrome-devtools-mcp#connecting-to-a-running-chrome-instance](https://github.com/ChromeDevTools/chrome-devtools-mcp#connecting-to-a-running-chrome-instance)

另外除了--autoConnect的方式，还有一种cdp(Chrome DevTools Protocol)的方式，具体的可以看官方文档，我这里就直接用--autoConnect了

## 实战演示

我以hashnode.com这个网站为案例进行演示

首先打开这个网站，注册一个账号

![](https://cdn.mundane.ink/20260329120749564.png)

然后把具体要求和产品信息写在一个markdown文件中，接着在聊天框引用这个markdown文件，让它帮我发外链。

![](https://cdn.mundane.ink/20260329201533060.png)

点允许

![](https://cdn.mundane.ink/20260329220804664.png)

第一次的时候成功发布了文章，但是因为太像推广而被删除了

![](https://cdn.mundane.ink/20260329202005948.png) ![](https://cdn.mundane.ink/20260329201806107.png)

第二次重新写了一篇，但是又有新的问题了，一直报content is required to publish。其实这个问题可能只需要先停止AI，然后手动在input框中点一下再点一下外面就好了。

![](https://cdn.mundane.ink/20260329202157661.png)

跟它说了以后，后面又尝试了一次，终于成功了。

![](https://cdn.mundane.ink/20260329202330626.png)

虽然用发布这个外链遇到了麻烦，但是我之前用chrome-devtools在sourceforge.net上是比较顺畅的。

再比如dev.to这个平台，也是一次成功

![](https://cdn.mundane.ink/20260329221446160.png) ![](https://cdn.mundane.ink/20260329221950369.png)

## 总结

这套方案的优缺点：

优点：

1. 所有外链都可以用这个方式来发，不需要一个一个适配。
2. 对于一些比较简单的外链提交网站，这套方案基本能够胜任。

缺点：

1. 速度比较慢，因为是走一步然后截图返回给AI识别，AI识别出来以后继续规划下一步怎么走。
2. 对于一些比较复杂的平台，比如hashnode.com，它的文章编辑器与发布按钮的布局比较特殊，可能还是AI自动+人手动干预来做比较好。

对于有些特殊要求，比如不允许写纯推广文章要在文章中自然植入产品链接，你可以在markdown文件中特别指明。

## 参考

另外还有利用chrome-devtools发布小红书视频的实践，可以看下面这个视频

[https://www.bilibili.com/video/BV1EynZzcEmh](https://www.bilibili.com/video/BV1EynZzcEmh)

评论区

- ![](https://lh3.googleusercontent.com/a/ACg8ocI4RV6fXboFENVnvYf5Au9lEjV3H6_AU93mg2uWRa5YKTcmYQ=s96-c)
	ELI
	2026-04-24 16:52
	回复
	使用ChatGPT是不行的。因为他是道德标兵。
- ![](https://lh3.googleusercontent.com/a/ACg8ocIIssOvGrekGt268SFYDtwFhYzE4hiIfSHCwSyYhKY_D7RvFcz3=s96-c)
	理想是自由
	2026-04-24 17:34
	回复
	ELI
	是的，我用的claude code
- ![](https://lh3.googleusercontent.com/a/ACg8ocKEdW8gDemaxmHIN1AKxWkqjoWKwlx2eJr-C4O9v2HnMlCbgg=s96-c)
	L
	回复
	话说这种直接能发博客的网站好像不多？我目前还在发比较好发的博客评论外链
- ![](https://lh3.googleusercontent.com/a/ACg8ocJ5I9tWfUyknlnAutmjyZ6KusxNjkT3nWNoQpisjV2iJUGsvg=s96-c)
	亲切菠菜爱钓鱼
	回复
	L
	博客外链 一般都是no follow,这种发文的 类似与 客座文章 follow的可能性好点
- ![](https://lh3.googleusercontent.com/a/ACg8ocLrMpEoSl5rj0JTiCvOVQ-X6H8T7BDD_YpTmp_e42ERfiq0C1c=s96-c)
	Que sera
	回复
	这种方法发一条外链的成本大概是多少啊？

[![new.web.cafe](https://new.web.cafe/website.svg)](https://new.web.cafe/)

Web.Cafe

解释