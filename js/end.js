const $age = document.querySelector('.age');
const $movieTitle = document.querySelector('.title p');
const $day = document.querySelector('.date p');
const $seat = document.querySelector('.seat p');
const $headCount = document.querySelector('.head-count p');
const $qrcode = document.querySelector('.qrcode-img');



console.log($qrcode);
$age.innerHTML = '나이제한';
$movieTitle.innerHTML = '제목<br><span>서브타이틀</span>';
$day.innerHTML = 'cinemabox 날짜<br><span>시간</span>';
$seat.innerHTML = '스크린타입<br><span>좌석</span>';
$headCount.innerHTML = '인원';
$qrcode.src = '../image/소울메이트.png';