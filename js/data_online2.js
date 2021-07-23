$(function(){
    $.ajax({
        url:'data/data_online2.json',
        success:function(data){
            let tagList='';
            data.online2.forEach(function(o){
                tagList += `<a href="${o.link}" target="_blank">
                                <figure><img src="${o.img}" alt=""></figure>
                                <article>
                                    <div><img src="${o.logo}" alt=""></div>
                                    <small>${o.market}</small>
                                    <h2>${o.title}</h2>
                                    <p>${o.detail}</p>
                                    <span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </article>
                                <span><h2>${o.tag}</h2></span>
                            </a>`
            });
            $('.event ul li').html(tagList);

        },
        error:function(){

        }
    })
})