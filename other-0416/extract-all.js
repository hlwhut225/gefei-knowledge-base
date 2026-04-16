const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = __dirname;

const urls = [
  {
    url: 'https://new.web.cafe/tutorial/detail/sk5je1bj0f',
    filename: '再看上站之后要做什么-详解谷歌搜索排名-月收入50k为例.md'
  },
  {
    url: 'https://new.web.cafe/tutorial/detail/5yyr7zjxk7',
    filename: '工具落地页要如何设计.md'
  },
  {
    url: 'https://new.web.cafe/tutorial/detail/za408lc1q9',
    filename: '基于精品工具页面思路做精品工具站.md'
  },
  {
    url: 'https://new.web.cafe/tutorial/7PG1iQzr3sXx1tyKmf9ZYd',
    filename: '养网站防老系列全流程.md'
  },
  {
    url: 'https://new.web.cafe/experience/ao30ki8tzk',
    filename: '加外链-博客评论外链依然还有用.md'
  },
  {
    url: 'https://new.web.cafe/topic/xoi32sha0d',
    filename: 'topic-xoi32sha0d.md'
  },
];

function htmlToMarkdown(html) {
  // 简单转换：处理常见标签
  let text = html;
  // 标题
  text = text.replace(/<h1[^>]*>(.*?)<\/h1>/gis, '# $1\n\n');
  text = text.replace(/<h2[^>]*>(.*?)<\/h2>/gis, '## $1\n\n');
  text = text.replace(/<h3[^>]*>(.*?)<\/h3>/gis, '### $1\n\n');
  text = text.replace(/<h4[^>]*>(.*?)<\/h4>/gis, '#### $1\n\n');
  text = text.replace(/<h5[^>]*>(.*?)<\/h5>/gis, '##### $1\n\n');
  text = text.replace(/<h6[^>]*>(.*?)<\/h6>/gis, '###### $1\n\n');
  // 段落
  text = text.replace(/<p[^>]*>(.*?)<\/p>/gis, '$1\n\n');
  // 换行
  text = text.replace(/<br\s*\/?>/gi, '\n');
  // 加粗
  text = text.replace(/<strong[^>]*>(.*?)<\/strong>/gis, '**$1**');
  text = text.replace(/<b[^>]*>(.*?)<\/b>/gis, '**$1**');
  // 斜体
  text = text.replace(/<em[^>]*>(.*?)<\/em>/gis, '*$1*');
  text = text.replace(/<i[^>]*>(.*?)<\/i>/gis, '*$1*');
  // 代码
  text = text.replace(/<code[^>]*>(.*?)<\/code>/gis, '`$1`');
  // 预格式化代码块
  text = text.replace(/<pre[^>]*>(.*?)<\/pre>/gis, '```\n$1\n```\n\n');
  // 列表项
  text = text.replace(/<li[^>]*>(.*?)<\/li>/gis, '- $1\n');
  // 链接
  text = text.replace(/<a[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gis, '[$2]($1)');
  // 图片
  text = text.replace(/<img[^>]*src=["']([^"']*)["'][^>]*alt=["']([^"']*)["'][^>]*\/?>/gis, '![$2]($1)');
  // 删除其他 HTML 标签
  text = text.replace(/<[^>]+>/g, '');
  // 解码 HTML 实体
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");
  // 清理多余空行
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.trim();
  return text;
}

async function extractPage(item) {
  console.log(`\n正在提取: ${item.url}`);
  const browser = await puppeteer.connect({
    browserURL: 'http://127.0.0.1:18800',
    defaultViewport: null,
  });

  try {
    const pages = await browser.pages();
    const page = pages[0] || await browser.newPage();
    if (!pages[0]) await page.bringToFront();

    await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });

    // 等待内容加载
    await new Promise(r => setTimeout(r, 3000));

    // 尝试获取页面标题
    const title = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      return h1 ? h1.innerText.trim() : document.title;
    });

    // 提取 .custom-html 内容
    const content = await page.evaluate(() => {
      const container = document.querySelector('.custom-html');
      if (container) return container.innerHTML;
      // 备选：尝试 article 或 main
      const article = document.querySelector('article, .content, .article-content, main');
      return article ? article.innerHTML : '<p>未找到内容区域</p>';
    });

    const markdown = htmlToMarkdown(content);
    const output = `# ${title}\n\n> 来源: ${item.url}\n> 提取日期: ${new Date().toISOString().split('T')[0]}\n\n---\n\n${markdown}\n`;

    const filePath = path.join(OUTPUT_DIR, item.filename);
    fs.writeFileSync(filePath, output, 'utf-8');
    console.log(`✅ 已保存: ${item.filename}`);

  } catch (err) {
    console.error(`❌ 提取失败: ${item.url}`, err.message);
  } finally {
    // 不关闭浏览器，保持连接供后续使用
  }
}

async function main() {
  for (const item of urls) {
    try {
      await extractPage(item);
      // 间隔一下，避免请求太快
      await new Promise(r => setTimeout(r, 1000));
    } catch (e) {
      console.error(`跳过: ${item.url}`, e.message);
    }
  }
  console.log('\n✅ 全部提取完成！');
}

main().catch(console.error);
