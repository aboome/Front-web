// 手机号码验证
jQuery.validator.addMethod("isMobile", function (value, element) {
    var length = value.length;
    var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");

//密码
jQuery.validator.addMethod("isPassword", function (value, element) {
    var length = value.length;
    var password = /^\w{6,20}$/;
    return this.optional(element) || (password.test(value));
}, "密码必须是字母、数字和下划线组合(不含空格)");

/*用户名*/
jQuery.validator.addMethod('isUserName', function (value, element) {
    var length = value.length;
    var userName = /^[a-zA-z][a-zA-Z0-9_]{5,20}$/;
    return this.optional(element) || (userName.test(value));
}, '用户名必须长度大于等于6位的字母、数字组合');

jQuery.validator.addMethod("isTemperature", function (value, element) {
    var temp = /^(\+|-)?([0-9]{1,3})(\.[0-9])?$/;
    return this.optional(element) || (temp.test(value));
}, "请输入合适的值(-999.9~999.9,保留一位小数)");

jQuery.validator.addMethod("setTemperature", function (value, element) {
    var temp = /^((300)|((1|2)?([0-9]{1,2})(\.[0-9])?))$/;
    return this.optional(element) || (temp.test(value));
}, "请输入合适的值(0-300,保留一位小数)");


jQuery.validator.addMethod("notEqualTo", function (value, element, param) {
    return value != $(param).val();
}, $.validator.format("新密码不能和原密码相同"));

/*型号*/
jQuery.validator.addMethod("isModel", function (value, element) {

    var length = value.length;
    var model = /^[a-zA-Z0-9_-]+$/;
    return this.optional(element) || (model.test(value));
}, "型号必须是字母、数字、下划线和连接符");

/*name验证*/
jQuery.validator.addMethod('isName', function (value, element) {
    var length = value.length;
    var name = /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/;
    return this.optional(element) || (name.test(value));
}, "名称必须是中文，英文，数字");
/*特殊字符验证*/
jQuery.validator.addMethod("isContainsSpecialChar", function (value, element) {
    var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);
    return this.optional(element) || !reg.test(value);
}, "不能含有空格等特殊字符!");

/*订单号验证*/
jQuery.validator.addMethod("isOrderId", function (value, element) {
    var orderId = /^[a-z0-9]+$/;
    return this.optional(element) || (orderId.test(value));
}, "只能是小写字母和数字");
/*时间大小*/
jQuery.validator.addMethod('greaterThan', function (value, element, param) {
    return value > $(param).val();
}, '上限必须大于下限！');
/*小数点后2位*/
jQuery.validator.addMethod('isMoney', function (value, element, param) {
    var money = /^\d{1,12}(?:\.\d{0,2})?$/g
    return this.optional(element) || (money.test(value));
}, '订单金额，小数点后1-2位！');
/*阈值上下限*//* /^(\+|-)?([0-9]{0,10})(\.[0-9]{0,2})?$/*/
jQuery.validator.addMethod("isBound", function (value, element) {
    var temp = /^(\+|-)?([0-9]{0,10}(\.[0-9]{0,2})?$)/;
    return this.optional(element) || (temp.test(value));
}, "(-9999999.99~9999999.99,保留二位小数)");
jQuery.validator.addMethod('smarterThan', function (value, element, param) {
    return value < $(param).val();
}, '下限必须小于上限！');

$(function () {
    $('#loginInfo').validate({
        rules: {
            username: {
                required: true,
                isUserName: true
            },
            password: {
                required: true,
                isPassword: true
            }
        },
        messages: {
            username: {
                required: '用户名不能为空'
            },
            password: {
                required: '密码不能为空'
            }
        }
    });
    $('#modifyPwdForm').validate({
        rules: {
            passWord: {
                required: true,
                rangelength: [6, 12],
                isPassword: true

            },
            newPassWord: {
                required: true,
                rangelength: [6, 12],
                isPassword: true,
                /* notEqualTo:'#passWord'*/
            },
            confirmPwd: {
                required: true,
                rangelength: [6, 20],
                equalTo: '#newPassWord'
            }
        },
        messages: {
            passWord: {
                required: '旧密码不能为空',
                rangelength: '密码长度为 6 到 20 个字符之间'
            },
            newPassWord: {
                required: '新密码不能为空',
                rangelength: '密码长度为 6 到 20 个字符之间'
            },
            confirmPwd: {
                required: '确认密码不能为空',
                rangelength: '密码长度为 6 到 20 个字符之间',
                equalTo: '请保证两次输入的密码相同'
            }
        }
    });

    /*系统管理验证*/
    /*查询区验证*/
    $('#queryForm').validate({
        rules: {
            sensorName: {
                isContainsSpecialChar: true
            },
            roleName: {
                isContainsSpecialChar: true
            },
            bridgeName: {
                isContainsSpecialChar: true
            },

            groupName: {
                isContainsSpecialChar: true
            },
            userName: {
                isContainsSpecialChar: true
            },
            userAccount: {
                isContainsSpecialChar: true
            },
            pushMan: {
                isContainsSpecialChar: true
            }
        },
        messages: {}

    });
    /*新增验证*/
    $('#addForm').validate({
        rules: {
            groupName: {
            	required: true,
                isContainsSpecialChar: true,
                rangelength: [0, 20]
            },
            remark: {
                isContainsSpecialChar: true,
                rangelength: [0, 20]
            },
            roleName: {
            	required: true,
                isContainsSpecialChar: true,
                rangelength: [0, 20]
            },
            monitorId: {
                required: true
            },
            noticeType: {
                required: true
            },
            sensorName: {
            	required: true
            },
            collectionModel: {
            	required: true
            },
            area: {
            	required: true
            },
            top3: {
                isBound: true
            },
            least3: {
                isBound: true,
                smarterThan: '#add-top3'

            },
            userName: {
                required:true,
                isUserName: true
            },
            phone: {
                required: true,
                isMobile: true
            },
            eMail: {
                email: true
            },
            wechat: {
                isContainsSpecialChar: true
            },
            pushMan: {
                isContainsSpecialChar: true
            },
            receiveMan: {
                required: true,
                isContainsSpecialChar: true
            }
        },
        messages: {
            groupName: {
            	required: '请填写分组名',
                rangelength: '长度在20个字符以内'
            },
            remark: {
                rangelength: '长度在20个字符以内'
            },
            roleName: {
				required: '请输入角色名',
                rangelength: '长度在20个字符以内'
            },
            monitorId: {
                required: '请选择桥梁'
            },
            noticeType: {
                required: '请选择消息类型'
            },
            sensorName: {
            	required: '请选择传感器'
            },
            collectionModel: {
            	required: '请选择采集类型'
            },
            area: {
            	required: '请选择地区'
            },
            top3: {},
            least3: {},
            userName: {
                required:'请输入用户名'
            },
            receiveMan: {
                required: '接收人不能为空'
            },
            phone: {
                required: '手机号不能为空'
            }

        }

    });
    /*修改验证*/
    $('#modifyForm').validate({
        rules: {
            groupName: {
            	required: true,
                isContainsSpecialChar: true,
                rangelength: [0, 20]
            },
            remark: {
                isContainsSpecialChar: true,
                rangelength: [0, 20]
            },
            roleName: {
            	required: true,
                isContainsSpecialChar: true,
                rangelength: [0, 20]
            },
            top1: {
                isBound: true

            },
            least1: {
                isBound: true,
                smarterThan: '#m-top1'
            },
            userName: {
                required: true,
                isUserName: true
            },
            phone: {
            	required: true,
                isMobile: true
            },
            eMail: {
                email: true
            },
            wechat: {
                isContainsSpecialChar: true
            },
            pushMan: {
                isContainsSpecialChar: true,
                rangelength: [0, 20]
            },
            receiveMan: {
            	required: true,
                isContainsSpecialChar: true,
                rangelength: [0, 20]
            },
            warnDeals: {
                isContainsSpecialChar: true,
                rangelength: [0, 20]
            },
            person: {
                isContainsSpecialChar: true,
                rangelength: [0, 20]
            },
            monitorId: {
            	required: true
            },
            noticeType: {
            	required: true
            }
        },
        messages: {
            groupName: {
            	required: '请填写分组名',
                rangelength: '长度在20个字符以内'
            },
            remark: {
                rangelength: '长度在20个字符以内'
            },
            roleName: {
            	required: '请输入角色名',
                rangelength: '长度在20个字符以内'
            },
            top1: {},
            least1: {},
            userName: {
                required: '请输入用户名'
            },
            eMail: {
                email: '请输入正确邮件格式'
            },
            pushMan: {
                rangelength: '长度在20个字符以内'
            },
            receiveMan: {
            	required: '接收人不能为空',
                rangelength: '长度在20个字符以内'
            },
            warnDeals: {
                rangelength: '长度在20个字符以内'
            },
            monitorId: {
                required: '请选择桥梁'
            },
            person: {
                rangelength: '长度在20个字符以内'
            },
            noticeType: {
                required: '请选择消息类型'
            },
            phone: {
            	required : '请输入手机号'
            }

        }

    });


});


//去掉首尾空格

