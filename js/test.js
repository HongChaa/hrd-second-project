


const $test=document.getElementById("test");



window.onload = function(){
    for(var i=0;i<10;i++){
            const $div=document.createElement('div');   
            $test.appendChild($div);
            $div.setAttribute('id', i); //id 값 추가
    }
};


// window.addEventListener('DOMContentLoaded', function()
// {

// });

// $(document).ready(function() {
//     alert("TEST");
// });