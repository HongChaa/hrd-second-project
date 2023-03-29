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
    // selectd_seat+=number;
    // console.log(selectd_seat);
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
        
// 인원 선택 버튼 종료


//좌석 선택 시작
const $rows = [...document.querySelectorAll('.row')];
let setid; //좌석 아이디
window.onload = function () {
    for (let i = 0; i <$rows.length; i++) {
        for (let j = 1; j <= 8; j++) {
            const $span = document.createElement('span');
            $span.classList.add('seat'); //좌석에 class 값 추가
            $rows[ i ].appendChild($span);//좌석 추가
            setid=String.fromCharCode(i+65)+"-"+String(j);
            $span.setAttribute('id',setid ); //좌석에 id 값 추가
        }
    }
}
//좌석 선택 종료

// 좌석 선택 시 css toogle로 걸기
const $chooseSeat = document.querySelector('.Choose_seat');
const $selectables = [...document.querySelectorAll('.selectable')];


$chooseSeat.onclick = e => {
    

    if(e.target.classList.contains('.choose')){
        selectd_seat-=1;
        e.target.classList.add('choose');
        console.log('ㅁ');
    }else{
        selectd_seat+=1;
        e.target.classList.remove('choose');
        console.log(selectd_seat);
    }

    if(selectd_seat<0) {
        alert("인원 모두 다 선택하셨습니다.");
        return;
    }

    // e.target.classList.toggle('choose');
    //선택 좌석에 좌석 정보 넣기
    for(let i=0;i<$selectables.length;i++){ 
        if($selectables[i].textContent==='-'){
            $selectables[i].textContent=e.target.getAttribute('id');
            $selectables[i].classList.toggle('selectable_background');
            break;
        }
    }

    // $selectables[3].textContent=e.target.getAttribute('id');

    // console.log('좌석클릭');

}
