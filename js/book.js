


// <영화> 영화 목록 색깔 ======================================= start
const $movielist = document.querySelector('.movie-list ul li');
$movielist.parentElement.onclick = e => {
    const $selected = e.target.parentElement.querySelector('.change-color-movie');
    const $movielistSoldout = e.target.querySelector('.movie-list ul .soldout');
    const $poster = document.querySelector('.poster');

    if ($selected !== null) $selected.classList.remove('change-color-movie');

    e.target.classList.add('change-color-movie');
    bookInfo.title = e.target.textContent;

    let selectedPic ='';

    switch (bookInfo.title) {
        case "더퍼스트슬램덩크": selectedPic ='slamdunk';
            break;
        case "스즈메의문단속": selectedPic ='suzume';
            break;
        case "던전앤드래곤-도적들의 명예": selectedPic ='deongeon';
            break;
        case "웅남이": selectedPic ='woongnam';
            break;
        case "엘카미노": selectedPic ='elcamino';
            break;
        case "소울메이트": selectedPic ='soulmate';
            break;
        case "오토라는남자": selectedPic ='otto';
            break;
        case "여섯개의밤": selectedPic ='layover';
            break;
            default : selectedPic ='';
    }
    if($poster.classList.contains('ddd') !== null) $poster.classList.remove('ddd');
    $poster.classList.add(selectedPic);
    $poster.classList.add('ddd');
    document.querySelector('.seletedTitle').textContent = bookInfo.title;

    if (e.target.classList.contains('soldout')) {
        alert(`해당 영화는 매진입니다.`);
        e.target.classList.remove('change-color-movie');
    }
};

// <영화> 영화 목록 색깔 ======================================= end


// <극장> 지역 목록 색깔 $ display ======================================= start

const $region = document.querySelector('.region');
const $regionLi = document.querySelector('.region li');
const $cityWrap = document.querySelector('.city-wrap');
let checkFlag = -1;
$regionLi.parentElement.onclick = e => {

    for (let i = 0; i < $region.children.length; i++) {

        if ($region.children[i].id === e.target.id) {
            e.target.classList.add('change-color-region');
            checkFlag = i;
        } else {
            $region.children[i].classList.remove('change-color-region');
            $cityWrap.children[i].classList.remove('show-city');
        }
    }
    if (checkFlag !== -1) {
        $cityWrap.children[checkFlag].classList.add('show-city');
    }
}

// <극장> 지역 목록 색깔 $ display ======================================= end


// <극장> detail지역 목록 색깔 $ display ======================================= start

const $detailCity = document.querySelector('.city-wrap .city');
$detailCity.parentElement.onclick = e => {

    // 기존에 클래스가 붙은 요소를 찾아내서 리무브
    const $city = e.target.parentElement.querySelector('.change-color-city');

    if ($city !== null) $city.classList.remove('change-color-city');

    e.target.classList.add('change-color-city');
    bookInfo.location = e.target.parentElement.querySelector('li.change-color-city').textContent;

    // check-content<selected-location>  ==================================== start
    document.querySelector('.selected-show-location em').textContent = bookInfo.location;
    // check-content<selected-location>  ==================================== end
}

// <극장> detail지역 목록 색깔 $ display ======================================= end


// <날짜> 날짜 선택 색깔 ==================================== start

const $daydateWrap = document.querySelector('.daydate-wrap');
const $daydate = document.querySelector('.daydate');

$daydate.parentElement.onclick = e => {

    const $selectedDatdate = e.target.parentElement.querySelector('div.change-color-daydate');

    const $year = e.target.parentElement.parentElement.querySelector('.year').textContent;
    const $month = e.target.parentElement.parentElement.querySelector('.month').textContent;
    const $detaildate = e.target.querySelector('.detaildate').textContent;
    const $day = e.target.querySelector('.day').textContent;

    if ($selectedDatdate !== null) $selectedDatdate.classList.remove('change-color-daydate');

    e.target.classList.add('change-color-daydate');
    bookInfo.date = `${$year}.${$month}.${$detaildate} (${$day})`;


    // checkcontent<selected-date>   ==================================== start
    document.querySelector('.selected-date').textContent = bookInfo.date;
    // checkcontent<selected-date>   ==================================== end

};

// <시간> 시간 선택 색깔 ==================================== start

const $room = document.querySelector('.room');
const $startTime = document.querySelector('.start-time');
const $timeList = document.querySelector('.time-list');

$room.parentElement.onclick = e => {
    console.log('이벤트출력');

    const $selectedTime = $room.parentElement.querySelector('.change-color-playtime');

    if ($selectedTime !== null) $selectedTime.classList.remove('change-color-playtime');

    e.target.classList.add('change-color-playtime');
    bookInfo.room = e.target.parentElement.parentElement.parentElement.querySelector('.typ').textContent;
    bookInfo.startTime = e.target.parentElement.querySelector('.start-time').textContent;
    // check-content / poster-title 부분 
    document.querySelector('.selectedRoom').textContent = e.target.parentElement.parentElement.parentElement.querySelector('b').textContent;
    // check-content / book-info 시간부분 
    document.querySelector('.selected-startTime').textContent = bookInfo.startTime;

}


// <시간> 시간 선택 색깔 ==================================== end



// check-content ========================================== start

// 영화 예약 정보 담는 객체
const bookInfo = {
    title: "1",
    location: "1",
    date: "11",
    startTime: "1",
    room: "1",
};

const $nextBtn = document.querySelector('.next-btn-wrap a');

window.onload = e => {
    infoFullFlag = 1

    // for (let infokey of bookInfo) {
    //     if (bookInfo[infokey] !== "") {
    //         infoFullFlag = -1
    //     }
    // }

    // if (infoFullFlag === 1) {
    //     $nextBtn.classList.add('change-color-btn');
    // }
}

export {bookInfo};

// check-content ========================================== end