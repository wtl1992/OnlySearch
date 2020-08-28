<!DOCTYPE HTML>
<html>
<head>
    <title>祥龙检索--哔哩哔哩</title>
    <meta charset="UTF-8"/>
    <meta http-equiv="pragma" content="no-cache"/>
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="expires" content="0"/>
    <meta name="keywords" content="哔哩哔哩,千度,千度搜索,千度网,搜索引擎大全,高级搜索,搜索神器,搜索大全"/>
    <meta name="description" content="哔哩哔哩,千度,千度一下，你更知道,千度搜索,千度网,搜索引擎大全,高级搜索,搜索神器,搜索大全"/>
    <link rel="shortcut icon" href="/images/logo/index_logo.png" type="image/icon"/>
    <link rel="stylesheet" type="text/css" href="/css/bilibili/index.css"/>
    <script type="text/javascript" src="/jss/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="/jss/vue.js"></script>
    <script type="text/javascript" src="/jss/bilibili/index.js"></script>
    <script type="text/javascript" src="/jss/bilibili/common.js"></script>
</head>

<body>
    <div id="rooter">
        <div class="topArea">
            <img class="logo" src="/images/bilibili/logo.png"/>
            <div class="searchArea">
                <div>
                    <a href="/bilibili/ranking" target="_blank"><b></b><span>排行榜</span></a>
                    <input type="text" placeholder="搜索bilibili全网"/>
                    <i class="searchButton"></i>
                </div>
            </div>
            <ul class="types">
                <li v-for="(item,index) in types" v-html="item"></li>
            </ul>
            <hr/>
            <div class="subTitle">
                <ul>
                    <li v-for="(item,index) in subTitles" v-html="item" :href="currentHotTags[index]" :rid="currentRids[index]"></li>
                </ul>
            </div>

            <div class="hotTagKeyWords">
                <p>
                    <span class="icon"></span>
                    <span>热门标签</span>
                    <span>点击即可查看本区标签的相关内容</span>
                </p>
                <ul>
                    <li v-for="(item,index) in hotTagKeywords" v-html="item[0]" :tag_id="item[1]"></li>
                </ul>
            </div>
        </div>

        <div class="centerArea">
            <p class="newLineP">
                <span class="icon"></span>
                <span>最新动态</span>
            </p>

            <p class="changeDynamicList">
                <i class="icon"></i>
                <span>换一换</span>
            </p>
            <ul class="dynamicList">
                <li v-for="(item,index) in dynamicList">
                    <a :bvid="item.bvid" class="aid" :aid="item.aid" target="_blank" :cid="item.cid"><img :src="item.pic"/></a>
                    <br/>
                    <span v-html="item.title" :cid="item.cid" :title="item.title" :aid="item.aid" :scanCount="item.stat.view"></span>
                    <br/>
                    <p>
                        <span></span>
                        <span v-html="item.stat.view"></span>
                        <span></span>
                        <span v-html="item.stat.like"></span>
                    </p>
                </li>
            </ul>

            <ul class="newLine">
                <li v-for="(item,index) in newList">
                    <a :bvid="item.bvid" :cid="item.cid" :aid="item.aid" class="aid" target="_blank"><img :src="item.pic"/></a>
                    <br/>
                    <span v-html="item.title"></span>
                    <br/>
                    <span v-html="item.owner.name"></span>
                </li>
            </ul>

            <ul class="index">
                <li v-for="(item,index) in indexList" :class="item[0] === currentIndex ? 'focus' : ''">
                    <a :_href="item[1]" v-html="item[0]" :videoCount="videoCount"></a>
                </li>
            </ul>

            <p class="count">
                共<span v-html="pageCount"></span>页/共<span v-html="videoCount"></span>个,跳转至<input type="text"/>页
            </p>

            <ul class="rightArea">
                <li v-for="(item,index) in rankingList">
                    <b v-html="index+1"></b>
                    <a :cid="item.cid" :bvid="item.bvid" :aid="item.aid" class="aid" target="_blank">
                        <img :src="item.pic"/>
                    </a>
                    <br/>
                    <span v-html="item.title"></span><br/>
                    <span v-html="item.description"></span><br/>
                    <span v-html="item.author"></span>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>
