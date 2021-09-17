$(function(){
    $.ajax({
        url:'data/data_online1.json',
        success:function(data){

            //상품탭
            const onTab = document.querySelectorAll('.onlinetab a'),
                onItem = document.querySelectorAll('.item > div');
            let num = 0;

            for(let i=0; i<onTab.length; i++){
                onTab[i].addEventListener('click',function(){
                    onTab[num].classList.remove('view');
                    onItem[num].classList.remove('view');

                    onTab[i].classList.add('view');
                    onItem[i].classList.add('view');
                    
                    num = i;


                    if(onItem[i].children.length < 9){
                        $('.item > p').fadeOut(10)
                    }else{
                        $('.item > p').fadeIn()
                    }
                    
                })
            }

            let tagListA='', tagListB='', tagListC='', tagListD='', tagListE='', tagListF='', tagListG='';

            //A
            for(var i=0; i<9; i++){
                tagListA += `<a href="${data.online1a[i].link}" target="_blank">
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
            $('.item .a').html(tagListA);

            //B
            for(let i=0; i<9; i++){
                tagListB += `<a href="${data.online1b[i].link}" target="_blank">
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
            $('.item .b').html(tagListB);

            //C
            for(var i=0; i<9; i++){
                tagListC += `<a href="${data.online1c[i].link}" target="_blank">
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
            $('.item .c').html(tagListC);

            // D
            for(var i=0; i<data.online1d.length; i++){
                tagListD += `<a href="${data.online1d[i].link}" target="_blank">
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
            $('.item .d').html(tagListD);

            // E
            for(var i=0; i<9; i++){
                tagListE += `<a href="${data.online1e[i].link}" target="_blank">
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
            $('.item .e').html(tagListE);

            // F
            for(var i=0; i<data.online1f.length; i++){
                tagListF += `<a href="${data.online1f[i].link}" target="_blank">
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
            $('.item .f').html(tagListF);

            // G
            for(var i=0; i<data.online1g.length; i++){
                tagListG += `<a href="${data.online1g[i].link}" target="_blank">
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
            $('.item .g').html(tagListG);



            // 더브기 클릭
            $('.item > p').click(function(){
                $('.item > p').fadeOut(200)

                // A
                for(var i=9; i<data.online1a.length; i++){
                    tagListA += `<a href="${data.online1a[i].link}" target="_blank">
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
                $('.item .a').html(tagListA);

                // B
                for(var i=9; i<data.online1b.length; i++){
                    tagListB += `<a href="${data.online1b[i].link}" target="_blank">
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
                $('.item .b').html(tagListB);

                // C
                for(var i=9; i<data.online1c.length; i++){
                    tagListC += `<a href="${data.online1c[i].link}" target="_blank">
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
                $('.item .c').html(tagListC);


                // E
                for(var i=9; i<data.online1e.length; i++){
                    tagListE += `<a href="${data.online1e[i].link}" target="_blank">
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
                $('.item .e').html(tagListE);

            })

        },
        error:function(){

        }
    })
})