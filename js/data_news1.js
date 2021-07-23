$(function(){
    $.ajax({
        url:'data/data_news1.json',
        success:function(data){
            let link, img, hover, date, title, detail, tagList='';
            data.news1.forEach(function(n){
                tagList += `<article>
                                <figure>
                                    <a href="${n.link}" target="_blank">
                                        <img src="${n.img}" alt="">
                                        <span><img src="${n.hover}" alt=""></span>
                                    </a>
                                </figure>   
                                <small>${n.date}</small>
                                <h2>${n.title}</h2>
                                <p>${n.detail}</p>
                            </article>`
            });
            $('.contents div').html(tagList);

        },
        error:function(){

        }
    })
})