$(function(){
    $.ajax({
        url:'data/data_online1e.json',
        success:function(data){

            let tagList='';
            for(var i=0; i<9; i++){
                tagList += `<a href="${data.online1e[i].link}" target="_blank">
                                <figure>
                                    <div><img src="${data.online1e[i].img1}" onmouseover="this.src='${data.online1e[i].img2}'" onmouseout="this.src='${data.online1e[i].img1}'" alt=""></div>
                                    <p><img src="${data.online1e[i].icon}" alt=""></p>
                                </figure>
                                <article>
                                    <small>${data.online1e[i].market}</small>
                                    <h2>${data.online1e[i].title}</h2>
                                    <div>
                                        <p>${data.online1e[i].sale}</p>
                                        <h3>${data.online1e[i].price}</h3>
                                        <p>${data.online1e[i].orig}</p>
                                    </div>
                                </article>
                            </a>`
            };
            $('.item .e').html(tagList);

            $('.item > p').click(function(){
                $('.item > p').fadeOut(200)
                for(var i=9; i<data.online1e.length; i++){
                    tagList += `<a href="${data.online1e[i].link}" target="_blank">
                                    <figure>
                                        <div><img src="${data.online1e[i].img1}" onmouseover="this.src='${data.online1e[i].img2}'" onmouseout="this.src='${data.online1e[i].img1}'" alt=""></div>
                                        <p><img src="${data.online1e[i].icon}" alt=""></p>
                                    </figure>
                                    <article>
                                        <small>${data.online1e[i].market}</small>
                                        <h2>${data.online1e[i].title}</h2>
                                        <div>
                                            <p>${data.online1e[i].sale}</p>
                                            <h3>${data.online1e[i].price}</h3>
                                            <p>${data.online1e[i].orig}</p>
                                        </div>
                                    </article>
                                </a>`
                };
                $('.item .e').html(tagList);
            })

        },
        error:function(){

        }
    })
})