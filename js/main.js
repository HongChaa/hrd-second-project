const $slides = document.querySelector('.slide-wrapper');
const $slide = document.querySelectorAll('.slide');
var currentIdx = 0;
const slideCount = $slide.length;
const slideWidth = 337;
const slideMargin = 33; 
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const $slidesWidth = (slideWidth + slideMargin) * slideCount + slideMargin;


$slides.style.width = String($slidesWidth) +'px';

function moveSLide (num){
    $slides.style.left = String(-num * 373) +'px';
    currentIdx = num;
}


nextBtn.addEventListener('click',function(){
    if(currentIdx < slideCount-3){
    moveSLide(currentIdx+1);
    }else{
        moveSLide(0);
    }
});

prevBtn.addEventListener('click',function(){
    if(currentIdx > 0){
    moveSLide(currentIdx-1);
    }else{
        moveSLide(slideCount -3);
    }
});
