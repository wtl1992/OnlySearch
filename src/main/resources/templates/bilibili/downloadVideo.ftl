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
    <link rel="stylesheet" type="text/css" href="/css/bilibili/download.css"/>
    <script type="text/javascript" src="/jss/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="/jss/vue.js"></script>
    <script type="text/javascript" src="/jss/bilibili/download.js"></script>
</head>

<body>
    <div id="rooter">
        <div v-if="videoList !== null">
            <ul>
                <li v-for="(item,index) in videoList">
                    <a :href="item[0]" :download="item[1]" v-html="item[1]"></a>
                </li>
            </ul>
        </div>
        <div v-else style="text-align: center;margin-top: 150px;">
            <img src="/images/multiMusic/loading.gif"/>
        </div>
    </div>
<input style="display: none;" title="${bVid}" id="bVid"/>
<input style="display: none;" title="${aid}" id="aid"/>

<a class="fixed" href="/study/bilibliDownload-jar-with-dependencies.jar" download="哔哩哔哩下载工具.jar">哔哩哔哩下载工具</a>
</body>
</html>
