<!DOCTYPE HTML>
<html>
<head>
    <title>祥龙检索--哔哩哔哩</title>
    <meta charset="UTF-8"/>
    <meta http-equiv="pragma" content="no-cache"/>
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="expires" content="0"/>
    <meta name="referrer" content="no-referrer">
    <meta name="keywords" content="哔哩哔哩,千度,千度搜索,千度网,搜索引擎大全,高级搜索,搜索神器,搜索大全"/>
    <meta name="description" content="哔哩哔哩,千度,千度一下，你更知道,千度搜索,千度网,搜索引擎大全,高级搜索,搜索神器,搜索大全"/>
    <link rel="shortcut icon" href="/images/logo/index_logo.png" type="image/icon"/>
    <link rel="stylesheet" type="text/css" href="/css/bilibili/searchPage.css"/>
    <script type="text/javascript" src="/jss/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="/jss/vue.js"></script>
    <script type="text/javascript" src="/jss/bilibili/commonPage.js"></script>
</head>

<body>
    <div id="rooter">
        <div class="topArea">
            <img class="logo" src="/images/bilibili/logo.png"/>
            <div class="searchArea">
                <div>
                    <a href="/bilibili/ranking" target="_blank"><b></b><span>排行榜</span></a>
                    <input class="search" type="text" placeholder="搜索bilibili全网"/>
                    <i class="searchButton"></i>
                </div>
            </div>
        </div>

        <div class="centerArea">
            <div class="types">
                <ul>
                    <li order="totalrank"><a>综合排序</a></li>
                    <li order="click"><a>最多点击</a></li>
                    <li order="pubdate"><a>最新发布</a></li>
                    <li order="dm"><a>最多弹幕</a></li>
                    <li order="stow"><a>最多收藏</a></li>
                </ul>

                <ul>
                    <li duration="0"><a>综合时长</a></li>
                    <li duration="1"><a>10分钟以下</a></li>
                    <li duration="2"><a>10-30分钟</a></li>
                    <li duration="3"><a>30-60分钟</a></li>
                    <li duration="4"><a>60分钟以上</a></li>
                </ul>

                <ul>
                    <li tids_1="0"><a>全部分区</a></li>
                    <li tids_1="1"><a>动画</a></li>
                    <li tids_1="13"><a>番剧</a></li>
                    <li tids_1="167"><a>国创</a></li>
                    <li tids_1="3"><a>音乐</a></li>
                    <li tids_1="129"><a>舞蹈</a></li>
                    <li tids_1="4"><a>游戏</a></li>
                    <li tids_1="36"><a>科技</a></li>
                    <li tids_1="188"><a>数码</a></li>
                    <li tids_1="160"><a>生活</a></li>
                    <li tids_1="119"><a>鬼畜</a></li>
                    <li tids_1="155"><a>时尚</a></li>
                    <li tids_1="165"><a>广告</a></li>
                    <li tids_1="5"><a>娱乐</a></li>
                    <li tids_1="181"><a>影视</a></li>
                    <li tids_1="177"><a>纪录片</a></li>
                    <li tids_1="23"><a>电影</a></li>
                    <li tids_1="11"><a>电视剧</a></li>
                </ul>
            </div>
            <div v-if="nonePage === false">
                <ul class="content">
                    <li v-for="(item,index) in videoList">
                        <a :href="'/bilibili/redirectVideoPage/' + item.bvid + '/' + item.id + '/' + item.aid">
                            <img :src="item.pic"/>
                        </a>
                        <span class="title" v-html="item.title"></span>
                        <span class="duration" v-html="item.duration"></span>
                        <span class="date" v-html="item.date"></span>
                    </li>
                </ul>
            </div>
            <div v-else class="nonePage">
                <img src="/images/bilibili/no-data.png"/>
            </div>
        </div>
    </div>
<input class="keyword" style="display: none;" th:title="${keyword}"/>
</body>
</html>
