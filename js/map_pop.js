function map_popup(){
	let special = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
	let keyword = document.getElementById("search");
	
	if ((keyword.value=="")||(keyword.value==null)){
		alert("검색어를 입력해주세요");
		return false;
	}
	
	
	if(special.test(keyword.value)==true){
		alert('특수문자가 입력되었습니다.');
		return false;
	}
	
	window.open('https://map.kakao.com/link/search/'+keyword.value);
}