function map(){
    // alert('위치 엑세스 거부됨')
    // history.back()
    

    
    $('.popBtn').find('input:nth-of-type(1)').click(function(){
        if( window.innerWidth > 1046){
            $('.popup').fadeOut(500);
            $('.mapnav').fadeTo('slow',0.4);
            $('.title').fadeTo('slow',0.4);
            $('.map').fadeTo('slow',0.4);
        }else{
            $('.popup').fadeOut(500);
            $('.mmnav div').fadeTo('slow',0.4);
            $('.market2').fadeTo('slow',0.4);
            $('#map').fadeTo('slow',0.4);
        }
    })


    $('.popBtn').find('input:nth-of-type(2)').click(function(){
        alert('위치 엑세스 거부됨');
        history.back();
        localStorage.menu = $(this).index() + 'a';
    })
    
}
window.onload = map;