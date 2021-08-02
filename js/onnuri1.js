function onnuri(){

    //책갈피 스크롤
    const paperBtn = document.querySelectorAll('.nav a:nth-of-type(1)'),
        elecBtn = document.querySelectorAll('.nav a:nth-of-type(2)'),
        mobileBtn = document.querySelectorAll('.nav a:nth-of-type(3)');
    
    const headerTop = document.querySelector('.header').offsetHeight,
        title1Top = document.querySelector('.title'),
        title2Top = document.querySelector('.title2'),
        title3Top = document.querySelector('.title3');

    for(let i=0; i<paperBtn.length; i++){
        paperBtn[i].addEventListener('click',function(){
            window.scrollTo({
                left: 0, top: title1Top.offsetTop - headerTop, behavior:'smooth'
            })
        })
    }
    for(let i=0; i<elecBtn.length; i++){
        elecBtn[i].addEventListener('click', function(){
            window.scrollTo({
                left:0, top: title2Top.offsetTop - headerTop, behavior:'smooth'
            })
        })
    }
    for(let i=0; i<mobileBtn.length; i++){
        mobileBtn[i].addEventListener('click', function(){
            window.scrollTo({
                left:0, top: title3Top.offsetTop, behavior:'smooth'
            })
        })
    }
}
window.onload = onnuri;