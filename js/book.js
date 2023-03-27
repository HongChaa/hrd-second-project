const $seoul = document.querySelector('.region #Seoul');
$seoul.onclick = () => {
    document.querySelector('.city-wrap .Seoul').style.display='block';
    $seoul.style.background = '#f2f0e5';
};

const $gyeonggi = document.querySelector('.region #Gyeonggi');
$gyeonggi.onclick = () => {
    
    $gyeonggi.classList.add('default-color-city');
    
   
};