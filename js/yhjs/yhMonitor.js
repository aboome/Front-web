/**
 * Created by dell on 2016/12/6.
 */

var yhMonitor = {
    init: function(initRightContainer) {
        YhHttp.init(YhHttpConstant.ServiceKey.LIST_BRIDGE_AND_GROUP);
        YhHttp.send('', function(result){
            var resultObj = JSON.parse(result);
            if(result != null && result != ''){
                var data = resultObj.parameter.list;
                var dl = data.length;
        		
                if(dl == 0 || resultObj.parameter.count == 0){
                    var bridgeNum = '<p class="bridgeNum"><span>桥梁数量总计</span><span id="bridgeNum" class="control-span">'+ resultObj.parameter.count +'</span></p>';
                    $('#jsYhBridge').append(bridgeNum);
                    return 0;
                }

                var bridgeNum = '<p class="bridgeNum"><span>桥梁数量总计</span><span id="bridgeNum" class="control-span">'+ resultObj.parameter.count +'</span></p>';
                $('#jsYhBridge').append(bridgeNum);
                var sidebarDiv = '<div class="sidebar-menu"></div>';
                $('#jsYhBridge').append(sidebarDiv);
                for(var i=0; i<data.length; i++){
                	var group = '';
                	if(data[i].list != ''){
                		group = '<a href="#yhBridge-'+ i +'" class="nav-header collapsed bridge-manager" data-toggle="collapse">'+ data[i].groupName +'<span class="caret"></span></a>'+
                        '<ul id="yhBridge-'+ i +'" class="nav nav-list collapse bridge-list in"></ul>';
                	}
                    
                    $('#jsYhBridge .sidebar-menu').append(group);
                    var bridgeData = data[i].list;
                    for(var j=0; j<bridgeData.length; j++){
                        var st = '';
                        if(bridgeData[j].status == '00'){
                            st = '<span class="normalStatus">正常</span>';
                        } else if(bridgeData[j].status == '01'){
                            st = '<span class="warnStatus">告警</span>';
                        }

                        var bridges = '<li><a href="javascript:;" class="bridge-a" id="'+ bridgeData[j].id +'"><span class="span-bridge">'+ bridgeData[j].monitorName +'</span><span class="control-span">'+ st +'</span></a></li>';
                        $('#yhBridge-' + i).append(bridges);
                    }
                }

                var bridge = $('.active .span-bridge').text();
                $('#myBridge').html(bridge);

                var bridgeId = getBridge();

                if (null == bridgeId) {
                    $('#jsYhBridge .bridge-a').parents('li:first').addClass('active');
                }else {
                    $('#jsYhBridge .bridge-a').parents('li').removeClass('active');
                    $('#' + bridgeId).parent('li').addClass('active');
                }

                initRightContainer($('.active a').attr('id'));

            } else if(resultObj.resultcode != YhHttpConstant.ResultCode.SUCCESS){
                yhLayer.yhMsg(resultObj.message, 1, 1000);
            } else {
                yhLayer.yhMsg(tips.queryMsg, 0, 1000);
            }
        });
    }
};

var queryAndCountSensorInfoCallback = function(result){
    var resultObj = JSON.parse(result);
    if(result != null && result != ''){
        var d = resultObj.parameter.list;

        if('' == d || null == d){
            $('.status').html('正常');
            $('.sensorCount').html('0');
            $('.card').removeClass('warnStatusBg');
        }

        $('.status').html('正常');
        $('.sensorCount').html('0');
        $('.card').removeClass('warnStatusBg');

        for(var i=0;i< d.length;i++){
            var dt = d[i].dataType;
            var st = '';

            $('div.labelCard>.card').each(function(){
                if($(this).attr('data-type') == dt){
                    $(this).find('span.sensorCount').html(d[i].count);
                    if(d[i].status == '01'){
                        st = '预警';
                        $(this).removeClass('normalStatusBg');
                        $(this).addClass('warnStatusBg');
                    } else if(d[i].status == '00'){
                        st = '正常';
                        $(this).removeClass('warnStatusBg');
                        $(this).addClass('normalStatusBg');
                    }
                    $(this).find('span.status').html(st);
                }
            });
        }
    } else if(resultObj.resultcode != YhHttpConstant.ResultCode.SUCCESS){
        yhLayer.yhMsg(resultObj.message, 1, 1000);
    } else {
        yhLayer.yhMsg(tips.queryMsg, 0, 1000);
    }
};

var getTopic = function() {
    var url = window.location.href;
    var arr = url.split('?');
    var param = arr[1];

    if (null == param) {
        return null;
    }

    var paramArray = param.split('&');
    return paramArray[1];
};

var getPoint = function() {
    var url = window.location.href;
    var arr = url.split('?');
    var param = arr[1];

    if (null == param) {
        return null;
    }

    var paramArray = param.split('&');
    return paramArray[2];
};

var getBridge = function() {
    var url = window.location.href;
    var arr = url.split('?');
    var param = arr[1];

    if (null == param) {
        return null;
    }

    var paramArray = param.split('&');
    return paramArray[0];
};
