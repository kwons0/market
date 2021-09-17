$(function(){
    $.ajax({
        url:'data/data_online2.json',
        success:function(data){
            
            // 뉴스 컨텐츠 (json)
            let tagList='';
            for(var i=0; i<data.online2.length - 3; i++){
                tagList += `<a href="${data.online2[i].link}" target="_blank">
                                <figure><img src="${data.online2[i].img}" alt=""></figure>
                                <article>
                                    <div><img src="${data.online2[i].logo}" alt=""></div>
                                    <small>${data.online2[i].market}</small>
                                    <h2>${data.online2[i].title}</h2>
                                    <p>${data.online2[i].detail}</p>
                                    <span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </article>
                                <span><h2>${data.online2[i].tag}</h2></span>
                            </a>`
            }
            $('.event ul li').html(tagList);

            //더보기 클릭이벤트
            $('.event > a').click(function(){
                $('.event > a').fadeOut(200)
                for(var i=6; i<data.online2.length; i++){
                    tagList += `<a href="${data.online2[i].link}" target="_blank">
                                    <figure><img src="${data.online2[i].img}" alt=""></figure>
                                    <article>
                                        <div><img src="${data.online2[i].logo}" alt=""></div>
                                        <small>${data.online2[i].market}</small>
                                        <h2>${data.online2[i].title}</h2>
                                        <p>${data.online2[i].detail}</p>
                                        <span>
                                            <span></span>
                                            <span></span>
                                        </span>
                                    </article>
                                    <span><h2>${data.online2[i].tag}</h2></span>
                                </a>`
                }
                $('.event ul li').html(tagList);
                $(tagList).fadeIn(1000);
            })

        },
        error:function(){

        }
    })
})