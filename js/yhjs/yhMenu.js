/**
 * Created by dell on 2016/12/6.
 */
var leftMenuDom = function(num){
    var bridgeNum = '<p class="bridgeNum"><span>桥梁数量总计</span><span id="bridgeNum" class="control-span">'+ num +'</span></p>';
    $('#jsYhBridge').append(bridgeNum);
    var sidebarDiv = '<div class="sidebar-menu"></div>';
    $('#jsYhBridge').append(sidebarDiv);
};

var yhMenu = {
    /* 菜单 */
    init: function(queryParam, code, p, k){
        YhHttp.init(code);
        YhHttp.send(queryParam, function(result){
            var resultObj = JSON.parse(result);
            if(result != null && result != ''){
                var d = resultObj.parameter.list;
                var top = '<ul class="clearfix" id="top"></ul>';
                $('.menu-body').html(top);
                for(var i=0; i<d.length; i++){
                    var li = '<li>'+
                        '<a class="top-a" href="'+ d[i].menuInfoDmo.menuUrl +'" data-id="'+ d[i].menuInfoDmo.id +'"><i class="iconfont '+ d[i].menuInfoDmo.menuIcon +'"></i> '+ d[i].menuInfoDmo.menuName +'</a>'+
                        '</li>';
                    $('#top').append(li);

                    var second = d[i].secondMenuList;
                    var nav = '<nav role="navigation"><ul class="menu-list" id="left"></ul></nav>';
                    $('#sysLeftMenu').html(nav);
                    if(second.length != 0){
                        for(var j=0; j<second.length; j++){
                            var left_li = '<li class="chapter">'+
                                '<a href="'+ second[j].menuInfoDmo.menuUrl +'" data-id="'+ second[j].menuInfoDmo.id +'" class="sensorDeployManage"><i class="iconfont '+ second[j].menuInfoDmo.menuIcon +'"></i> '+ second[j].menuInfoDmo.menuName +'</a>'+
                                '</li>';
                            $('#left').append(left_li);
                        }
                    }
                }
                var userLi = '<li class="dropdown">'+
                    '<a href="javascript:;" class="dropdown-toggle" id="userName" data-toggle="dropdown"><span id="userId"></span> <span class="caret"></span></a>'+
                    '<ul class="dropdown-menu topmenu" role="menu" aria-labelledby="userName">'+
                    '<li role="presentation">'+
                    '<a role="menuitem" tabindex="-1" href="modifyPassword.html">修改密码</a>'+
                    '</li>'+
                    '<li role="presentation">'+
                    '<a role="menuitem" tabindex="-1" href="javascript:;" id="exit">退出</a>'+
                    '</li>'+
                    '</ul>'+
                    '</li>';

                $('#top').append(userLi);
                $('.menu-body a[data-id='+ p +']').addClass("active");
                $('#sysLeftMenu a[data-id='+ k +']').parents('li').addClass("active");
                $("#userId").text($.cookie("userName"));

            } else if(resultObj.resultcode != YhHttpConstant.ResultCode.SUCCESS){
                yhLayer.yhMsg(resultObj.message, 1, 1000);
            } else {
                yhLayer.yhMsg(tips.queryMsg, 0, 1000);
            }
        });
    }
};