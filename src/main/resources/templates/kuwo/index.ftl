<!DOCTYPE HTML>
<html>
<head>
    <title>祥龙检索-酷我音乐</title>
    <meta charset="UTF-8"/>
    <meta http-equiv="pragma" content="no-cache"/>
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="expires" content="0"/>
    <meta name="keywords" content="酷我音乐,LOGO在线设计,千度,千度搜索,千度网,搜索引擎大全,高级搜索,搜索神器,搜索大全"/>
    <meta name="description" content="酷我音乐,千度,千度一下，你更知道,千度搜索,千度网,搜索引擎大全,高级搜索,搜索神器,搜索大全"/>
    <link rel="shortcut icon" href="/images/logo/index_logo.png" type="image/icon"/>
    <link rel="stylesheet" type="text/css" href="/css/kuwo/index.css"/>
    <script type="text/javascript" src="/jss/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="/jss/vue.js"></script>
    <script type="text/javascript" src="/jss/kuwo/index.js"></script>
    <script type="text/javascript" src="/jss/kuwo/common.js"></script>
</head>

<body>
    <div class="top">
        <div class="innerArea">
            <a href="/kuwo/index" target="_blank">
                <img src="/images/kuwo/index.png"/>
            </a>
            <a href="/kuwo/hotTop"><span>排行榜</span></a>
            <a href="/kuwo/singer/0/1/100/100/100?prefix="><span>歌手</span></a>
            <a href="/kuwo/tagPlayListPage/37"><span>歌单</span></a>
            <a href="/kuwo/mvListPage/236682871"><span>MV</span></a>

            <input type="text" placeholder="搜索音乐/MV/歌单/歌手" maxlength="128"/>
        </div>
    </div>

    <ul class="scrollBar">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>

    <div class="recommend">
        <h1>推荐歌单</h1>
        <#list recommends as recommend>
            <a class="recommendItem">
                <span>${recommend[0]}</span>
            </a>
        </#list>

        <a href="/kuwo/tagPlayListPage/37"><span>更多 &gt;</span></a>

        <ul>
            <#list recommends[0][1] as recommend>
                <li _id="${recommend.id}" class="recommendItem">
                    <a href="/kuwo/playListInfo/${recommend.id}">
                        <img src="${recommend.imgSrc}"/>
                    </a>
                    <p>${recommend.name}</p>
                </li>
            </#list>
        </ul>
    </div>

    <div class="leaderBoard">
        <h1>排行榜</h1>
        <a href="/kuwo/hotTop"><span>更多 &gt;</span></a>

        <div class="item">
            <#list leaderBoards as leaderBoard>
                <ul>
                    <li class="leaderBoardBack">
                        <img src="/images/kuwo/song${leaderBoard_index + 1}.png"/>
                    </li>
                    <#list leaderBoard[1] as item>
                        <li rid="${item.rid}" class="itemLi">
                            <a>
                                <img src="${item.pic}"/>
                                <div>
                                    <span>${item.name}</span>
                                    <span>${item.artist}</span>
                                </div>
                            </a>
                        </li>
                    </#list>
                </ul>
            </#list>
        </div>
    </div>
    <div id="rooter">
        <div class="singer">
            <h1>歌手推荐</h1>
            <a href="/kuwo/singer/0/1/100/100/100?prefix=" target="_blank"><span>更多 &gt;</span></a>

            <div>
                <ul>
                    <li v-for="item,index in top12">
                        <a :href="'/kuwo/singerDetailInfo/' + item.id" target="_blank">
                            <img :src="item.pic"/>
                        </a>
                        <p v-html="item.aartist === '' ? item.name : item.aartist"></p>
                        <p v-html="item.musicNum + '首歌曲'"></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>
