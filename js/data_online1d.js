$(function(){
    $.ajax({
        url:'data/data_online1d.json',
        success:function(data){

            let tagList='';
            for(var i=0; i<data.online1d.length; i++){
                tagList += `<a href="${data.online1d[i].link}" target="_blank">
                                <figure>
                                    <div><img src="${data.online1d[i].img1}" onmouseover="this.src='${data.online1d[i].img2}'" onmouseout="this.src='${data.online1d[i].img1}'" alt=""></div>
                                    <p><img src="${data.online1d[i].icon}" alt=""></p>
                                </figure>
                                <article>
                                    <small>${data.online1d[i].market}</small>
                                    <h2>${data.online1d[i].title}</h2>
                                    <div>
                                        <p>${data.online1d[i].sale}</p>
                                        <h3>${data.online1d[i].price}</h3>
                                        <p>${data.online1d[i].orig}</p>
                                    </div>
                                </article>
                            </a>`
            };
            $('.item .d').html(tagList);
            
            $('.item > p').click(function(){
                $('.item > p').fadeOut(200)
            });
            
            // const itemBtn = document.querySelector('.item > div');
            // if( itemBtn.className == 'view' ){ itemBtn.style = 'display:none'}
        },
        error:function(){

        }
    })
})