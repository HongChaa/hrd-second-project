//페이지 새로고침
const $reset = document.querySelector('.reset');
$reset.onclick = function () {;
    window.location.reload();
}

//좌석 깔기
const $rows = [...document.querySelectorAll('.row')];
let seat_id; //좌석 아이디
window.onload = function () {
    for (let i = 0; i < $rows.length; i++) {
        for (let j = 1; j <= 8; j++) {
            const $span = document.createElement('span');
            $span.classList.add('seat'); //좌석에 class 값 추가
            $rows[i].appendChild($span); //좌석 추가
            seat_id = String.fromCharCode(i + 65) + "-" + String(j);
            $span.setAttribute('id', seat_id); //좌석에 id 값 추가
        }
    }
}
//좌석 깔기 종료


// 인원 선택 버튼 
//querySelectorAll로 받아오기
const $minusButtons = [...document.querySelectorAll('.minus_button')];
const $plus_buttons = [...document.querySelectorAll('.plus_button')];
// const [$clickable_Seat1, $clickable_Seat2, $clickable_Seat3] = document.querySelectorAll('.clickable_Seat');
const $clickable_Seats = [...document.querySelectorAll('.clickable_Seat')];

let clickable_Seat = 0; //선택한 관람 인원 수
let total_price = 0; //최종 결재 금액
let people_type //성인,청소년,우대인지

for (var i = 0; i < 3; i++) {
    console.log(clickable_Seat);
    $plus_buttons[i].onclick = function (e) {
        const $selectedSeat = e.target.previousElementSibling;

        //최대 선택인원 8명
        if(clickable_Seat===8){
            alert('인원선택은 총 8명까지 가능합니다.');
            return; 
        }

        $selectedSeat.textContent = +$selectedSeat.textContent + 1;
        clickable_Seat++;

        people_type = e.target.parentNode.previousElementSibling; //성인,청소년,우대인지 선택
        console.log(people_type.textContent + " " + clickable_Seat);

        //최종결제금액 계산하는 함수 호출
        total_price = priceCount(people_type.textContent, (total, price) => {
            total += price;
            return total;
        });
    };

    $minusButtons[i].onclick = function (e) {
        const $selectedSeat = e.target.nextElementSibling;
        if (+$selectedSeat.textContent === 0) return;
        $selectedSeat.textContent = +$selectedSeat.textContent - 1;
        clickable_Seat--;

        people_type = e.target.parentNode.previousElementSibling; //성인,청소년,우대인지 선택
        console.log(people_type.textContent + " " + clickable_Seat);
    };
}
// 인원 선택 버튼 종료

//최종결제금액 계산하는 함수
function priceCount(people_type, callback) {

    console.log("매개변수 i : " + i);
    let price = 0;
    if (people_type === '성인') price = 13000;
    else if (people_type === '청소년') price = 10000;
    else if (people_type === '우대') price = 5000;

    total_price = callback(total_price, price);

    return total_price;
}
//

// 좌석 선택
const $chooseSeat = document.querySelector('.Choose_seat');
const $my_seat = document.querySelector('.my_seat');
const $selectables = [...document.querySelectorAll('.selectable')];
const $money = document.querySelector(".money").firstElementChild;

let real_click_seat = 0; //선택된 좌석 수
let seatArr = []; //선택한 좌석 넣을 배열

$money.textContent = 0  ; 
$chooseSeat.onclick = e => {
    e.target.classList.toggle('choose');

    if (e.target.classList.contains('choose')) { // 좌석 선택 시
        real_click_seat++;
        if (clickable_Seat > real_click_seat) {
            arr(e);
        } else if (clickable_Seat === real_click_seat) { //선택한 관람 인원 수 === 선택된 좌석 수
            arr(e);
            totalPrice();
            //인원수 출력 구현
        } else if (clickable_Seat < real_click_seat) { //그런데 이미 자리가 다 선택되었다면
            e.target.classList.remove('choose');
            real_click_seat--;
            alert("좌석 선택이 완료되었습니다.");
        }
    } else { //선택을 취소했다는 의미
        if (real_click_seat !== 0) {
            real_click_seat--;
            arr(e);
        }
    }
}   


//선택 좌석 id 출력 함수
function arr(e) {
    console.log("arr함수 호출됨");
    let a = false;
    seatArr.forEach(n => { //배열 돌았는데
        if (n === e.target.getAttribute('id')) { //배열 안에 id 값이 있다면 선택취소 하는 거니까
            let num = seatArr.indexOf(n);
            seatArr.splice(num, 1); //스플라이스
            a = true;
        }
    });

    //배열 다 돌았는데 id값 없으면 배열의 마지막 요소에 push
    if (a !== true) {
        seatArr.push(e.target.getAttribute('id'));
    }

    //선택좌석 출력 
    for (let i = 0; i < $selectables.length; i++) {
        if (seatArr[i] == null) {
            $selectables[i].textContent = '-';
            $selectables[i].classList.remove('selectable_background');
        } else {
            $selectables[i].textContent = seatArr[i];
            $selectables[i].classList.add('selectable_background');
        }
    }

    totalPrice();
}


//최종결제 금액 & 인원수 출력 함수
function totalPrice(){
    let $count=document.querySelector('count');
    let $em=document.querySelector('.money em');

    if (clickable_Seat === real_click_seat){
        $money.textContent = total_price; //가격 출력
        $count.textContent = people_type.textContent;
        // $em.classList.add('totalprice');
    }else{
        $money.textContent = 0;
    }
}