$(function(){
    //pc 상단 메뉴 고정
    $('.head nav ul li').on({
        mouseenter:function(){
            $('.head').find('div').stop().slideDown(400);
            $('.header').addClass('active')

            $(this).find('> a').css({background:'#0088e7',color:'white'});

        },
        mouseleave:function(){
            $('.head').find('div').stop().slideUp(400);
            $('.header').removeClass('active')
            if( $(this).index() == localStorage.menu) return;
            $(this).find('> a').css({background:'white',color:'#333'});
        },
        click:function(){
            localStorage.menu = $(this).index()
        }
    });

    $('.head h1').click(function(){
        localStorage.menu = 'a';
    })

    $('.head nav ul li').eq(localStorage.menu).find('> a').css({background:'#0088e7',color:'white'});


    //모바일 버거메뉴
    const menuBtn = document.querySelector('.mhead ul li:nth-of-type(2) a'),
    menuList = document.querySelector('.mhead .bgmenu');

    menuBtn.addEventListener('click', function(){
        if(menuList.classList.contains('active')){
            menuList.classList.remove('active');
            menuBtn.innerHTML = `<img src="img/m-logo3-1.png" alt="">`
        }else{
            menuList.classList.add('active');
            menuBtn.innerHTML = `<img src="img/m-logo4.png" alt="">`
        }
    });

    $('footer').load('inc.html footer > div');

});
