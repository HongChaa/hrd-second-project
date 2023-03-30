//페이지 새로고침
const $reset = document.querySelector('.reset');
$reset.onclick = function () {
    window.location.reload();
}

// 인원 선택 버튼 
//querySelectorAll로 받아오기
const $minusButtons = [...document.querySelectorAll('.minus_button')];
const $plus_buttons = [...document.querySelectorAll('.plus_button')];
// const [$seat_clicked1, $seat_clicked2, $seat_clicked3] = document.querySelectorAll('.seat_clicked');
const $seat_clickeds = [...document.querySelectorAll('.seat_clicked')];

let seat_clicked = 0; //선택한 관람 인원 수
let total_price; //최종 결재 금액
for (var i = 0; i < 3; i++) {
    console.log(seat_clicked);
    $plus_buttons[i].onclick = function (e) {
        const $selectedSeat = e.target.previousElementSibling;

        $selectedSeat.textContent = +$selectedSeat.textContent + 1;
        seat_clicked++;
        console.log(seat_clicked);
    };

    $minusButtons[i].onclick = function (e) {
        const $selectedSeat = e.target.nextElementSibling;
        if (+$selectedSeat.textContent === 0) return;
        $selectedSeat.textContent = +$selectedSeat.textContent - 1;
        seat_clicked--;
        console.log(seat_clicked);
    };
}
// 인원 선택 버튼 종료


//좌석 깔기
const $rows = [...document.querySelectorAll('.row')];
let setid; //좌석 아이디
window.onload = function () {
    for (let i = 0; i < $rows.length; i++) {
        for (let j = 1; j <= 8; j++) {
            const $span = document.createElement('span');
            $span.classList.add('seat'); //좌석에 class 값 추가
            $rows[i].appendChild($span); //좌석 추가
            setid = String.fromCharCode(i + 65) + "-" + String(j);
            $span.setAttribute('id', setid); //좌석에 id 값 추가
        }
    }
}
//좌석 깔기 종료




// 좌석 선택
const $chooseSeat = document.querySelector('.Choose_seat');
const $selectables = [...document.querySelectorAll('.selectable')];

$chooseSeat.onclick = e => {
    e.target.classList.toggle('choose');

    if (e.target.classList.contains('choose')) { //choose 클래스가 있으면
            if (seat_clicked <= 0) { //이미 자리를 모두 선택했다면
                seat_clicked = 0;
                e.target.classList.remove('choose');
                alert("좌석 선택이 완료되었습니다.");
                return;
            } 
            else {
                seat_clicked -= 1; //선택할 수 있는 좌석 수 --;
                console.log(seat_clicked);
            }
    } 
    else {
        seat_clicked += 1;
        console.log(seat_clicked);
    }

    //선택 좌석에 좌석 정보 넣기
    for (let i = 0; i < $selectables.length; i++) {
        if ($selectables[i].textContent === '-') {
            $selectables[i].textContent = e.target.getAttribute('id');
            $selectables[i].classList.toggle('selectable_background');
            break;
        }
    }
}