var flashvars = {
//���÷�¿API upx8.com
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
//���ص�
var box = new LightBox();
var s=function(id){return document.getElementById(id)};
function closelights(){//�ص�
	box.Show();
}
function openlights(){//����
	box.Close();
}