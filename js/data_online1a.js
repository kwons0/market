$(function(){
    $.ajax({
        url:'data/data_online1a.json',
        success:function(data){
            let tagList='';
            data.online1.forEach(function(o){
                tagList += `<a href="${o.link}" target="_blank">
                                <figure>
                                    <div><img src="${o.img1}" onmouseover="this.src='${o.img2}'" onmouseout="this.src='${o.img1}'" alt=""></div>
                                    <span><b>${o.tag}</b></span>
                                    <p><img src="${o.icon}" alt=""></p>
                                </figure>
                                <article>
                                    <small>${o.market}</small>
                                    <h2>${o.title}</h2>
                                    <div>
                                        <p>${o.sale}</p>
                                        <h3>${o.price}</h3>
                                        <p>${o.orig}</p>
                                    </div>
                                </article>
                            </a>`
            });
            $('.item div').html(tagList);

        },
        error:function(){

        }
    })
})