/**
 * Created by zhan on 2016/11/15.
 */

var yhLayer = {
	confirm: function(data){
		
	},
	cancel: function(){
		layer.msg('您已经取消了操作',{
			time: 2000,
			btn: ['知道了']
		});
	},
	yhLoading: function(msg){
		yhLoad_index = -1;
		if('' == msg || null == msg){
			msg = '正在处理中，请稍候...';
		}
		yhLoad_index = layer.msg(msg, {icon: 16, time: 30000});
		return yhLoad_index;
	},
	yhCloseLoading:function(i){
	        if(null==i || typeof i == "undefined") {
	            return layer.closeAll();
	        }
	        return layer.close(i);
    },
	yhMsg: function(msgCode, index, time){
			layer.msg(msgCode, {icon: index, time: time}, function(){
				window.location.reload();
			});
	}
};