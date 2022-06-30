var mapContainer = document.getElementById('map'),
	mapOption = {
		center: new kakao.maps.LatLng(33.450701,126.570667),
		level:3
	};
var map = new kakao.maps.Map(mapContainer,mapOption);

var mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl,kakao.maps.ControlPosition.RIGHT);

kakao.maps.event.addListener(map,'click',function(mouseEvent){
	var latlng = mouseEvent.latLng;
	
	var message = '클릭한 위치의 위도는' + latlng.getLat() + '이고, ';
	message += '경도는' + latlng.getLng() +'이다';
	
	var resultDiv = document.getElementById('result');
	resultDiv.innerHTML=message;
});


