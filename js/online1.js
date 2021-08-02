function online(){

    //상품탭
    const onTab = document.querySelectorAll('.onlinetab a'),
        onItem = document.querySelectorAll('.item > div'),
        onBtn = document.querySelector('.item > p')
    let num = 0;

    for(let i=0; i<onTab.length; i++){
        onTab[i].addEventListener('click',function(){
            onTab[num].classList.remove('view');
            onItem[num].classList.remove('view');

            onTab[i].classList.add('view');
            onItem[i].classList.add('view');
            
            num = i;
            
        })
    }
    
}
window.onload = online;