// <영화> 영화 목록 색깔 ======================================= start
const $movielist = document.querySelector('.movie-list ul li');
$movielist.parentElement.onclick = e => {
   const $selected = e.target.parentElement.querySelector('.change-color-movie');

    if($selected !== null) $selected.classList.remove('change-color-movie');
    
    e.target.classList.add('change-color-movie');

    // if($selected.classList.contains('.soldout')) alert(`해당 영화는 매진입니다.`);
};

// <영화> 영화 목록 색깔 ======================================= end


// <영화> 매진된 영화 알람 ================================== start



// <영화> 매진된 영화 알람 ================================== start



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

}

// <극장> detail지역 목록 색깔 $ display ======================================= end


// <날짜> 날짜 선택 색깔 ==================================== start

const $daydateWrap = document.querySelector('.daydate-wrap');
const $daydate = document.querySelector('.daydate');

$daydate.parentElement.onclick = e => {
    
    const $selectedDatdate = e.target.parentElement.querySelector('div.change-color-daydate');
    if($selectedDatdate !== null) $selectedDatdate.classList.remove('change-color-daydate');
    
    e.target.classList.add('change-color-daydate');
};

// <시간> 시간 선택 색깔 ==================================== start

const $room = document.querySelector('.room');
const $startTime = document.querySelector('.start-time');
const $timeList = document.querySelector('.time-list');

$room.parentElement.onclick = e => {
    console.log('이벤트출력');
    
    const $selectedTime = $room.parentElement.querySelector('.change-color-playtime');
    
    if($selectedTime !== null) $selectedTime.classList.remove('change-color-playtime');
    
    e.target.classList.add('change-color-playtime');

}


// <시간> 시간 선택 색깔 ==================================== end