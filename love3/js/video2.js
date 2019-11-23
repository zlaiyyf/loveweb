var ring = new Audio("http://dct-test.oss-cn-beijing.aliyuncs.com/milu/ring.mp3");
ring.loop = true;

var bgsound =  new Audio("http://dct-test.oss-cn-beijing.aliyuncs.com/milu/bg.mp3");
bgsound.loop = true;


var isandroid = SystemUtil. getPlatform().platform == "android";
var isvidEnd = false;


if(isandroid){
    //android 设备的时候，需要判断
    cache.getItem("vidEnd", function(e){
            console.log("getItem-->",e);
            if(e && e == "1"){
                //已经看过视频,显示最后页面并重置离线数据
                console.log("vidEnd 1-->",e);
                isvidEnd = 1;
                showPage4();
            }else{
                //未看过视频
                console.log("vidEnd 2-->",e);
                isvidEnd = 0;
                $(".page1").addClass("on");
                ring.play();
            }
        }, function(){
            isvidEnd = 0;
            console.log("获取catche失败");
            //第一次玩游戏,设置一下 cache
            $(".page1").addClass("on");
            ring.play();
        }
    );
}else{
    $(".page1").addClass("on");
    ring.play();
}


//andriod 设备时设置离线 数据
function setCache(){
    console.log("duocai_vidEnd setCache-->");
    cache.setItem("vidEnd",1,function(){
        //showPage4();
    }, function () {
        console.log("fail to setItem");
    });
}
//重置 离线
function resetCache(){
    cache.setItem("vidEnd",0,function(){
        //showPage4();
    }, function () {
        console.log("fail to setItem");
    });
}



var video = document.getElementById("mid");
$(".stopVid").addClass("on");
$(".playVid").removeClass("on");



//1元活动的按钮链接：
$(".p41_btn01").on("click",gotolink);
$(".p43_pic03").on("click",gotolink);
function gotolink(){
    window.open('http://www.duocaitou.com/wxserv/static/pages/detail.html?project_id=100865');
}

$(window).on("resize",resized);
var _h = 0;
function resized(){
    var _w = $(window).width();
    _h = $(window).height();

    var _scale = _h/1136;
    var _left = (640-640*_scale)/2;
    $(".holder").css({"height":_h});
    $(".page4").css({"height":_h});
    $(".scpage").css({"zoom":_scale,"left":_left});
    $(".p41_shareBtn").css({"zoom":_scale,"right":0});
    $(".p41_pix01").css({"zoom":_scale,"bottom":0});
    $(".scpage2").css({"zoom":_scale,"left": (640-600*_scale)/2,"top":(_h-854*_scale)/2});
    $(".scpage3").css({"zoom":_scale,"left": (640-600*_scale)/2,"top":(_h-898*_scale)/2});
}
var p4Cid = 0;
var islock = false;
$(function(){
    resized();

    addPage();
})

function changePage(){
    islock = false;
    $(".page").removeClass("current");
    $($(".page")[p4Cid]).addClass("current");
    //alert(islock);
}

//拖拽功能
var n = 0;
var _currentTime=0;


function hiddenPage1(){
    ring.pause();
    $(".vid").addClass("on");
    $(".page1").css({"opacity":"0","visibility": "hidden",'transition':'opacity .8s ease-out'});
    setTimeout(start,800);
}


//var set;

//视频暂停
$(".stopVid").on("click",pauseVid);
$(".playVid").on("click",goonVid);

function goonVid(){
    $(".playVid").removeClass("on");
    $(".stopVid").addClass("on");
    video.currentTime = _currentTime;
    video.play();
}
function pauseVid(){
    $(".stopVid").removeClass("on");
    $(".playVid").addClass("on");
    _currentTime = video.currentTime;
    video.pause();


    videoEnd();
}

function start(){
    ring.pause();
    $(".vidImg").css({"display":'none'});
    video.currentTime = 1;
    video.play();

    video.addEventListener("ended",videoEnd);

    //videoEnd();
}

function videoEnd(){
    $(".page2").addClass("on");
    $(".vid").css({"opacity":"0",'transition':'opacity .5s ease-out'});
    video.pause();
    setTimeout(showPage4,2500);
}

function addPage(){
    $("#page4").swipe({
        triggerOnTouchEnd: true,
        swipeStatus: function (event, phase, direction, distance, duration, fingerCount) {
            if(phase == "end"){
                //$(App).trigger({type:'page-scroll',phase:phase,direction:direction,distance:distance});
                if(direction == "up" || direction == "down"){
                    if(islock)return;
                    islock = true;
                    _dir = direction == "up"?1:-1;
                    p4Cid += _dir;
                    p4Cid = Math.max(0,Math.min(p4Cid,2));
                    var _y = -p4Cid * _h;

                    $(".page4").css({"transform": "matrix(1, 0, 0, 1, 0, "+_y+")",'transition':'all .6s ease-out'});
                    //$(".page4").css({"margin-top": _y,'transition':'all .8s ease-out'});
                    //alert(_y+"-"+p4Cid);
                    setTimeout(changePage,600);
                }
            }

        }
    })
}
function showPage4(){
    //resetCache();
    if(isandroid){
        //android 设置离线，并重新加载
        if( isvidEnd == 1){
            p4Cid = 0;
            bgsound.play();
            $(".page4").addClass("on");
            $(".page").removeClass("current");
            $($(".page")[p4Cid]).addClass("current");
            $(".page2").removeClass("on");
            resetCache();

        }else{
            setCache();
            location.reload();
        }
    }else{
        bgsound.play();
        $(".page4").addClass("on");
        $(".page").removeClass("current");
        $($(".page")[p4Cid]).addClass("current");
        $(".page2").removeClass("on");

    }
}
addPage();

var drag = Draggable.create($("#drag_bar"), {type:"x", edgeResistance:0.5, throwProps:true, bounds:$("#drag_box"),
    onDrag:onDragHandle,onDragEnd:onDragEnd});
function  onDragHandle() {
    var per = this.x /this.maxX;
    console.log(per);
    var _alpha = 1-per*1.6;
    $("#canvas").css({"opacity":_alpha});
}
function onDragEnd(ev){
    var per = this.x /this.maxX;
    console.log(ev,per);
    if(per>=.45){
        $("#drag_bar").css({"transform":"matrix(1, 0, 0, 1, "+_dragDistance.maxX+",0)",'transition':'opacity .3s ease-out'});
        setTimeout(hiddenPage1,300);
        //TweenMax.to(_dragDistance.target,.3, {x:_dragDistance.maxX,ease:Cubic.easeInOut,onComplete:hiddenPage1});
    }else{
        $("#drag_bar").css({"transform":"matrix(1, 0, 0, 1, 0,0)",'transition':'opacity .3s ease-out'});
        $("#canvas").css({"opacity":1});
    }
}

var _dragDistance = drag[0];
_dragDistance.enable();

