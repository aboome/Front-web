/**
 * Created by zhan on 2016/11/15.
 */

var tips = {
	queryMsg: '查询失败，请稍后再试...',
	addMsg: '新增失败，请稍后再试...',
	updateMsg: '修改失败，请稍后再试...',
	deleteMsg: '删除失败，请稍后再试...'
};

var yhPage = {
    queryTable : function(queryParam, code) {
        YhHttp.init(code);
        YhHttp.send(queryParam, queryCallback);
    },
    addLayer : function(title, code, preAddLayer) {

        if (preAddLayer != null) {
            preAddLayer();
        }
        $('#addForm label.error').remove();
        layer.open({
            type: 1,
            title: '增加' + title,
            area: 'auto',
            maxWidth: '450px',
            shadeClose: false,
            content: $('#addLayer'),
            btn: ['确定','取消'],
            yes: function(index, layero){

                if(!$('#addForm').valid()) {
                    return 0;
                }

                // 组装Form表单
                var addFormData = {};

                // 循环页面form list，组装key-value [每个表单标签上自定义一个data-addKey，获取data-addKey。]
                $('.yh-addInput').each(function(){
                    var key = $(this).attr('data-addKey');
                    var value = $(this).val();
                    addFormData[key] = value;
                });
                console.log(addFormData);

                // 发送ajax到后台
                YhHttp.init(code);
                YhHttp.send(addFormData, addCallback);
            },btn2: function(index, layero){
                layer.msg('您已经取消了新增', {
                    time: 2000, //1s后自动关闭
                    btn: ['知道了']
                })
            }
        });
    },
    modifyLayer : function(title, code, preModifyLayer) {

        if (preModifyLayer != null) {
            preModifyLayer();
        }
        $('#modifyForm label.error').remove();
        layer.open({
            type: 1,
            title: '修改' + title,
            area: 'auto',
            maxWidth: '500px',
            shadeClose: false,
            content: $('#modifyLayer'),
            btn: ['确定','取消'],
            yes: function(index, layero){
                if(!$('#modifyForm').valid()) {
                    return 0;
                }
                // 组装Form表单
                var modifyFromData = {};

                // 循环页面form list，组装key-value [每个表单标签上自定义一个data-key，获取data-key的值。]
                $('.yh-input').each(function(){
                    var key = $(this).attr('data-key');
                    var value = $(this).val();
                    modifyFromData[key] = value;
                });
                console.log(modifyFromData);

                // 发送ajax到后台
                YhHttp.init(code);
                YhHttp.send(modifyFromData, updateCallback);
                layer.close(index);
            },btn2: function(index, layero){
                layer.msg('您已经取消了修改', {
                    time: 2000, //1s后自动关闭
                    btn: ['知道了']
                })
            }
        });
    },
    deleteLayer : function(title, deleteParam, code) {
        layer.open({
            type: 1,
            title: '删除' + title,
            area: ['320px', '140px'],
            shadeClose: false,
            content: $('#deleteLayer'),
            btn: ['确定','取消'],
            yes: function(index, layero){
                YhHttp.init(code);
                YhHttp.send(deleteParam, function(result){
					yhLayer.yhLoading();
					var resultObj = JSON.parse(result);
					if(null != result && '' != result){
						yhLayer.yhMsg(resultObj.parameter.message, 1, 1000);
					} else if(resultObj.resultcode != YhHttpConstant.ResultCode.SUCCESS){
						yhLayer.yhMsg(resultObj.message, 2, 1000);
					} else {
				        yhLayer.yhMsg(tips.deleteMsg, 0 ,1000);
					}
				});
            }
        });
    },
    detailLayer : function(title) {
        layer.open({
            type: 1,
            title: title + '详情',
            area: ['400px', '400px'],
            shadeClose: false,
            content: $('#showDetails'),
            btn: ['确定'],
            yes: function(index, layero){
                layer.close(index);
            }
        });
    },
    formatter : function() {
        $(".memberType").each(function() {
            $(this).text(yhEnum.memberType[$(this).text()]);
        });
        
        $('.dataType').each(function(){
        	$(this).text(yhEnum.dataType[$(this).text()].name);
        });
        $('.equipmentType').each(function(){
            $(this).text(yhEnum.equipmentType[$(this).text()]);
        });
        
        $('.status').each(function(){
        	$(this).text(yhEnum.sensorStatus[$(this).text()]);
        });
        
        $('.noticeType').each(function(){
        	$(this).text(yhEnum.noticeType[$(this).text()]);
        });
        
        $('.warningLevel').each(function(){
        	$(this).text(yhEnum.warningLevel[$(this).text()]);
        });
        
        $('.sensorStatus').each(function(){
        	$(this).text(yhEnum.sensorStatus[$(this).text()]);
        });
        
        $('.warnSetStatus').each(function(){
        	$(this).text(yhEnum.warnSetStatus[$(this).text()]);
        });
        
        $('.warnRule').each(function(){
        	$(this).text(yhEnum.warnRule[$(this).text()]);
        });
        
        $('.reportStatus').each(function(){
        	$(this).text(yhEnum.reportStatus[$(this).text()]);
        });

        $('.time').each(function(){
            if($(this).text()!=''){
                var time = new Date(parseInt($(this).text(),10)).Format("yyyy-MM-dd hh:mm:ss");
                $(this).text(time);
            }else {
                $(this).text('');
            }
        });
    },
    yhPagination : function(pageSize, pageNum, totalCount, listCountArray, pageEventHandler){
        $('#pagination-container').pagination({
            dataSource: listCountArray,
            totalNumber: totalCount,
            pageSize: pageSize,
            pageNumber: pageNum,
            autoHidePrevious: true,
            autoHideNext: true,
            showNavigator: true,
            formatNavigator: '第 <span style="color: #7EB23A;"><%= currentPage %></span> 页，共 <%= totalPage %> 页，共 <%= totalNumber %> 条数据',
            alias: {
                pageNumber: 'pageNum',
                pageSize: 'pageSize'
            },
            callback: function(){

            }
        });

        $(".paginationjs-page").click(function () {
            var pageSizes = $('#pages').find('option:selected').val();
            var pageNum = $(this).attr("data-num");
            pageEventHandler(pageSizes, pageNum);
        });

        $(".paginationjs-prev").click(function () {
            var pageSizes = $('#pages').find('option:selected').val();
            var pageNum = $(this).attr("data-num");
            pageEventHandler(pageSizes, pageNum);
        });

        $(".paginationjs-next").click(function () {
            var pageSizes = $('#pages').find('option:selected').val();
            var pageNum = $(this).attr("data-num");
            pageEventHandler(pageSizes, pageNum);
        });
    }
};

var queryCallback = function(result){
	yhLayer.yhLoading();
	var resultObj = JSON.parse(result);
	if(result != null && result != ''){
		var gridData = resultObj.parameter;
		yhLayer.yhCloseLoading();
		if(gridData.list.length == 0){
			$("#yh-grid").html("暂无数据");
			yhPage.yhPagination(10, 0, 0, [], null);
		}else{
			var page = resultObj.parameter.page;
			var tpl = $('#yh-grid-template').html();
			var htmlContent = juicer(tpl, gridData);
			$("#yh-grid").html("");
			$("#yh-grid").html(htmlContent);
		
        	var listCountArray = [];
        	for (var i=0;i<page.count;i++) {
            	listCountArray.push(i);
        	}
			/* 分页 */
			yhPage.yhPagination(page.pageSize, page.currentPage, page.count, listCountArray, pageEventHandler);

            yhPage.formatter();
		}
		
	} else if(resultObj.resultcode != YhHttpConstant.ResultCode.SUCCESS) {
		yhLayer.yhMsg(resultObj.message, 1, 1000);
	} else {
		yhLayer.yhMsg(tips.queryMsg, 0, 1000);
	}	
};

var addCallback = function(result){
	yhLayer.yhLoading();
	var resultObj = JSON.parse(result);
	if(null != result && '' != result){
		yhLayer.yhMsg(resultObj.parameter.message, 1, 1000);
	} else if(resultObj.resultcode != YhHttpConstant.ResultCode.SUCCESS){
		yhLayer.yhMsg(resultObj.message, 2, 1000);
	} else {
		yhLayer.yhMsg(tips.addMsg, 0 ,1000);
	}
};

var updateCallback = function(result){
	yhLayer.yhLoading();
	var resultObj = JSON.parse(result);
	if(null != result && '' != result){
		yhLayer.yhMsg(resultObj.parameter.message, 1, 1000);
	} else if(resultObj.resultcode != YhHttpConstant.ResultCode.SUCCESS){
		yhLayer.yhMsg(resultObj.message, 2, 1000);
	} else {
		yhLayer.yhMsg(tips.updateMsg, 0 ,1000);
	}
};

$('#pages').change(function () {
    var pageSizes = $('#pages').find('option:selected').val();
    pageEventHandler(pageSizes, 1);
});



$("body").keydown(function() {
    if (event.keyCode == "13") {//keyCode=13是回车键
        $('#search').trigger('click');
    }
});