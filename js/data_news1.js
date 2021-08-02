$(function(){
    $.ajax({
        url:'data/data_news1.json',
        success:function(data){

            // 뉴스 컨텐츠 (json)
            let tagList='';
            for(var i=0; i<9; i++){
                tagList += `<article>
                                <figure>
                                    <a href="${data.news1[i].link}" target="_blank">
                                        <img src="${data.news1[i].img}" alt="">
                                        <span><img src="${data.news1[i].hover}" alt=""></span>
                                    </a>
                                </figure>   
                                <small>${data.news1[i].date}</small>
                                <h2>${data.news1[i].title}</h2>
                                <p>${data.news1[i].detail}</p>
                            </article>`
            }
            $('.contents div').html(tagList);

            //더보기 클릭이벤트
            $('.contents > a').click(function(){
                $('.contents > a').fadeOut(200)
                for(var i=9; i<data.news1.length; i++){
                    tagList += `<article>
                                    <figure>
                                        <a href="${data.news1[i].link}" target="_blank">
                                            <img src="${data.news1[i].img}" alt="">
                                            <span><img src="${data.news1[i].hover}" alt=""></span>
                                        </a>
                                    </figure>   
                                    <small>${data.news1[i].date}</small>
                                    <h2>${data.news1[i].title}</h2>
                                    <p>${data.news1[i].detail}</p>
                                </article>`
                }
                $('.contents div').html(tagList);
                $(tagList).fadeIn(1000);
            })
        },
        error:function(){

        }
    })
})