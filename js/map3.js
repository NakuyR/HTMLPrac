
function relayout() {    
    
    // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
    // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다 
    // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
    map.relayout();
}

var widthval = 100;
var heightval = 500;

// 지도를 표시하는 div 크기를 변경하는 함수입니다
function resizeMap() {
    var mapContainer = document.getElementById('map');
    mapContainer.style.width = widthval+'%';
    mapContainer.style.height = heightval+'px';
	map.relayout();
}

function mapsmall(){
	heightval -= 50;
	widthval -= 10;
	resizeMap();
}

function resetmap(){
	widthval = 100;
	heightval = 500;
	resizeMap();
}