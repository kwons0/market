function index(){

    // 메인 슬라이드
    $(".slider").slick({
        arrow:true, dots: true, infinite: true, slidesToShow: 1,
        slidesToScroll: 1, autoplay:true, autoplaySpeed:3000,
        vertical:true
    });


    
    // 뉴스 아코디언 (pc)
    const newTitle = document.querySelectorAll('.newTitle'),
        newTxt = document.querySelectorAll('.newTxt'),
        acoIcon = document.querySelectorAll('.acoIcon');

    newTitle.forEach(function(el){
        el.addEventListener('click', toggleAccordion)
    });

    function toggleAccordion(el) {
        const targetText = el.currentTarget.nextElementSibling.classList,
            targetacoIcon = el.currentTarget.children[0],
            target = el.currentTarget;
        
        if(targetText.contains('show')){
            targetText.remove('show');
            targetacoIcon.classList.remove('ani');
            target.classList.remove('active');
        }else{
            newTitle.forEach(function(el){
                el.classList.remove('active');
                
                newTxt.forEach(function(el){
                    el.classList.remove('show');
                });
                
                acoIcon.forEach(function(el){
                    el.classList.remove('ani');
                });
                
            })
            
            targetText.add('show');
            target.classList.add('active');
            targetacoIcon.classList.add('ani');
        }  
    }
}
window.onload = index;
