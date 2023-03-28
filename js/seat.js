
//페이지 새로고침
// onClick="window.location.reload()







// 인원 선택 버튼
//querySelectorAll로 받아오기
const $minus_button=document.querySelector('.minus_button');
const $plus_button=document.querySelector('.plus_button');
const $selectd_seat=document.querySelector('.selectd_seat');

$plus_button.onclick = function(){
    $selectd_seat.innerHTML++;
};

$minus_button.onclick = function(){
    if($selectd_seat.innerHTML!=0)
     $selectd_seat.innerHTML--;
};
// 인원 선택 버튼


