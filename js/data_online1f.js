$(function(){
    $.ajax({
        url:'data/data_online1f.json',
        success:function(data){

            let tagList='';
            for(var i=0; i<data.online1f.length; i++){
                tagList += `<a href="${data.online1f[i].link}" target="_blank">
                                <figure>
                                    <div><img src="${data.online1f[i].img1}" onmouseover="this.src='${data.online1f[i].img2}'" onmouseout="this.src='${data.online1f[i].img1}'" alt=""></div>
                                    <p><img src="${data.online1f[i].icon}" alt=""></p>
                                </figure>
                                <article>
                                    <small>${data.online1f[i].market}</small>
                                    <h2>${data.online1f[i].title}</h2>
                                    <div>
                                        <p>${data.online1f[i].sale}</p>
                                        <h3>${data.online1f[i].price}</h3>
                                        <p>${data.online1f[i].orig}</p>
                                    </div>
                                </article>
                            </a>`
            };
            $('.item .f').html(tagList);
            
            $('.item > p').click(function(){
                $('.item > p').fadeOut(200)
            });

        },
        error:function(){

        }
    })
})