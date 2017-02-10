/**
 * Created by cz on 2016/10/20.
 */
$(document).ready(function(){
    document.body.style.zoom=scale;
    var html=document.getElementsByTagName("html")[0];
    var width=document.documentElement.clientWidth;
    var scale = width*100/750;
    html.style.fontSize=scale + "px";
    $("body").css({display:"block"});

});
$(window).resize(function(){
    document.body.style.zoom=scale;
    var html=document.getElementsByTagName("html")[0];
    var width=document.documentElement.clientWidth;
    var scale = width*100/750;
    html.style.fontSize=scale + "px";
    $("body").css({display:"block"});
});
$(function () {
    //判断是否微信登陆
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
    if(isWeiXin()){
        $(".ewma").show();
    }else{
        $(".ewma").hide();
    }
    var jiuyeg=$(".outer");
    var jiuyez=$(".inner");
    var gaoS=0;
    jiuyez[0].innerHTML+=jiuyez[0].innerHTML;
    setInterval(gao,16);
    function gao(){
        gaoS++;
        jiuyeg.scrollTop(gaoS);
        if (jiuyeg.scrollTop()>jiuyez.height()/2) {
            gaoS=0;
        }
    }
    var flag=true;
    $(".ewma").click(function (e) {
        if(flag) {
            $(".ewm").css("display", "block").animate({"opacity": 1, "right": '1.7rem'}, 200);
            flag = false;
        }else {
            $(".ewm").animate({"opacity":0,"right":'0.1rem'},200,function () {
                $(".ewm").css("display","none")
            });
            flag=true;
        }
    });
    $("#wrap").click(function () {
        if(flag==false){
            $(".ewm").animate({"opacity":0,"right":'0.1rem'},200,function () {
                $(".ewm").css("display","none")
            });
            flag=true;
        }
    });
})