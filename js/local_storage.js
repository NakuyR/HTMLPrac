function local_save(){
	if (localStorage){
		let input_text = document.getElementById("local");
		localStorage.setItem("Local_Strage_test", input_text.value);
	}
	else {
		alert("로컬 스토리지 지원x");
	}
}
function local_get(){
	if(localStorage) {
		alert("저장된 검색어는," + localStorage.getItem("Local_Strage_test"));
	}
	else{
		alert("로컬 스토리지 지원x");
	}
}

function local_del(){
	if(localStorage){
		// localStorage.removeItem("Local_Strage_test");
		localStorage.clear();
		alert('로그아웃 버튼 클릭 확인 : 로컬 스토리지를 삭제합니다.');
	}
	else{
		alert("로컬 스토리지 지원 x");
	}
}