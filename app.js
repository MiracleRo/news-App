/**
 * Created by admin on 2016/12/16.
 */
var channles = ['news_content', 'amusement_news', "sport_news", "technology_news",
    "inter_news", "story_news", "health_news", "apple_news"
]
var num = 0;
var getNews = function() {
    //首页新闻
    this.getFirstPage = function() {
        num = 0;
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
                    putNews(data.newslist[i], channles[num]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //娱乐新闻
    this.getAmusement = function() {
        num = 1
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
                    putNews(data.newslist[i], channles[num]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //体育新闻
    this.getSportNews = function() {
        num = 2;
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
                    putNews(data.newslist[i], channles[num]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //科技新闻
    this.getTechnology = function() {
        num = 3;
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
                    putNews(data.newslist[i], channles[num]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //国际新闻
    this.getInter = function() {
        num = 4;
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
                    putNews(data.newslist[i], channles[num]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //奇闻新闻
    this.getStoryNews = function() {
        num = 5;
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
                    putNews(data.newslist[i], channles[num]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //生活与健康新闻
    this.getHealth = function() {
        num = 6;
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
                    putNews(data.newslist[i], channles[num]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
    //苹果新闻
    this.getApple = function() {
        num = 7;
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
                    putNews(data.newslist[i], channles[num]);
                }
            },
            error: function(err) {
                console.log(err)
            }
        });
    };
};

function putNews(data, channle) {
    var news_content = document.getElementById(channle);
    if (data.picUrl == '') {
        data.picUrl = 'img/nopic.jpg';
    }
    var news_link = document.createElement('a');
    news_link.setAttribute('href', data.url);
    news_link.className = 'link-news';
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
window.onload = newsApp.getFirstPage;
$(document).on("pagebeforeshow", "#main", function() {
    $('#main').innerHTML = '';
    return newsApp.getFirstPage();
});
$(document).on("pagebeforeshow", "#main2", function() {
    $('#main2').innerHTML = '';
    return newsApp.getAmusement();
});
$(document).on("pagebeforeshow", "#main3", function() {
    $('#main3').innerHTML = '';
    return newsApp.getSportNews();
});
$(document).on("pagebeforeshow", "#main4", function() {
    $('#main4').innerHTML = '';
    return newsApp.getTechnology();
});
$(document).on("pagebeforeshow", "#main5", function() {
    $('#main5').innerHTML = '';
    return newsApp.getInter();
});
$(document).on("pagebeforeshow", "#main6", function() {
    $('#main6').innerHTML = '';
    return newsApp.getStoryNews();
});
$(document).on("pagebeforeshow", "#main7", function() {
    $('#main7').innerHTML = '';
    return newsApp.getHealth();
});
$(document).on("pagebeforeshow", "#main8", function() {
    $('#main8').innerHTML = '';
    return newsApp.getApple();
});
