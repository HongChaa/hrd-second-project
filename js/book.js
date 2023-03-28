// <영화> 영화 목록 색깔 ======================================= start


const $movielist = document.querySelector('.movie-list ul a');
$movielist.parentElement.onclick = e => {
    e.target.classList.toggle('change-color-movie');
};

// <영화> 영화 목록 색깔 ======================================= end

// <극장> 지역 목록 색깔 $ display ======================================= start
const $seoul = document.querySelector('.region #Seoul');
$seoul.onclick = e => {
    $seoulclass = document.querySelector('.city-wrap .Seoul');
    $seoul.classList.toggle('change-color-region');
    $seoulclass.classList.toggle('show-city');
};

const $gyeonggi = document.querySelector('.region #Gyeonggi');
$gyeonggi.onclick = e => {
    $gyeonggiclass = document.querySelector('.city-wrap .Gyeonggi');
    $gyeonggi.classList.toggle('change-color-region');
    $gyeonggiclass.classList.toggle('show-city');
};

const $incheon = document.querySelector('.region #Incheon');
$incheon.onclick = e => {
    $incheonclass = document.querySelector('.city-wrap .Incheon');
    $incheon.classList.toggle('change-color-region');
    $incheonclass.classList.toggle('show-city');
};

const $gangwon = document.querySelector('.region #Gangwon');
$gangwon.onclick = e => {
    $gangwonclass = document.querySelector('.city-wrap .Gangwon');
    $gangwon.classList.toggle('change-color-region');
    $gangwonclass.classList.toggle('show-city');
};

const $chungcheong = document.querySelector('.region #Chungcheong');
$chungcheong.onclick = e => {
    $chungcheongclass = document.querySelector('.city-wrap .Chungcheong');
    $chungcheong.classList.toggle('change-color-region');
    $chungcheongclass.classList.toggle('show-city');
};

const $daegu = document.querySelector('.region #Daegu');
$daegu.onclick = e => {
    $daeguclass = document.querySelector('.city-wrap .Daegu');
    $daegu.classList.toggle('change-color-region');
    $daeguclass.classList.toggle('show-city');
};

const $busan = document.querySelector('.region #Busan');
$busan.onclick = e => {
    $busanclass = document.querySelector('.city-wrap .Busan');
    $busan.classList.toggle('change-color-region');
    $busanclass.classList.toggle('show-city');
};

const $gyeongsang = document.querySelector('.region #Gyeongsang');
$gyeongsang.onclick = e => {
    $gyeongsangclass = document.querySelector('.city-wrap .Gyeongsang');
    $gyeongsang.classList.toggle('change-color-region');
    $gyeongsangclass.classList.toggle('show-city');
};

const $jeolla = document.querySelector('.region #Jeolla');
$jeolla.onclick = e => {
    $jeollaclass = document.querySelector('.city-wrap .Jeolla');
    $jeolla.classList.toggle('change-color-region');
    $jeollaclass.classList.toggle('show-city');
};

// const $regionList = document.querySelector('.region li');
// $regionList.parentElement.onclick = e => {
//     $jeollaclass = document.querySelector('.city-wrap .Jeolla');
//     e.target.classList.toggle('change-color-region');
//     e.target.classList.toggle('show-city');
// }


// <극장> 지역 목록 색깔 $ display ======================================= end


// <극장> detail지역 목록 색깔 $ display ======================================= start

const $detailCity = document.querySelector('.city-wrap .city');
const $detailCityLi = document.querySelector('.city-wrap .city li');

$detailCity.parentElement.onclick = e => {

    for (let i = 0; i < $detailCity.children.length; i++) {

        if ($detailCityLi.classList.contains('change-color-city')) {
            $detailCityLi.classList.remove('change-color-city');
        }
    }
    e.target.classList.toggle('change-color-city');
}


// <극장> detail지역 목록 색깔 $ display ======================================= end


// <날짜> 날짜 선택 색깔 ================================== start



const $daydateA = document.querySelector('.daydate-wrap a');
const $daydate = document.querySelector('.daydate');

$daydateA.parentElement.onclick = e => {

    e.target.classList.toggle('change-color-daydate');
};