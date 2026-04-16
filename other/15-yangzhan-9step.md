# 养网站防老第9步：谷歌对于AI生成内容的态度及如何让AI生成高质量内容

**作者:** 哥飞
**日期:** 2024-08-12 15:00
**来源:** https://new.web.cafe/tutorial/detail/keDe3UHe5TVZvAMiEBnCFK

---

大家好，我是哥飞。

养网站防老系列哥飞已经更新了10篇文章了：

养网站防老：网站可以做成一生的事业

养网站防老第1步，挖掘出第1个需求
养网站防老第2步：分析搜索意图

养网站防老第1.5步：用一个公式来判断关键词是否值得做，让你选择关键词不再犹豫

养网站防老第3步：根据搜索意图使用ChatGPT的GPT4生成网页

养网站防老第4步：手动调整布局和样式

养网站防老第5步：内页和内链建设

【6000字详解】养网站防老第6步：利用ChatGPT给网站增加多语言支持

养网站防老第7步：注册域名，解析域名，部署上线

养网站防老第8步：添加统计代码，提交到 Google Search Console，增加外链，等待被收录

本来之前说今天介绍饱和式建站的，但是刚好有朋友问到如何让AI帮我们生成高质量内容，所以临时换个话题，我们明天再聊饱和式建站。

今年2月份，谷歌发布了一个文档，表明了谷歌对于AI生成内容的态度。

https://developers.google.com/search/blog/2023/02/google-search-and-ai-content?hl=zh
哥飞在8月23号在即刻曾经做过一些解读：

> 对于如何处理网页上AI生成的内容，谷歌的做法是积极拥抱……
https://m.okjike.com/originalPosts/64e57ff062e51d2dc7dda3f5?s=eyJ1IjoiNTY3YTUwZDQ2ZWY4OWMxMjAwOGE3NTc1IiwiZCI6MX0%3D

对于如何处理网页上AI生成的内容，谷歌的做法是积极拥抱，“奖励高质量的内容，无论它是如何生产的”。
并且谷歌还告诉我们如何用AI生产高质量的内容，去“创造有用、可靠、以人为本的内容”，而不是随意生成垃圾内容。
关于AI生成内容是否会得到更高排名或者是否会被故意降低排名，谷歌的意思是不管你的内容生成方式，只看内容质量

建议大家看完哥飞的解决后，去仔细研究谷歌这篇文章原文，仔仔细细的阅读，这对于指导大家如何用AI生成内容很有帮助。

今天哥飞给大家举个例子说明，大家看完就知道了，如何用AI生成搜索引擎会喜欢的更高质量的内容。

其实核心一点，就是不要让AI“凭空捏造”，而是提供参考资料，让AI按照我们指定的格式输出内容。

拿《不用开发，如何只用一个域名就可以一键部署上线一个AI产品》的文章格式为例，我们试着让AI按照我们给定的格式对一个新的Vercel模板生成内容。

提示词格式如下：

我们看下效果，还是很不错的：

这种生成内容的方式有几个好处：

1、基于参考网页链接原文进行创作，避免AI出现幻觉而导致胡说；

2、基于指定的范文格式输出内容，让整篇文章风格统一；

3、让AI生成指定的半结构化内容，在谷歌等搜索引擎眼里，比单纯的文本更高质量。

有了这样的内容之后，我们不仅可以一个内容生成一个页面，还可以指定主题，让AI帮助我们生成一篇“Best xxx”格式文章。

这里哥飞指定三个 Starter 类模板链接，让GPT生成一篇介绍文章，我们先测试第一种提示词，只给链接，然后让GPT自由发挥：

请提取以下三个模板的通用共性，拟定标题，写一篇文章介绍这三个模板
https://vercel.com/templates/next.js/tier
https://vercel.com/templates/next.js/langchain-starter
https://vercel.com/templates/next.js/pinecone-vercel-ai

GPT返回的文章如下：

# 快速启动您的AI项目：Vercel 的三款 Starter 模板

在追求快速开发和部署的时代，Vercel 的 Starter 模板为开发者提供了宝贵的资源。以下是三个独特的 Starter 模板，可以帮助您快速启动 AI 项目。

## Tier.run - Metered Billing Stripe Starter
一个为 AI 内容创建应用提供基于使用情况的计费功能的模板。

## LangChain + Next.js Starter
为 LangChain 项目提供的起始模板和示例用例，包括聊天、代理和检索功能。

## Pinecone - Vercel AI SDK Starter
一个 Next.js 起始聊天机器人模板，实现了与 Pinecone 的检索增强生成（RAG）模式的集成。

这些模板为开发者提供了一个强大的起点，不仅提供了项目的基础结构，还展示了如何整合和利用先进的 AI 和机器学习技术。```

可以看到，文章太短小，不符合我们的要求。

怎么办呢？很简单，指定文章模板格式，让GPT按照模板格式返回：

GPT返回的文章原文如下：

# 开启 AI 项目的初始步伐：Vercel Starter 模板推介

Vercel 提供了一系列 Starter 模板，助力开发者轻松启动 AI 项目。今天我们将介绍三个具代表性的模板，它们分别是 Tier.run, LangChain Starter 和 Pinecone Vercel AI SDK Starter。

## Tier.run - Metered Billing Stripe Starter

- **模板名称**：Tier.run - Metered Billing Stripe Starter
- **模板链接**：[点击这里](https://vercel.com/templates/next.js/tier)
- **模板介绍**：Metered billing for an AI content creator app, powered by Tier, OpenAI, and Vercel.
- **哥飞点评**：这个模板为需要基于使用情况计费的 AI 内容创建应用提供了一个很好的起点。

## LangChain + Next.js Starter

- **模板名称**：LangChain + Next.js Starter
- **模板链接**：[点击这里](https://vercel.com/templates/next.js/langchain-starter)
- **模板介绍**：Starter template and example use-cases for LangChain projects in Next.js, including chat, agents, and retrieval.
- **哥飞点评**：这个模板为想要在 Next.js 中探索 LangChain 项目的开发者提供了一个很好的起点，包括聊天、代理和检索等多种用例，非常适合快速了解和应用 LangChain。

## Pinecone Vercel AI SDK Starter

- **模板名称**：Pinecone Vercel AI SDK Starter
- **模板链接**：[点击这里](https://vercel.com/templates/next.js/pinecone-vercel-ai)
- **模板介绍**：一个使用 Vercel 的 AI SDK 构建的 Next.js 起始聊天机器人模板，实现了与 Pinecone 的检索增强生成（RAG）模式的集成。
- **哥飞点评**：这个模板是为了创建一个强大的、上下文感知的聊天机器人，利用检索增强生成（RAG）技术提供准确和上下文相关的回应。

这三款 Starter 模板各具特色，为开发者提供了快速启动和测试 AI 项目的渠道。它们不仅降低了开发的门槛，还为探索新技术和实现创新想法提供了便利。

我们渲染一下看看效果：

可以看到，已经是一篇效果不错的文章了，只需要在每个模板标题下配上模板截图就好了。

而模板截图可以通过一些第三方服务，输入模板链接，生成截图。

这样我们基于 Vercel 模板库，就可以生成很多文章了。

同样的思路，对于任何一个内容库，我们都可以去指定格式，让AI帮我们重新生成内容。

你学会了吗？

---
*提取时间: 2026-04-16*
