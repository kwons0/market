$(function(){
    $.ajax({
        url:'data/data_online1c.json',
        success:function(data){

            let tagList='';
            for(var i=0; i<9; i++){
                tagList += `<a href="${data.online1c[i].link}" target="_blank">
                                <figure>
                                    <div><img src="${data.online1c[i].img1}" onmouseover="this.src='${data.online1c[i].img2}'" onmouseout="this.src='${data.online1c[i].img1}'" alt=""></div>
                                    <p><img src="${data.online1c[i].icon}" alt=""></p>
                                </figure>
                                <article>
                                    <small>${data.online1c[i].market}</small>
                                    <h2>${data.online1c[i].title}</h2>
                                    <div>
                                        <p>${data.online1c[i].sale}</p>
                                        <h3>${data.online1c[i].price}</h3>
                                        <p>${data.online1c[i].orig}</p>
                                    </div>
                                </article>
                            </a>`
            };
            $('.item .c').html(tagList);

            $('.item > p').click(function(){
                $('.item > p').fadeOut(200)
                for(var i=9; i<data.online1c.length; i++){
                    tagList += `<a href="${data.online1c[i].link}" target="_blank">
                                    <figure>
                                        <div><img src="${data.online1c[i].img1}" onmouseover="this.src='${data.online1c[i].img2}'" onmouseout="this.src='${data.online1c[i].img1}'" alt=""></div>
                                        <p><img src="${data.online1c[i].icon}" alt=""></p>
                                    </figure>
                                    <article>
                                        <small>${data.online1c[i].market}</small>
                                        <h2>${data.online1c[i].title}</h2>
                                        <div>
                                            <p>${data.online1c[i].sale}</p>
                                            <h3>${data.online1c[i].price}</h3>
                                            <p>${data.online1c[i].orig}</p>
                                        </div>
                                    </article>
                                </a>`
                };
                $('.item .c').html(tagList);
            })

        },
        error:function(){

        }
    })
})