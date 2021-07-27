$(function(){

    //모바일 버거메뉴 고정
    const menuBtn = document.querySelector('.mhead ul li:nth-of-type(2) a:nth-of-type(2)'), //
    menuList = document.querySelector('.mhead .bgmenu');

    menuBtn.addEventListener('click', function(){
        if(menuList.classList.contains('active')){
            menuList.classList.remove('active');
            menuBtn.innerHTML = `<img src="img/m-logo3.png" alt="">`
        }else{
            menuList.classList.add('active');
            menuBtn.innerHTML = `<img src="img/m-logo4.png" alt="">`
        }
    });

    //pc 상단 메뉴 고정
    $('.head nav ul li').hover(
        function(){
            $('.head').find('div').stop().slideDown();
            $('.header').classList.add('active');
        },
        function(){
            $('.head').find('div').stop().slideUp();
            $('.header').classList.remove('active');
        }
    )


    $('footer').load('inc.html footer > div');
});