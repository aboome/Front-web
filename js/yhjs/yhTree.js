/**
 * Created by zhangsc on 2016/11/23.
 */
var zTree;

var initZTree = function (id ,setting, zNodes) {

    $.fn.zTree.init($("#"+id), setting, zNodes);

    zTree = $.fn.zTree.getZTreeObj(id);

    var type = {
        "Y": "ps",
        "N": "ps"
    };

    zTree.setting.check.chkboxType = type;
};

//zTree设置项
var setting = {
    check: {
        enable: true
    },
    data: {
        simpleData: {
            enable: true
        }
    }
};

