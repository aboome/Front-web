/**
 * Created by zhan on 2016/11/15.
 */
var YhHttpContent = {
    parameter: '',
    servicekey: '',
    timestamp: '',
    uuid: ''
};
var YhHttp = {
    init: function (code) {
        YhHttpContent.servicekey = code;
        YhHttpContent.parameter = '';
        YhHttpContent.timestamp = '';
        YhHttpContent.uuid = '';
    },
    send: function (msg, method) {
        var paramString = JSON.stringify(msg);
        YhHttpContent.parameter = paramString;
        var sendString = "appMsg=" + JSON.stringify(YhHttpContent);
        var httpUrl = YhHttpConstant.URL;
        $.ajax({
	        type: "post",
	        url: httpUrl,
	        data: sendString,
	        success: function(result) {
	        	var resultObj = JSON.parse(result);
	        	if (resultObj.resultcode == '0000') {
	        		method(result);
	        	} else if(resultObj.resultcode == 'Login-Reset-0000'){
	        		layer.open({
					  	title: '用户状态已失效，请重新登录！',
					  	content: '点击确定跳转到登录页面。',
					  	yes: function(index, layero){
					      	window.location.href = 'login.html';
						}
					});
	        	} else if(resultObj.resultcode == '0001'){
	        		if(resultObj.hasOwnProperty('message')){
	        			yhLayer.yhMsg(resultObj.message, 2, 2000);
	        		} else if(resultObj.parameter.hasOwnProperty('message')){
	        			yhLayer.yhMsg(resultObj.parameter.message, 2, 2000);
	        		} else {
	        			yhLayer.yhMsg('连接服务器超时，请稍后再试...', 2, 2000);
	        		}
	        	} else {
	        		return false;
	        	}
	        }
	    });
    },
    sendLongConnect: function (msg, method) {
        var paramString = JSON.stringify(msg);
        YhHttpContent.parameter = paramString;
        var sendString = "appMsg=" + JSON.stringify(YhHttpContent);
        var httpUrl = YhHttpConstant.URL_LONG_CONNECT;
        $.ajax({
            type: "post",
            url: httpUrl,
            data: sendString,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                if (textStatus == "timeout") { // 请求超时

                } else {

                }
            },
            success: function(result) {
                var resultObj = JSON.parse(result);
                if (resultObj.resultcode == '0000') {
                    method(result);

                } else if(resultObj.resultcode == 'Login-Reset-0000'){
                    layer.open({
                        title: '用户状态已失效，请重新登录！',
                        content: '点击确定跳转到登录页面。',
                        yes: function(index, layero){
                            window.location.href = 'login.html';
                        }
                    });
                } else if(resultObj.resultcode == '0001'){
                    yhLayer.yhMsg(resultObj.message, 2, 1000);
                } else {
                    return false;
                }
            }
        });
    }/*,
    download: function (msg, method) {
        var paramString = JSON.stringify(msg);
        YhHttpContent.parameter = paramString;
        var sendString = "appMsg=" + JSON.stringify(YhHttpContent);
        var httpUrl = YhHttp.DOWN_URL;
        $.post(httpUrl, sendString, method);
    }*/
};

function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}