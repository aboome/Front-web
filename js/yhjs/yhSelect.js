/**
 * Created by dell on 2016/12/6.
 */

var selectParam = {
    type: null
};

var yhSelect = {
    init: function (id, type) {
        selectParam.type = type;
        YhHttp.init(YhHttpConstant.ServiceKey.QUERY_SELECT);
        YhHttp.send(selectParam, function (result) {
            var resultObj = JSON.parse(result);
            if (result != null && result != '') {
                var d = resultObj.parameter.list;

                var yhList = new Vue({
                    el: id,
                    data: {
                        items: d
                    }
                });
                if (typeof afterSelectProcess === 'function') {
                    afterSelectProcess(id);
                }
            } else if (resultObj.resultcode != YhHttpConstant.ResultCode.SUCCESS) {
                yhLayer.yhMsg(resultObj.message, 1, 1000);
            } else {
                yhLayer.yhMsg(tips.queryMsg, 0, 1000);
            }
        });
    }
};

//下拉框选择
var slectedText = function (id, data) {
    $(id + ' option[value="' + data + '"]').prop('selected', true);
};