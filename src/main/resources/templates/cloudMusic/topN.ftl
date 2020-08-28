<!DOCTYPE HTML>
<html>
<head>
    <title>祥龙检索，千度寻--网易云音乐</title>
    <meta charset="UTF-8"/>
    <meta http-equiv="pragma" content="no-cache"/>
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="expires" content="0"/>
    <meta name="referrer" content="no-referrer"/>
    <meta name="keywords" content="电视剧千度,千度搜索,千度网,搜索引擎大全,高级搜索,搜索神器,搜索大全"/>
    <meta name="description" content="千度,千度一下，你更知道,千度搜索,千度网,搜索引擎大全,高级搜索,搜索神器,搜索大全"/>
    <link rel="shortcut icon" href="/images/logo/index_logo.png" type="image/icon"/>
    <link rel="stylesheet" type="text/css" href="/css/cloudMusic/topN.css"/>
    <script type="text/javascript" src="/jss/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="/jss/vue.js"></script>
    <script type="text/javascript" src="/jss/cloudMusic/topN.js"></script>
    <script type="text/javascript" src="/jss/cloudMusic/common.js"></script>
</head>

<body>

<div id="rooter">
    <div style="height: 316px;background-color: rgba(0,0,0,.6);">
        <div class="oneLine">
            <a title="祥龙检索，搜音乐"><img src="/images/index/homelogo.png"/></a>
        </div>
        <p style="margin: 10px auto;text-align: center;
	position: relative;left: 0px;top: 64px;color: #FFFFFF;">可以搜索音乐名称或者歌手名字等</p>
        <div class="searchArea">
            <p><input class="local" type="text" placeholder="请输入音乐名称或者歌手名字" title="可以搜索音乐名称或者歌手名字等"/></p>
            <a class="searchButtonLocal" target="_blank">千度音乐</a>
        </div>

        <div id="fixed_top">
            <div class="searchArea">
                <p><input class="up" type="text" placeholder="请输入音乐名称或者歌手名字" title="可以搜索音乐名称或者歌手名字等"/></p>
                <a class="searchButtonUp" target="_blank">千度音乐</a>
            </div>
        </div>

        <div class="items">
            <ul>
                <li><a href="/">回首页</a></li>
                <li><a href="/tvResult?pageIndex=1">电视剧</a></li>
                <li><a href="/movieResult?pageIndex=1">电影</a></li>
                <li><a href="/appResult?categoryId=-10&pageSize=60&pageContext=1">app</a></li>
                <li><a href="/imageResult?keyword=美女&pageIndex=1&pageSize=60">图片</a></li>
                <li><a href="/musicResult?keyword=音乐&pageIndex=1&pageSize=60">音乐</a></li>
                <li><a href="/getThunderPagingResult?classify=最新影片&pageIndex=1">迅雷下载</a></li>
                <li><a href="/baiduyunwangpanSearchResult?keyword=数据库&pageIndex=1">百度网盘</a></li>
            </ul>
        </div>

        <div class="content">
            <div class="topN">
                <div class="expand">云音乐飙升榜</div>
                <ul>
                    <li v-for="(item,index) in data" :data="item[0]">{{item[1]}}</li>
                </ul>
            </div>
			<ul>
				<li class="song" v-for="(item,index) in songIds" :class="index%2 !== 0 ? 'hover': ''">
					<span>{{index + 1}}</span>
					<span>{{item[0]}}</span>
                    <span>{{item[1]}}</span>
                    <span><img src="/images/cloudMusic/loading.gif" title="暂无图片"/></span>
                    <span class="play" data-url="DATA_URL" data="NAME" :index="index">播放</span>
				</li>
			</ul>
        </div>
    </div>
</div>

<audio autoplay controls></audio>
<input id="id" style="display: none;" title="${id}"/>
</body>
</html>
