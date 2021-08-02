$(function(){
    $.ajax({
        url:'data/data_online1g.json',
        success:function(data){

            let tagList='';
            for(var i=0; i<data.online1g.length; i++){
                tagList += `<a href="${data.online1g[i].link}" target="_blank">
                                <figure>
                                    <div><img src="${data.online1g[i].img1}" onmouseover="this.src='${data.online1g[i].img2}'" onmouseout="this.src='${data.online1g[i].img1}'" alt=""></div>
                                    <p><img src="${data.online1g[i].icon}" alt=""></p>
                                </figure>
                                <article>
                                    <small>${data.online1g[i].market}</small>
                                    <h2>${data.online1g[i].title}</h2>
                                    <div>
                                        <p>${data.online1g[i].sale}</p>
                                        <h3>${data.online1g[i].price}</h3>
                                        <p>${data.online1g[i].orig}</p>
                                    </div>
                                </article>
                            </a>`
            };
            $('.item .g').html(tagList);
            
            $('.item > p').click(function(){
                $('.item > p').fadeOut(200)
            });

        },
        error:function(){

        }
    })
})