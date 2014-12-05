//微信分享
var DOM_title = document.getElementsByTagName("title")[0].text,
	DOM_meta = document.getElementsByTagName("meta"),
	DOM_des;
for(var i=0;i<DOM_meta.length;i++){
	if(DOM_meta[i].getAttribute("name") === "description"){
		DOM_des = DOM_meta[i].getAttribute("content");
	}
}
function _shareFriend(){WeixinJSBridge.invoke("sendAppMessage",{appid:sharePar.appid,img_url:sharePar.img,img_width:sharePar.width,img_height:sharePar.height,link:sharePar.url,desc:sharePar.des,title:sharePar.title},function(res){_report("send_msg",res.err_msg)})}function _shareTimeline(){WeixinJSBridge.invoke("shareTimeline",{appid:sharePar.appid,img_url:sharePar.img,img_width:sharePar.width,img_height:sharePar.height,link:sharePar.url,desc:sharePar.des,title:sharePar.title},function(res){_report("timeline",res.err_msg)})}function _shareWeibo(){WeixinJSBridge.invoke("shareWeibo",{content:sharePar.des,url:sharePar.url},function(res){_report("weibo",res.err_msg)})}document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.on("menu:share:appmessage",function(){_shareFriend()}),WeixinJSBridge.on("menu:share:timeline",function(){_shareTimeline()}),WeixinJSBridge.on("menu:share:weibo",function(){_shareWeibo()})},!1);
var sharePar = {
	title: DOM_title,
	des: DOM_des,
	url: window.location.href,
	img: 'http://www.non-code.com/assets/img/icons/wechat-share-icon.png',
	width: 100,
	height: 100,
	appid: ''
}

$(function(){
	var ua 			= 	window.navigator.userAgent.toLowerCase(),
		$html 		= 	$("html");
	//检测设备
	if(ua.indexOf("mobile") !== -1){
		$html.addClass("mobile");	//移动设备
		if(ua.indexOf("micromessenger") !== -1){
			$html.addClass("wechat");	//微信
		}
	}
});
//控制台显示
console.log("NonCode \n The words of the future.")
//百度统计
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Febeef678abc771e049ee79f9644b1532' type='text/javascript'%3E%3C/script%3E"));