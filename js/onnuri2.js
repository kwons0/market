function onnuri(){

    //판매처 책갈피 스크롤
    const paperBtn = document.querySelectorAll('.nav1 a:nth-of-type(1)'),
        elecBtn = document.querySelectorAll('.nav1 a:nth-of-type(2)'),
        mobileBtn = document.querySelectorAll('.nav1 a:nth-of-type(3)');
    
    const headerTop = document.querySelector('.header').offsetHeight,
        title1Top = document.querySelector('.title1'),
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
                left:0, top: title3Top.offsetTop - headerTop, behavior:'smooth'
            })
        })
    }

    //사용처 책갈피 스크롤
    const paperBtn2 = document.querySelectorAll('.nav2 a:nth-of-type(1)'),
        elecBtn2 = document.querySelectorAll('.nav2 a:nth-of-type(2)'),
        mobileBtn2 = document.querySelectorAll('.nav2 a:nth-of-type(3)'),
        onlineBtn2 = document.querySelectorAll('.nav2 a:nth-of-type(4)');

    const title4Top = document.querySelector('.title4'),
        title5Top = document.querySelector('.title5'),
        title6Top = document.querySelector('.title6'),
        title7Top = document.querySelector('.title7');

    for(let i=0; i<paperBtn.length; i++){
        paperBtn2[i].addEventListener('click',function(){
            window.scrollTo({
                left: 0, top: title4Top.offsetTop - headerTop, behavior:'smooth'
            })
        })
    }
    for(let i=0; i<elecBtn.length; i++){
        elecBtn2[i].addEventListener('click', function(){
            window.scrollTo({
                left:0, top: title5Top.offsetTop - headerTop, behavior:'smooth'
            })
        })
    }
    for(let i=0; i<mobileBtn.length; i++){
        mobileBtn2[i].addEventListener('click', function(){
            window.scrollTo({
                left:0, top: title6Top.offsetTop - headerTop, behavior:'smooth'
            })
        })
    }
    for(let i=0; i<mobileBtn.length; i++){
        onlineBtn2[i].addEventListener('click', function(){
            window.scrollTo({
                left:0, top: title7Top.offsetTop - headerTop, behavior:'smooth'
            })
        })
    }

}
window.onload = onnuri;