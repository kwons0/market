$(function(){
    $.ajax({
        url:'data/data_online1b.json',
        success:function(data){

            let tagList='';
            for(let i=0; i<9; i++){
                tagList += `<a href="${data.online1b[i].link}" target="_blank">
                                <figure>
                                    <div><img src="${data.online1b[i].img1}" onmouseover="this.src='${data.online1b[i].img2}'" onmouseout="this.src='${data.online1b[i].img1}'" alt=""></div>
                                    <p><img src="${data.online1b[i].icon}" alt=""></p>
                                </figure>
                                <article>
                                    <small>${data.online1b[i].market}</small>
                                    <h2>${data.online1b[i].title}</h2>
                                    <div>
                                        <p>${data.online1b[i].sale}</p>
                                        <h3>${data.online1b[i].price}</h3>
                                        <p>${data.online1b[i].orig}</p>
                                    </div>
                                </article>
                            </a>`
            };
            $('.item .b').html(tagList);
            

            $('.item > p').click(function(){
                $('.item > p').fadeOut(200)
                for(var i=9; i<data.online1b.length; i++){
                    tagList += `<a href="${data.online1b[i].link}" target="_blank">
                                    <figure>
                                        <div><img src="${data.online1b[i].img1}" onmouseover="this.src='${data.online1b[i].img2}'" onmouseout="this.src='${data.online1b[i].img1}'" alt=""></div>
                                        <p><img src="${data.online1b[i].icon}" alt=""></p>
                                    </figure>
                                    <article>
                                        <small>${data.online1b[i].market}</small>
                                        <h2>${data.online1b[i].title}</h2>
                                        <div>
                                            <p>${data.online1b[i].sale}</p>
                                            <h3>${data.online1b[i].price}</h3>
                                            <p>${data.online1b[i].orig}</p>
                                        </div>
                                    </article>
                                </a>`
                };
                $('.item .b').html(tagList);
            })


        },
        error:function(){

        }
    })
})