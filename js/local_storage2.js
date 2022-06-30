const form = document.querySelector('form'); 
const ul = document.querySelector('ul'); 
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; // json 객체 문자열을 js 객체로 변환 후 저장, 현재 비어 있음

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items')); // 로컬 스토리지 읽기, 배열 형식으로 출력

const liMaker = (text) => { // 화살표 함수, 기존 함수와 다른 함수 사용법(하단 링크 참고)
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li); // ul 태그 내에 li 태그 추가
}

form.addEventListener('submit', function(e) { // 엔터 누르는 경우
  e.preventDefault(); // 엔터 눌렀을때 새로 실행되지 않음, 계속 작동함

  itemsArray.push(input.value); // 새로운 입력 값을 배열에 삽입
  localStorage.setItem('items', JSON.stringify(itemsArray)); 
  liMaker(input.value); // 값을 li 객체에 추가
  input.value = ""; // 입력 후 문자열
});

data.forEach(item => { // 배열 각 요소에 실행
  liMaker(item);
});
