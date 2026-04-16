# 漫游找词SOP

**作者:** 程序员卡诺
**日期:** 2024-12-27 19:33
**来源:** https://new.web.cafe/tutorial/detail/fjdhxvvcsq

---

无特别领域的广撒网找词 SOP

卡诺:
进群也一年了，除了一开始折腾了一波 gpts(还上了个榜呢)，之后由于种种原因，到现在再没出手上站，之前买的域名都过期几个了。。。
好在最近终于工作和家庭有点空隙，痛定思痛，决定静下心来好好搞一波
昨晚开始找词的时候发现有些卡点，于是今天先一顿搜索群聊天记录，加上自己的理解，整理了一个找词的SOP，分享出来，算是回馈一下社群吧~

# 0、合理化预期

首先要合理化找词的预期，否则会经常性的陷入自我怀疑，比如刚找了 2 个小时，就觉得怎么还没找到。。。

但按照哥飞讲过的时间安排原则：

花40%时间去挖掘需求
花20%时间开发
花40%时间宣传推广搞外链

2小时找词，对应的是半小时上好一个站

如果不能那么快上站，说明经验积累的不够，实力不够，那么应当对应的放宽找词的时间预期

比如你做一个站得干出去两三天，那你花一周找词都不为过。。。

# 1、打开数据平台

ahrefs
similarweb
semrush
PS：反正都买不起，我就不放正版链接了，群里有飞哥谈来的 similarweb&semrush 优惠购买渠道

# 2、进入关键词搜索的页面，搜索任意单词

可以从自己感兴趣、有所了解的一些领域触发
具体的对象：cat(猫)、dog(狗)
具体的产品、品牌：poe2(流放之路2)、genshin(原神)、Disney(迪士尼)
一些分类：editor(编辑器)、table(表格)
等等等等...
【收藏】51个挖掘需求时能用得上的财富密码关键词哥飞免费赠送给大家

# 3、设定结果筛选条件

设置筛选条件

排除 NSFW 类的关键词，例如 sex... 等
KD < 30（40其实也可以看看）
搜索量从高到低排序
CPC （如果搜索结果很多，也可以加一点 CPC 挑一挑）
如果有【搜索意图】，则把【导航】类型去掉

# 3.5 良辰美分享的 GoogleTrends 找词：

同以上 1、2、3 步的思路，只是换成从 GoogleTrends 上找词
在 GoogleTrends 上输入各种词根，然后去看底部的相关查询

良辰美大佬还分享了喂饭式 GoogleTrends 文件：
https://docs.google.com/spreadsheets/d/11H52lHp5VD96X2ZTh8QMbGgrYHTVHYh1xdx6MG1siQ8/edit?pli=1&gid=0#gid=0
这是良辰美大佬的分享：广告费日入百刀的实战经验
以及社群里朋友开发的两个辅助插件

TrendsBar
Trends Radar

![image.png]
# 4、词海漫游

有人说炒A股像读博（每天学习各种新概念），我觉得找词也差不多，你能看到各种需求场景😂


了解每个词是什么意思

理解用户在什么情况下会来搜这个词
用户搜这个词是为了得到什么东西



可以批量导出，并用 KDRoi 的公式进一步筛选（GoogleTrends找词就不用了）

养网站防老第1.5步：用一个公式来判断关键词是否值得做，让你选择关键词不再犹豫
群友也做了个便捷工具：https://roi-calculator-flame.vercel.app/

# 5、注意一些陷阱：

有些搜索目标是无法替代的：

class charts login 但这个词其实没有操作空间，因为 class charts 是英国教育系统里的在线学校管理软件。。。。




Google 首页就解决了关键词的需求：

ring size chart（戒指尺寸表），上来 google 就放了各种图片，根本没人去看下边的网站



季节词

文中案例 1
在 GoogleTrends 上时间拉长到一年去看，看看词的流量是否稳定
有些词是每年某短时间才会爆发一波流量，这种词就要自己斟酌是否要去做了



对抗性工具

文中案例 3：youtube to mp3
这个词其实是在和 youtube 做对抗，时不时有新的站点上来，流量也很强，但很可能是因为老站点被 google 直接封杀了

![image.png]
# 6、进一步确定搜索量

使用 谷歌趋势（GoogleTrends）对标一个较为熟悉的关键词

考虑用 gpts 做参照，5000左右一天的搜索量（本搜索量是群友12月23号说的）
地址：https://trends.google.com/trends/explore?q=gtps



使用 谷歌Ads 查看准确搜索量

位置：谷歌Ads关键字规划工具->关键词预测
如何开启：Google Ads 经理账号(MCC)注册并获取ADS API Token拿关键词搜索量
地址：https://ads.google.com/home/tools/manager-accounts/

# 7、观察对手（判断优化难度）

去谷歌搜索结果看前几名的站

如果全是内页，大站也不多，你机会就很大
如果主词在首页的多，那你就得掂量下了



通过 allintitle 判断专门优化这个词的网站有多少


Google 搜索时开头加上【allintitle：】

例如 “allintitle: cat meme white”



查看关键词完全在标题内的网页，有多少


kgr = allintitle 的页面数量除以关键词月搜索量
https://keyword.com/blog/keyword-golden-ratio-everything-you-need-to-know-about-kgr/




尝试直接访问被注册的域名

比如 ring size chart 这个关键词，在考虑注册时发现有两个域名已经被买下了
https://ringsizechart.info/
https://ringsizechart.net/
那么就可以直接过去看看这两个域名的状态，以及通过 AITDK 插件看看这两个站的 SEO 是否做到位
以此再次验证之前的判断

# 8、上站！上站



*提取时间: 2026-04-16*