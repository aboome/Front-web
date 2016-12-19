/**
 * Created by zhan on 2016/11/17.
 */

var loginData = {
	userName: '',
	userPassword: ''
};

$('#login').on('click', function() {

	if($('#loginInfo').valid()){
		loginData.userName = $('#username').val();
		loginData.userPassword = hex_md5($('#password').val());
		YhHttp.init(YhHttpConstant.ServiceKey.LOGIN);
		YhHttp.send(loginData, loginCallBack);
	}
});

var loginCallBack = function(result) {
	yhLayer.yhLoading();
	if(result != null && result != '') {
		var resultObj = JSON.parse(result);
		if(resultObj.parameter.status == '0000') {
			
			$.cookie('userName', loginData.userName, {
				expires: 7,
				path: '/'
			});
			window.location.href = 'index.html';
			yhLayer.yhCloseLoading();
		} else {
			layer.msg(resultObj.parameter.message);
		}
	} else {
		layer.msg("登录请求服务器异常！");
	}
};

$("body").keydown(function() {
    if (event.keyCode == "13") {//keyCode=13是回车键
        $('#login').trigger('click');
    }
});

/* 控制输入框中图标  */
$('.loginInput input').on({
	focus: function() {
		$(this).parents('.loginInput').find('.icon').css('color', '#36A5FF');
	},
	blur: function() {
		$(this).parents('.loginInput').find('.icon').css('color', '#A8A8A8');
	}
});

$('#forgetPsw').on('click', function(){
	layer.open({
		type: 1,
		title: '忘记密码',
		shadeClose: false,
		area: ['320px', '220px'],
		content: $('#forgetPswInfo'),
		btn: ['确定']
	});
});
