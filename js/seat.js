let selectd_seat=0;

//페이지 새로고침
const $reset = document.querySelector('.reset');
$reset.onclick=function(){
    window.location.reload();
}


// 인원 선택 버튼
//querySelectorAll로 받아오기
const $minusButtons = [...document.querySelectorAll('.minus_button')];
const $plus_buttons = [...document.querySelectorAll('.plus_button')];
const [$selectd_seat1, $selectd_seat2, $selectd_seat3] = document.querySelectorAll('.selectd_seat');

let number;
for (var i = 0; i < 3; i++) {
    
    $plus_buttons[i].onclick = function (e) {
        const $selectedSeat = e.target.previousElementSibling;
        
        $selectedSeat.textContent = +$selectedSeat.textContent + 1;
        number= $selectedSeat.textContent;
        // console.log(number);
    };

    $minusButtons[i].onclick = function (e) {
        const $selectedSeat = e.target.nextElementSibling;
        if (+$selectedSeat.textContent === 0) return;
        $selectedSeat.textContent = +$selectedSeat.textContent - 1;
        number= $selectedSeat.textContent;
    };
}
        selectd_seat+=number;
        console.log(selectd_seat);
// 인원 선택 버튼 종료


//좌석 선택 시작
const $rows = [...document.querySelectorAll('.row')];

window.onload = function () {
    for (var i = 0; i <$rows.length; i++) {
        for (var j = 1; j <= 8; j++) {
            const $span = document.createElement('span');
            $span.classList.add('seat'); //class 값 추가
            $rows[ i ].appendChild($span);
            $span.setAttribute('id', i); //id 값 추가
        }
    }
}
//좌석 선택 종료

// 좌석 선택 시 css toogle로 걸기
const $chooseSeat = document.querySelector('.Choose_seat');
const $selectable = document.querySelector('.selectable');
$chooseSeat.onclick = e => {
    
    if(e.target.classList.contains('.choose')){
        selectd_seat++;
        console.log(selectd_seat);
    }else{
        selectd_seat--;
        console.log(selectd_seat);
    }

    if(selectd_seat<0) {
        alert("인원 모두 다 선택하셨습니다.");
        return;
    }
    e.target.classList.toggle('choose');

    $selectable.textContent=e.target.getAttribute('id');

    console.log('좌석클릭');

}
