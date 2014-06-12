// JavaScript Document 
//加入收藏
function fav(){
        var url = "http://blog.upx8.com/app/play/";
        var title = "yongweif";   
        if (window.sidebar) { // Mozilla Firefox Bookmark
		 try{
			    window.sidebar.addPanel(title, url,"");
			   }catch(e){
			   alert('添加收藏失败！请按 Ctrl + D  添加收藏');
			  }	
        }
		else if( window.external ) { // IE Favorite
		   try{
			    window.external.addFavorite( url, title);
			   }catch(e){
			   alert('添加收藏失败！请按 Ctrl + D  添加收藏');
			  }
        } else if(window.opera) { // Opera 7+
                return false; // do nothing
        } else { 
                 alert('添加收藏失败！请按 Ctrl + D  添加收藏');
        }
}
//end 
//主页播放按钮函数 和 输入框
function play(){
	var url = document.getElementById('url').value;
	if(checkUrl(url)){
		parent.window.location.href='play.html?url='+url;
	}
}

function checkUrl(url){
	var reg = "[a-zA-z]+://[^s]*";
    var p = new RegExp(reg);
	if(p.test(url)){
		return true;
	}else{
	  alert('请输入正确的视频连接！');	
	}
}
function playAgain(){
	var url = document.getElementById('urlInt').value;
    if(checkUrl(url)){
		window.location.href='play.html?url='+url;
	}
}

function cleanVal(){
	if(document.getElementById('url')!=null)document.getElementById('url').value="";
	
	}
function cleanVal1(){
	document.getElementById('urlInt').value="";
	}
//end 
//html 获取参数
var request = {
	getParameter:function(val){
		var uri = window.location.search;
        var re = new RegExp("" +val+ "=([^&?]*)", "ig");
        return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null);
		}
};
//重写播放页的iframe中的url
function initPlayerIframeSrc(id){
	document.getElementById(id).src = document.getElementById(id).src+"?url="+request.getParameter('url');
}
function setVal(){
	if(document.getElementById('url')!=null)
	 if(document.getElementById('url').value==""){
		 document.getElementById('url').value="请在此输入视频链接，然后点击播放按钮"
	}
}
function setVal1(){
	if(document.getElementById('urlInt')!=null)
	 if(document.getElementById('urlInt').value==""){
		 document.getElementById('urlInt').value="请在此输入视频链接，然后点击播放按钮"
	}
}