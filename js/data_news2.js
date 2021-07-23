$(function(){
    $.ajax({
        url:'data/data_news2.json',
        success:function(data){
            let link, img, hover, date, title, tagList='';
            data.news2.forEach(function(n){
                tagList += `<article>
                                <figure>
                                    <a href="${n.link}"target="_blank">
                                        <img src="${n.img}" alt="">
                                        <span><img src="${n.hover}" alt=""></span>
                                    </a>
                                </figure>
                                <small>${n.date}</small>
                                <a href="${n.link}" target="_blank">
                                    <h2>${n.title}</h2>
                                </a>
                            </article>`
            });
            $('.contents div').html(tagList);
        },
        error:function(){}
    })
})