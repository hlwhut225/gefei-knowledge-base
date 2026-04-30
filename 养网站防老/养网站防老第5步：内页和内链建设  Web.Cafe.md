---
created: 2026-04-30T09:31:15 (UTC +08:00)
tags: []
source: https://new.web.cafe/tutorial/detail/1civEx3Bnca6XJm3Ufdj8V
author: 
---

# 养网站防老第5步：内页和内链建设 | Web.Cafe

> ## Excerpt
> 养网站防老第5步：内页和内链建设大家好，我是哥飞。昨天@damo 老板又来给大家报喜了，我们先恭喜他在订阅上走出了成绩。网站养老系列，哥飞已经更新了6篇了：之前我们已经把首页做好了，今天我们来聊第5步，把内页也做好，同时教大家如何做内链建设。 一、首页小调整在此之前，我们先把首页稍微修改一下。1.1、标题和描述标题和描述修改为：<title>Phone Number Generator,China

---
# 养网站防老第5步：内页和内链建设

大家好，我是哥飞。

昨天@damo 老板又来给大家报喜了，我们先恭喜他在订阅上走出了成绩。

![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC5%E6%AD%A5%EF%BC%9A%E5%86%85%E9%A1%B5%E5%92%8C%E5%86%85%E9%93%BE%E5%BB%BA%E8%AE%BE%20%20Web.Cafe/da59d8add8754452a54fd3c826f1754e.png)

网站养老系列，哥飞已经更新了6篇了：

之前我们已经把首页做好了，今天我们来聊第5步，把内页也做好，同时教大家如何做内链建设。 一、首页小调整

在此之前，我们先把首页稍微修改一下。

1.1、标题和描述

标题和描述修改为：

```javascript
<title>Phone Number Generator,China,India,US,Indonesia,Brazil,Pakistan,Nigeria,Bangladesh,Russia,Japan</title>
<meta name="description" content="Easily generate phone numbers for top countries like China,India,US,Indonesia,Brazil,Pakistan,Nigeria,Bangladesh,Russia,Japan.Phone Number Generator, Perfect for testing, verification, and various applications.">
```

1.2、首页h1

首页h1的a标签增加title：

```php-template
<h1 class="logo">
    <a href="./" title="Phone Number Generator">Phone Number Generator</a>
</h1>
```

1.3、导航栏

导航栏的a标签增加title：

```php-template
<div class="country-list">
    <a class="curr" href="./" title="Phone Number Generator">Home</a>
    <a href="./china-phone-number-generator.html" title="China Phone Number Generator">China</a>
    <a href="./india-phone-number-generator.html" title="India Phone Number Generator">India</a>
    <!--此处限于篇幅只列出2个国家，实际页面要把所有10个国家都列出-->
</div>
```

1.4、国家列表

每一个h2的a标签也增加title：

```php-template
<section>
    <h2><a href="./china-phone-number-generator.html" title="China Phone Number Generator">China Phone Number Generator</a></h2>
    <p>Generate valid China phone numbers with our tool. Perfect for various applications and tests.</p>
    <a href="./china-phone-number-generator.html" title="Generate China Phone Number">
        <button>Generate China Phone Number</button>
    </a>
</section>
```

这样我们首页就给每个国家的内页都增加了2个链接，分别传递了“xxx Phone Number Generator”、“Generate xxx Phone Number”两个关键词的权重到对应的国家内页。

1.5、首页预览

调整完的首页长这样： ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC5%E6%AD%A5%EF%BC%9A%E5%86%85%E9%A1%B5%E5%92%8C%E5%86%85%E9%93%BE%E5%BB%BA%E8%AE%BE%20%20Web.Cafe/f1c05e93384a49fa95d2e201c8bba109.png)

二、内页

2.1、内页预览

以“China Phone Number Generator”为例，先给大家看下内页长这样： ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC5%E6%AD%A5%EF%BC%9A%E5%86%85%E9%A1%B5%E5%92%8C%E5%86%85%E9%93%BE%E5%BB%BA%E8%AE%BE%20%20Web.Cafe/1e4bb00dbf914ccc8fc21ca3f738de6b.png) 2.2、标题和描述

先说标题和描述，先自己大概写一下：

```javascript
<title>China Phone Number Generator, Generate China Phone Number</title>
<meta name="description" content="China Phone Number Generator, Generate China Phone Number">
```

然后让GPT4生成符合SEO要求的且更自然的标题和描述：

```javascript
<title>China Phone Number Generator - Generate Authentic & Random Chinese Numbers</title>
<meta name="description" content="Easily generate random Chinese phone numbers for testing, verification, and other purposes. Authentic format with comprehensive coverage across China.">
```

2.3、内页h1

内页 h1 如下：

```php-template
<section>
    <h1><a href="./china-phone-number-generator.html">China Phone Number Generator</a></h1>
    <p>Generate valid China phone numbers with our tool. Perfect for various applications and tests.</p>
</section>
```

这里我们直接用了首页的 section 样式，在 main 的第一个 section 中写 h1 和一些介绍。

2.4、生成电话号码功能

接着第二个 section 提供生成电话号码功能：

```php-template
<section>
    <h2>Generate China Phone Number</h2>
    <p style="margin-top: 5px;">Note: These numbers are randomly generated and may not be valid for actual use.</p>
    <button id="generateButton">Generate Phone Number</button>

    <div id="phoneNumberDisplay" class="number-display" style="margin-top:10px"></div>
    <div id="errorDisplay" class="error-display"></div>
</section>
```

每点击一次按钮，就生成一个新的号码，并且不断添加到底部，也就是说可以生成一个号码列表，需要用 js 配合生成符合格式的号码：

```php-template
<script>
    document.getElementById('generateButton').addEventListener('click', function() {
        try {
            const phoneNumber = generateChinaPhoneNumber();
            document.getElementById('phoneNumberDisplay').innerHTML += phoneNumber + '<br />';
            document.getElementById('errorDisplay').innerHTML = '';
        } catch (error) {
            document.getElementById('errorDisplay').innerHTML = 'Failed to generate number. Please try again.';
        }
    });

    function generateChinaPhoneNumber() {
        const prefix = '1';
        const secondDigit = Math.floor(Math.random() * 7) + 3; 
        let restOfNumber = '';
        for(let i = 0; i < 9; i++) {
            restOfNumber += Math.floor(Math.random() * 10);
        }
        return prefix + secondDigit + restOfNumber;
    }
</script>
```

这里为了用户体验，还可以增加一次生成10个号码、50个号码的按钮，限于篇幅今天我们不放相关代码出来，有需要直接找GPT生成就可以。

2.5、增加更多关于关键词的h2

在生成电话号码功能下方，我们让GPT基于我们提供的一些关键词，生成更多关于内页关键词的 seation ，每一个 section 都是一个 h2 。

我们先导出 Semrush 中跟当前内页关键词相关的更多关键词。 ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC5%E6%AD%A5%EF%BC%9A%E5%86%85%E9%A1%B5%E5%92%8C%E5%86%85%E9%93%BE%E5%BB%BA%E8%AE%BE%20%20Web.Cafe/78002ed435134628be428ad5e864121c.png)

然后提供关键词列表给GPT4，让AI生成指定格式的 section，部分生成后的代码如下：

```php-template
<section>
    <h2>China Phone Number Format</h2>
    <p>The standard format for Chinese phone numbers is 1xx-xxxx-xxxx, where '1' is always the prefix, followed by a 2-digit operator code and then an 8-digit user number.</p>
</section>

<section>
    <h2>Major Mobile Operators in China</h2>
    <ul>
        <li>China Mobile: Starting with 134, 135, 136, etc.</li>
        <li>China Unicom: Starting with 130, 131, 132, etc.</li>
        <li>China Telecom: Starting with 133, 149, etc.</li>
    </ul>
</section>

<section>
    <h2>China's Virtual Phone Number Providers</h2>
    <p>In addition to the traditional operators, there are many virtual phone number providers in China offering services for business and private use.</p>
</section>
```

对应页面效果如下： ![image.png](%E5%85%BB%E7%BD%91%E7%AB%99%E9%98%B2%E8%80%81%E7%AC%AC5%E6%AD%A5%EF%BC%9A%E5%86%85%E9%A1%B5%E5%92%8C%E5%86%85%E9%93%BE%E5%BB%BA%E8%AE%BE%20%20Web.Cafe/3422a8acb5b04ce59184736630314542.png) 2.6、生成更多内页

按照同样的方法，生成其它9个国家的内页，注意每个国家的电话号码格式都不一样，直接让GPT生成相关js代码就好。

我们举例说明的这个工具站页面结构更简单，只需要首页给每个内页增加内链，内页给首页给增加内链就行。

至此我们的代码网站代码就都写完了，目前的语言默认是英文，下一步我们还需要给网站增加多语言支持，这部分内容在明天的推文中介绍。

再下一步是注册域名，然后部署到Vercel，并且用 Cloudflare 包一层，既能加速又能保护源站。

再下一步是提交到谷歌Search Console后台，并且增加谷歌统计代码。

欢迎关注哥飞公众号，接收后续文章推送。
