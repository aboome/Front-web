var map = null;
yhMap = {
	//初始化地图,设置中心点坐标和地图级别
	init: function(){
		map = new BMap.Map('yhmap');

		var point = new BMap.Point(116.331398,39.897445);
		map.centerAndZoom(point,10);
		function myFun(result){
			var cityName = result.name;
			map.setCenter(cityName);   //关于setCenter()可参考API文档---”传送门“
		}
		var myCity = new BMap.LocalCity();
		myCity.get(myFun);

		map.enableScrollWheelZoom();
		map.enableInertialDragging();
		
		map.enableContinuousZoom();
		
		var size = new BMap.Size(32,37);
		map.addControl(new BMap.CityListControl({
			anchor: BMAP_ANCHOR_TOP_LEFT,
			offset: size,
		}));
		

	},
	setPointList : function (pointList) {
        var opts = {
            width: 260,
            height: 100,
            title: false,
            enableMessage: true
        };
        for(var i in pointList){
            var point = new BMap.Point(pointList[i].longItude, pointList[i].latItude);
            var myIcon = new BMap.Icon("./images/map_icon.png", new BMap.Size(36,27));
            var marker = new BMap.Marker(point, {icon:myIcon});

            var topicMonitorTypeList = pointList[i].monitorTypeList;

            var hjStatusText = '';
            var ndStatusText = '';

            for (var j in topicMonitorTypeList) {
            	if (topicMonitorTypeList[j].moniotrType == '00') {
                    if(topicMonitorTypeList[j].status == '00'){
                        hjStatusText = '<i class="sensorStatus normalStatus">正常</i>';
                    } else if(topicMonitorTypeList[j].status == '01'){
                        hjStatusText = '<i class="sensorStatus warnStatus">告警</i>'
                    }
				} else if (topicMonitorTypeList[j].moniotrType == '04') {
                    if(topicMonitorTypeList[j].status == '00'){
                        ndStatusText = '<i class="sensorStatus normalStatus">正常</i>';
                    } else if(topicMonitorTypeList[j].status == '01'){
                        ndStatusText = '<i class="sensorStatus warnStatus">告警</i>'
                    }
				}
			}

            var content = '<h4 class="bTitle">'+ pointList[i].monitorName + '</h4>'+
							'<ul>'+
								'<li class="bDialog">'+
									'<a class="bDialogA" href="bridgeStructure.html?'+ pointList[i].id +'&04">'+
										'<span class="bSpan">挠度监测</span>'+
										'<span class="bSpan">'+ ndStatusText +'</span>'+
									'</a>'+
								'</li>'+
								'<li class="bDialog">'+
									'<a class="bDialogA" href="bridgeStructure.html?'+ pointList[i].id +'&00">'+
										'<span class="bSpan">环境监测</span>'+
										'<span class="bSpan">'+ hjStatusText +'</span>'+
									'</a>'+
								'</li>'+
							'</ul>';
            map.addOverlay(marker);
            addClickHandler(content, marker);
        }
        function addClickHandler(content, marker){
            marker.addEventListener('click', function(e){
                openInfo(content, e);
            });
        };
        function openInfo(content, e){
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content, opts);
            map.openInfoWindow(infoWindow, point);
        };
    },
	/*获取中心点*/
	setMapCenter: function(a, b){
		var point = new BMap.Point(a, b);
		map.centerAndZoom(point, 10);
		map.enableScrollWheelZoom();
	}
};