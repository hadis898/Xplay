var flashvars = {
//采用飞驴API upx8.com
    f: 'http://api.flvxz.com/?url=[$pat]&hd=2&ftype=mp4.flv.f4v&xmlformat=ckxml',
    a: request.getParameter('url'),
    s: 2,
    c: 0,
    p: 1,
    my_url: encodeURIComponent(window.location.href)
};
var params = {
    bgcolor: '#FFF',
    allowFullScreen: true,
    allowScriptAccess: 'always',
    wmode: 'opaque'
};
CKobject.embedSWF('ckplayer/ckplayer.swf', 'flashbox', 'ckplayer_a1', '880', '530', flashvars, params);
//开关灯
var box = new LightBox();
var s=function(id){return document.getElementById(id)};
function closelights(){//关灯
	box.Show();
}
function openlights(){//开灯
	box.Close();
}