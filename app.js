/**
 * Created by admin on 2016/12/16.
 */
var getNews = function() {
    //首页新闻
    this.channle = 'fisrtpage';
    this.getFirstPage = function() {
        $.ajax({
            url: 'http://apis.baidu.com/txapi/weixin/wxhot',
            type: "GET",
            data: {
                'num': 10,
                'page': 1
            },
            headers: {
                'apikey': 'eb564ae4c97116638a9e38365d83ec3c'
            },
            success: function(data) {
                for (var i = 0; i < data.newslist.length; i++) {
                    putNews(data.newslist[i]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //奇闻新闻
    this.getStoryNews = function() {
        $.ajax({
            url: 'http://apis.baidu.com/txapi/qiwen/qiwen',
            type: "GET",
            data: {
                'num': 10,
                'page': 1
            },
            headers: {
                'apikey': 'eb564ae4c97116638a9e38365d83ec3c'
            },
            success: function(data) {
                for (var i = 0; i < data.newslist.length; i++) {
                    putNews(data.newslist[i]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //体育新闻
    this.getSportNews = function() {
        $.ajax({
            url: 'http://apis.baidu.com/txapi/tiyu/tiyu',
            type: "GET",
            data: {
                'num': 10,
                'page': 1,
            },
            headers: {
                'apikey': 'eb564ae4c97116638a9e38365d83ec3c'
            },
            success: function(data) {
                for (var i = 0; i < data.newslist.length; i++) {
                    putNews(data.newslist[i]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //科技新闻
    this.getTechnology = function() {
        $.ajax({
            url: 'http://apis.baidu.com/txapi/keji/keji',
            type: "GET",
            data: {
                'num': 10,
                'page': 1,
            },
            headers: {
                'apikey': 'eb564ae4c97116638a9e38365d83ec3c'
            },
            success: function(data) {
                for (var i = 0; i < data.newslist.length; i++) {
                    putNews(data.newslist[i]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //娱乐新闻
    this.getAmusement = function() {
        $.ajax({
            url: 'http://apis.baidu.com/txapi/huabian/newtop',
            type: "GET",
            data: {
                'num': 10,
                'page': 1,
            },
            headers: {
                'apikey': 'eb564ae4c97116638a9e38365d83ec3c'
            },
            success: function(data) {
                for (var i = 0; i < data.newslist.length; i++) {
                    putNews(data.newslist[i]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //国际新闻
    this.getInter = function() {
        $.ajax({
            url: 'http://apis.baidu.com/txapi/world/world',
            type: "GET",
            data: {
                'num': 10,
                'page': 1,
            },
            headers: {
                'apikey': 'eb564ae4c97116638a9e38365d83ec3c'
            },
            success: function(data) {
                for (var i = 0; i < data.newslist.length; i++) {
                    putNews(data.newslist[i]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //苹果新闻
    this.getApple = function() {
        $.ajax({
            url: 'http://apis.baidu.com/txapi/apple/apple',
            type: "GET",
            data: {
                'num': 10,
                'page': 1,
            },
            headers: {
                'apikey': 'eb564ae4c97116638a9e38365d83ec3c'
            },
            success: function(data) {
                for (var i = 0; i < data.newslist.length; i++) {
                    putNews(data.newslist[i]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //生活与健康新闻
    this.getHealth = function() {
        $.ajax({
            url: 'http://apis.baidu.com/txapi/health/health',
            type: "GET",
            data: {
                'num': 10,
                'page': 1,
            },
            headers: {
                'apikey': 'eb564ae4c97116638a9e38365d83ec3c'
            },
            success: function(data) {
                for (var i = 0; i < data.newslist.length; i++) {
                    putNews(data.newslist[i]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
};

function putNews(data) {
    if (data.picUrl == '') {
        data.picUrl = 'img/nopic.jpg';
    }
    var news_link = document.createElement('a');
    news_link.setAttribute('href', data.url);
    news_link.className = 'link-news';
    var news_content = document.getElementById('news_content');
    news_link.innerHTML = '<div class="news-div"><div class="news-con">' +
        '<div class="pic-div"><img class="news-pic" src=' + data.picUrl + '/></div>' +
        '<div class="news-title">' + data.title + '</div><span class="news-description">' + data.description + '</span><div class="news-del"><img src="img/delete.png"></div></div></div>'
    news_content.appendChild(news_link);
    var news_img = document.getElementsByTagName('img');
    for (var i = 0; i < news_img.length; i++) {
        news_img[i].onerror = function() {
            this.src = 'img/nopic.jpg'
        }
    }
}
var newsApp = new getNews();
var wechat = document.getElementById('wechat');
var story = document.getElementById('story');
var sport = document.getElementById('sport');
var technology = document.getElementById('technology');
var inter = document.getElementById('inter');
var apple = document.getElementById('apple');
var health = document.getElementById('health');
var amusement = document.getElementById('amusement');
// wechat.onclick = newsApp.getFirstPage;
// story.onclick = newsApp.getStoryNews;
// sport.onclick = newsApp.getSportNews;
// technology.onclick = newsApp.getTechnology;
// amusement.onclick = newsApp.getAmusement;
// inter.onclick = newsApp.getInter;
// apple.onclick = newsApp.getApple;
// health.onclick = newsApp.getHealth;
