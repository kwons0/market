$(function(){
    $.ajax({
        url:'data/data_online1a.json',
        success:function(data){

            let tagList='';
            for(var i=0; i<9; i++){
                tagList += `<a href="${data.online1a[i].link}" target="_blank">
                                <figure>
                                    <div><img src="${data.online1a[i].img1}" onmouseover="this.src='${data.online1a[i].img2}'" onmouseout="this.src='${data.online1a[i].img1}'" alt=""></div>
                                    <p><img src="${data.online1a[i].icon}" alt=""></p>
                                </figure>
                                <article>
                                    <small>${data.online1a[i].market}</small>
                                    <h2>${data.online1a[i].title}</h2>
                                    <div>
                                        <p>${data.online1a[i].sale}</p>
                                        <h3>${data.online1a[i].price}</h3>
                                        <p>${data.online1a[i].orig}</p>
                                    </div>
                                </article>
                            </a>`
            };
            $('.item .a').html(tagList);

            $('.item > p').click(function(){
                $('.item > p').fadeOut(200)
                for(var i=9; i<data.online1a.length; i++){
                    tagList += `<a href="${data.online1a[i].link}" target="_blank">
                                    <figure>
                                        <div><img src="${data.online1a[i].img1}" onmouseover="this.src='${data.online1a[i].img2}'" onmouseout="this.src='${data.online1a[i].img1}'" alt=""></div>
                                        <p><img src="${data.online1a[i].icon}" alt=""></p>
                                    </figure>
                                    <article>
                                        <small>${data.online1a[i].market}</small>
                                        <h2>${data.online1a[i].title}</h2>
                                        <div>
                                            <p>${data.online1a[i].sale}</p>
                                            <h3>${data.online1a[i].price}</h3>
                                            <p>${data.online1a[i].orig}</p>
                                        </div>
                                    </article>
                                </a>`
                };
                $('.item .a').html(tagList);
            })

        },
        error:function(){

        }
    })
})