/**
 * Created by lg on 15/5/15.
 */
var Util = (function(){
    var setButton = function($mc){
        var mc = $mc;
        mc.mouseEnabled = true;
        mc.mouseChildren = false;

        //开启 舞台的鼠标over out 状态
        var _stage = mc.getStage();
        _stage .enableMouseOver(20);
        mc.addEventListener("rollover",rollover);
        console.log(mc.timeline.duration);
        function rollover(){
            playTo(mc,mc.timeline.duration);
        }
        mc.addEventListener("rollout",function(){
            playTo(mc,1);
        })
    }

    var playTo = function(mc,frame,attribute){
        var _curFrame = mc.currentFrame;
        var fr = -1;
        if(attribute){
            var _onComplete = attribute.onComplete || null;
            var _onUpdate = attribute.onUpdate || null;
        }
        if(typeof frame == "number"){
            fr = frame ;
        }else{
            fr = labelToFrame(mc,frame);
        }
        if(fr >= 0){
            var _t = Math.abs(fr-_curFrame)/30;
            if(_curFrame != fr){
                to(mc,_t,{currentFrame:fr,onUpdate:function(){
                    mc.gotoAndStop(mc.currentFrame);
                    if(_onUpdate){
                        _onUpdate({curFrame:mc.currentFrame,target:mc});
                    }
                },onComplete:function(){
                    if(_onComplete){
                        _onComplete({curFrame:mc.currentFrame,target:mc});
                    }
                }});
            }
        }
    }
    var addFrameEvent = function(mc,frame,handle){
        var fr = -1;
        if(typeof frame == "number"){
            fr = frame ;
        }else{
            fr = labelToFrame(mc,frame);
        }
        if(fr >= 0){
            mc.timeline.addTween(createjs.Tween.get(mc).wait(fr).call(handle));
        }
    }
    var labelToFrame = function(mc,label){
        var labels = mc.timeline.getLabels(label);
        if(labels .length>0){
            var frame = -1;
            var len = labels .length;
            for (var i =0;i<len;i++) {
                if(labels[i].label == label){
                    frame = labels[i].position;
                    console.log(frame);
                }
            }

        }
        return frame;
    }

    var to = function(target,duration ,attribute) {
        // body...
        var thisTarget = target;
        var delay = attribute.dalay || 0;
        var onCompleteHandle = attribute.onComplete || null;
        var onUpdateHandle = attribute.onUpdate || null;

        createjs.Tween.get(target,{onChange:onChangeHandle,override:true}).wait(delay).to(attribute,duration*1000).call(handleComplete);
        function handleComplete (argument) {
            // body...
            if(onCompleteHandle){
                onCompleteHandle();
            }
        }
        function  onChangeHandle (e) {
            // body...
            if(onUpdateHandle){
                onUpdateHandle(e);
            }

        }
    }
    return {setButton:setButton,
            playTo:playTo,
            to:to,
            labelToFrame:labelToFrame,
            addFrameEvent:addFrameEvent
            }

})(createjs = createjs||{});
var createjs;


var SystemUtil = (function(){
    var getuaBrowser = function(){
        var ua = navigator.userAgent.toLowerCase();

        // Useragent RegExp
        var rwebkit = /(webkit)[ \/]([\w.]+)/;
        var ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
        var rmsie = /(msie) ([\w.]+)/;
        var rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

        var match = rwebkit.exec( ua ) ||
            ropera.exec( ua ) ||
            rmsie.exec( ua ) ||
            ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
            [];

        return { browser: match[1] || "", version: match[2] || "0" };
    }

    var getuaPlatform = function(){
        var ua = navigator.userAgent.toLowerCase();

        // Useragent RegExp
        var rplatform = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/;
        var rtablet = /(ipad|playbook)/;
        var randroid = /(android)/;
        var rmobile = /(mobile)/;

        var platform = rplatform.exec( ua ) || [];
        var tablet = rtablet.exec( ua ) ||
            !rmobile.exec( ua ) && randroid.exec( ua ) ||
            [];

        if(platform[1]) {
            platform[1] = platform[1].replace(/\s/g, "_"); // Change whitespace to underscore. Enables dot notation.
        }

        return { platform: platform[1] || "", tablet: tablet[1] || "" };
    }
    return {getBrower:getuaBrowser,
            getPlatform:getuaPlatform
            }
})();

var StringTools = (function(){
    //是否为手机号码
    var isMobile = function(str){
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if(myreg.test(str)) { return true;}
        return false;
    }
    //是否为电子邮箱
    var isEmail = function(str){
        var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        if(emailReg.test(str)){return true;}
        return false;
    }
    //是否为电话号码
    var isPhone = function(strPhone) {
        var phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,10}$/;
        var phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/;
        var prompt = "您输入的电话号码不正确!"
        if( strPhone.length > 9 ) {
            if( phoneRegWithArea.test(strPhone) ){
                return true;
            }else{
                //alert( prompt );
                return false;
            }
        }else {
            if (phoneRegNoArea.test(strPhone)) {
                return true;
            } else {
                return false;
            }
        }
    }
    /*
     是否为数字
     */
    var isNumber = function(str){
        var re = new RegExp("^[0-9]+$");
        if (str.search(re) != -1) { return true;}
        return false;
    }
    /*
     str是否为空
     */
    var isNull = function(str){
        var regu = new RegExp("^[ ]+$");
        return regu.test(str);
    }
    /*
     *JavaScript精确获取字符串长度，使用str.match匹配相关正则内容，
     * 字符串区分中英文，一个中文2个字节,英文一个
     */
    var getStrLength = function(str){
        var cArr = str.match(/[^\x00-\xff]/ig);
        return str.length + (cArr == null ? 0 : cArr.length);
    }

    /*
     获取链接的查询字符串，如：var link = "http:baidu.com?id=121&cid=1";
     getUrlVars(link).id;
     getUrlVars(link).cid;
     *
     * */
    var getUrlVars = function(url) {
        var vars = [],hash;

        var hashes = url.slice(url.indexOf('?') + 1).split('&');
        //var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    var getDomain = function(url){
        var str = url.slice(url.indexOf('?'))[0];
    }

    return {isMobile:isMobile,
        isEmail:isEmail,
        isPhone:isPhone,
        isNumber:isNumber,
        isNull:isNull,
        getUrlVars:getUrlVars,
        getStrLength:getStrLength
    }


})();

var GArrayUtil = (function(){
    var removeFromArray = function(arr, obj)  {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == obj) {
                arr.splice(i, 1);
                return i;
            }
        }
        return -1;
    }

    var getRandomArr = function (_rang, _max){
        var tempArr = [];
        while (tempArr.length < _rang) {
            var tempNum  = Math.random() * _max;
            if (!arrayContainsValue(tempArr, tempNum)) {
                tempArr.push(tempNum);
            }
        }
        return tempArr;
    }
    var arrayContainsValue = function (arr, value){
        return (arr.indexOf(value) != -1);
    }
    var shuffle = function(inputArray) {
        var cf = function(){
            var r = Math.random() - 0.5;
            if (r < 0) {
                return -1;
            } else {
                return 1;
            }
        };
        var resultArray = cloneArray(inputArray);
        resultArray.sort(cf);

        return resultArray;
    }
    var cloneArray = function(inputArray){
        return inputArray.slice();
    }
    return{
        removeFromArray:removeFromArray,
        arrayContainsValue:arrayContainsValue,
        cloneArray:cloneArray
    }
})();