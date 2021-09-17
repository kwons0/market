$(function(){
    $.ajax({
        url:'data/data_news2.json',
        success:function(data){

            // 뉴스 컨텐츠 (json)
            let tagList='';
            for(var i=0; i<9; i++){
                tagList += `<article>
                                <figure>
                                    <a href="${data.news2[i].link}"target="_blank">
                                        <img src="${data.news2[i].img}" alt="">
                                        <span><img src="${data.news2[i].hover}" alt=""></span>
                                    </a>
                                </figure>
                                <small>${data.news2[i].date}</small>
                                <a href="${data.news2[i].link}" target="_blank">
                                    <h2>${data.news2[i].title}</h2>
                                </a>
                            </article>`
            }
            $('.contents div').html(tagList);

            //더보기 클릭이벤트
            $('.contents > a').click(function(){
                $('.contents > a').fadeOut(200)
                for(var i=9; i<data.news2.length; i++){
                    tagList += `<article>
                                    <figure>
                                        <a href="${data.news2[i].link}"target="_blank">
                                            <img src="${data.news2[i].img}" alt="">
                                            <span><img src="${data.news2[i].hover}" alt=""></span>
                                        </a>
                                    </figure>
                                    <small>${data.news2[i].date}</small>
                                    <a href="${data.news2[i].link}" target="_blank">
                                        <h2>${data.news2[i].title}</h2>
                                    </a>
                                </article>`
                }
                $('.contents div').html(tagList);
                $(tagList).fadeIn(1000);
            })

        },
        error:function(){}
    })
})