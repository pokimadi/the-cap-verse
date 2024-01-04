fetch('./team.JSON')
    .then((response) => response.json())
    .then((json) => {
        let team = json;

        let countries = {
            'DUBAI': 'left: 58.6rem; top: 10.3rem;',
            'SERBIA': 'left: 52.8rem; top: 4.4rem;',
        };

        let news = { // for preview demo
            0: {
                'title': '1 Introducing new ways to collaborate and author with…',
                'date': '2022-09-01',
                'time': '17:53:57',
                'img': 'greenEnergyImage'
            },
            1: {
                'title': '2 Introducing new ways to collaborate and author with…',
                'date': '2022-09-04',
                'time': '12:28:42',
                'img': 'droneImage'
            },
            2: {
                'title': '3 Introducing new ways to collaborate and author with…',
                'date': '2022-09-07',
                'time': '19:15:16',
                'img': 'healthImage'
            },
            3: {
                'title': '4 Introducing new ways to collaborate and author with…',
                'date': '2022-09-12',
                'time': '14:20:18',
                'img': 'aboutImage'
            },
        };


        // preloader
        let typing = {
            text: "“THE ULTIMATE RISK IS NOT TAKING ONE”",
            index: 0,
            chars: 0,
            speed: 100,
            container: ".preloader .text",
            init: function() {
                this.chars = this.text.length;
                return this.write();
            },
            write: function() {
                $(this.container).append(this.text[this.index]);

                if (this.index < this.chars) {
                    this.index++;

                    return window.setTimeout(function() {
                        return typing.write();
                    }, this.speed);
                } else {
                    //$('.preloader .sign').css({'opacity': '1'});

                    setTimeout(() => {
                        $('.preloader .content').animate({
                            opacity: 0
                        }, 1000, function() {
                            $('.preloader').animate({
                                opacity: 0
                            }, 1000, function() {
                                $(this).remove();
                            });
                        });
                    }, 2500);
                };
            }
        };

        typing.init();


        // news for preview demo
        let updateNews = function(newsBlock) {
            let currentBtn = $(`${newsBlock} .selectline .btn.a`);

            let nextBtn = currentBtn.next();

            if (nextBtn.length < 1 || nextBtn.hasClass('cover')) {
                nextBtn = $($(`${newsBlock} .selectline .btn`)[0]);
            };

            let nextBtnIndex = nextBtn.index();

            $(`${newsBlock} .card .desc`).animate({
                opacity: 0
            }, 300, function() {
                $(`${newsBlock} .card .desc .title`).text(news[nextBtnIndex].title);
                $(`${newsBlock} .card .desc .row .info .col .date`).text(news[nextBtnIndex].date);
                $(`${newsBlock} .card .desc .row .info .col .time`).text(news[nextBtnIndex].time);
                
                $(`${newsBlock} .card .desc`).animate({
                    opacity: 1
                }, 700);
            });

            $(`${newsBlock} .card`).css({'background': `url('assets/img/${news[nextBtnIndex].img}.png') center / cover`})
            
            $(`${newsBlock} .number`).text(`0${nextBtnIndex + 1}`);

            currentBtn.removeClass('a');
            nextBtn.addClass('a');
        };

        setInterval(() => {
            updateNews('.block.news .content .news.desktop');
            updateNews('.block.news .content .news.mobile');
        }, 3000);

        $('.block.news .content .news .selectline').each(function() {
            $($(this).find('.btn')[0]).addClass('a');
        });

        $('.block.news .content .news .card .desc .title').text(Object.values(news)[0].title);
        $('.block.news .content .news .card .desc .row .info .col .date').text(Object.values(news)[0].date);
        $('.block.news .content .news .card .desc .row .info .col .time').text(Object.values(news)[0].time);


        // team block
        for (let [name, data] of Object.entries(team)) {
            $('.block.team .content .members').append(`
                <div class="card">
                    <img src="assets/img/${data.img}Icon.png">
                    <div class="name">${name}</div>
                    <div class="role">${data.role.short}</div>
                </div>
            `);

            $('.block.team.mobile .content .slides').append(`
                <div class="btn" name="${name}"></div>
            `);
        };


        // mobile team block
        /*$('.block.team.mobile .photos').append(`
            <img src="assets/img/${Object.values(team)[0].img}.png">
        `);*/

        setInterval(() => {
            /*let currentBtn = $('.block.team.mobile .content .slides .btn.a');

            let nextBtn = currentBtn.next();

            if (nextBtn.length < 1) {
                nextBtn = $($('.block.team.mobile .content .slides .btn')[0]);
            };

            let name = nextBtn.attr('name');

            currentBtn.removeClass('a');
            nextBtn.addClass('a');

            $('.block.team.mobile .content .info').animate({
                opacity: 0
            }, 300, function() {
                $('.block.team.mobile .content .name').text(name);
                $('.block.team.mobile .content .role .rolename').text(team[name].role.full)

                $('.block.team.mobile .content .info').animate({
                    opacity: 1
                }, 300);
            });

            $('.block.team.mobile .photos').animate({
                opacity: 0
            }, 300, function() {
                $('.block.team.mobile .photos img').remove();
                $('.block.team.mobile .photos').append(`
                    <img src="assets/img/${team[name].img}.png">
                `);

                $('.block.team.mobile .photos').animate({
                    opacity: 1
                }, 300);
            });*/
        }, 2000);

        $('.block.team.mobile .content .name').text(Object.keys(team)[0]); console.log(Object.keys(team)[0]);
        $('.block.team.mobile .content .role .rolename').text(Object.values(team)[0].role.full);
        $($('.block.team.mobile .content .slides .btn')[0]).addClass('a');


        // desktop team block
        $('.block.team .content .members .card').on('click', function() {
            let card = $(this);
            let name = card.find('.name').text();

            $('.block.team .content .members .card').removeClass('a');
            card.addClass('a');

            $('.block.team .content .member .text').animate()

            $('.block.team .content .member .text').animate({
                opacity: 0
            }, 300, function() {
                $('.block.team .content .member .text .desc').text(team[name].desc);
                $('.block.team .content .member .text .title .name').text(name);
                $('.block.team .content .member .text .role').text(team[name].role.full);

                $('.block.team .content .member .text').animate({
                    opacity: 1
                }, 300);
            });

            $('.block.team .content .member .photo .backgroundtext').animate({
                opacity: 0
            }, 300);

            $('.block.team .content .member .photo img').animate({
                left: "+=100%"
            }, 500, function() {
                $('.block.team .content .member .photo img').remove();

                $(`
                    <img src="assets/img/${team[name].img}.png" style="left: 100%">
                `).prependTo('.block.team .content .member .photo').animate({
                    left: "0"
                }, 500, function() {
                    $('.block.team .content .member .photo .backgroundtext').animate({
                        opacity: 1
                    }, 200);
                });
            });
        });

        $($('.block.team .content .members .card')[0]).click();


        // country on world map
        for (let [name, offset] of Object.entries(countries)) {
            $('.block.global .content .planet .world').append(`
                <img src="assets/svg/mapIcon.svg"  name="${name}" class="cityicon" style="${offset}">
            `);
        };

        $('.block.global .content .planet .world img').on('mouseover', function() {
            let cityName = $(this).attr('name');
            
            
            $('.block.global .content .planet .cityname').text(cityName);
        });

        $('.block.global .content .planet .cityname').text(Object.keys(countries)[0]);


        // smooth scroll to blocks
        $("a[href*='#']").on("click", function(e){
            let anchor = $($(this).attr('href'));

            $('html, body').stop().animate({
                scrollTop: anchor.offset().top
            }, 700);

            e.preventDefault();
            return false;
        });

                


        




        SmoothScroll({
            animationTime    : 700,
            stepSize         : 75,
            accelerationDelta : 20,  
            accelerationMax   : 2,   
            keyboardSupport   : true,  
            arrowScroll       : 50,
            pulseAlgorithm   : true,
            pulseScale       : 4,
            pulseNormalize   : 1,
            touchpadSupport   : true,
        });

        let galleryCointainer = document.getElementById("mobile-galley-flick")
        for (const x in team) {
            let div = document.createElement("div");
            div.className = "gallery-cell";
            div.style.width="100vw";
            galleryCointainer.appendChild(div);
            let photoDiv = document.createElement("div");
            photoDiv.className = "photo";
            div.appendChild(photoDiv);
            let img = document.createElement("img");
            img.src = "./assets/img/Croped/" + team[x].img + ".png";
            photoDiv.appendChild(img);
            let divPhotoLine = document.createElement("div");
            divPhotoLine.className = "line-flickity-image";
            photoDiv.appendChild(divPhotoLine);

            let divInfo = document.createElement("div");
            divInfo.className = "info";
            div.append(divInfo);
            let divName = document.createElement("div");
            divName.className="name";
            divName.innerHTML = x;
            divInfo.appendChild(divName);
            let divRole = document.createElement("div");
            divRole.className = "role";
            divRole.style.color = "#cccccc";
            divInfo.appendChild(divRole);
            let divLine = document.createElement("div");
            divLine.className = "line";
            divRole.appendChild(divLine);
            let divRolename = document.createElement("div");
            divRolename.className = "rolename";
            divRolename.innerHTML = team[x].role.full;
            divRole.appendChild(divRolename);
            let divR = document.createElement("div");
            divR.className = "r";
            divRole.appendChild(divR);
            
            
            
            /*<div class="line"></div>
            <div class="rolename">role</div>
            <div class="r"></div>*/

        }
    })


