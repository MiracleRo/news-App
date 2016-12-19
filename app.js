/**
 * Created by admin on 2016/12/16.
 */
var getNews = function(){
  //首页新闻
  this.getFirstPage = function () {
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
      success: function (data) {
        for (var i = 0 ; i<data.newslist.length; i++){
          putNews(data.newslist[i]);
        }
      },
      error: function (err) {
        console.log(err)
      }
    });
  };
  //奇闻新闻
  this.getStoryNews = function () {
    $.ajax({
      url:'http://apis.baidu.com/txapi/qiwen/qiwen',
      type:"GET",
      data:{
        'num':10,
        'page':1
      },
      headers:{
        'apikey':'eb564ae4c97116638a9e38365d83ec3c'
      },
      success:function(data){
        for (var i = 0 ; i<data.newslist.length; i++){
          putNews(data.newslist[i]);
        }
      },
      error:function(err){
        console.log(err)
      }
    });
  };
  //体育新闻
  this.getSportNews = function () {
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
      success: function (data) {
        for (var i = 0 ; i<data.newslist.length; i++){
          putNews(data.newslist[i]);
        }
      },
      error: function (err) {
        console.log(err)
      }
    });
  };
  //科技新闻
  this.getTechnology = function () {
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
      success: function (data) {
        console.log(data);
      },
      error: function (err) {
        console.log(err)
      }
    });
  };
  //娱乐新闻
  this.getAmusement = function () {
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
      success: function (data) {
        console.log(data);
      },
      error: function (err) {
        console.log(err)
      }
    });
  };
  //国际新闻
  this.getInter = function () {
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
      success: function (data) {
        console.log(data);
      },
      error: function (err) {
        console.log(err)
      }
    });
  };
  //苹果新闻
  this.getApple = function () {
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
      success: function (data) {
        console.log(data);
      },
      error: function (err) {
        console.log(err)
      }
    });
  };
  //生活与健康新闻
  this.getHealth = function () {
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
      success: function (data) {
        console.log(data);
      },
      error: function (err) {
        console.log(err)
      }
    });
  };
};
function putNews(data){
    if(data.picUrl==''){
      data.picUrl='img/nopic.png';
      console.log(data.picUrl);
    }
  console.log(data.picUrl);
    var new_div = document.createElement('div');
    new_div.innerHTML='<div class="news-con"><div class="pic_div"><img class="new_pic" src='+data.picUrl+'/></div><div class="news_title">'+data.title+'</div><span class="new_description">'+data.description+'</span></div>'
   document.body.appendChild(new_div);
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
wechat.onclick = newsApp.getFirstPage;
story.onclick = newsApp.getStoryNews;
sport.onclick = newsApp.getSportNews;
technology.onclick = newsApp.getTechnology;
amusement.onclick = newsApp.getAmusement;
inter.onclick = newsApp.getInter;
apple.onclick = newsApp.getApple;
health.onclick = newsApp.getHealth;


