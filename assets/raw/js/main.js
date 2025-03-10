$(document).ready(function(){

    if(page == 'main') {
        //bg fix on ie
        objectFitVideos();

        //SKETCH
        function Particle( x, y, radius ) {
            this.init( x, y, radius );
        }
        Particle.prototype = {
            init: function( x, y, radius ) {
                this.alive = true;
                this.radius = radius || 10;
                this.wander = 0.15;
                this.theta = random( TWO_PI );
                this.drag = 0.92;
                this.color = '#fff';
                this.x = x || 0.0;
                this.y = y || 0.0;
                this.vx = 0.0;
                this.vy = 0.0;
            },
            move: function() {
                this.x += this.vx;
                this.y += this.vy;
                this.vx *= this.drag;
                this.vy *= this.drag;
                this.theta += random( -0.5, 0.5 ) * this.wander;
                this.vx += sin( this.theta ) * 0.1;
                this.vy += cos( this.theta ) * 0.1;
                this.radius *= 0.96;
                this.alive = this.radius > 0.5;
            },
            draw: function( ctx ) {
                ctx.beginPath();
                ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        };
        //sketch settings
        var MAX_PARTICLES = 280;
        var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
        var particles = [];
        var pool = [];
        var demo = Sketch.create({
            container: document.getElementById( 'forSketch' )
        });
        demo.setup = function() {
            // Set off some initial particles.
            var i, x, y;

            for ( i = 0; i < 20; i++ ) {
                x = ( demo.width * 0.5 ) + random( -100, 100 );
                y = ( demo.height * 0.5 ) + random( -100, 100 );
                demo.spawn( x, y );
            }
        };
        demo.spawn = function( x, y ) {
            if ( particles.length >= MAX_PARTICLES )
                pool.push( particles.shift() );
            particle = pool.length ? pool.pop() : new Particle();
            particle.init( x, y, random( 5, 40 ) );
            particle.wander = random( 0.5, 2.0 );
            particle.color = random( COLOURS );
            particle.drag = random( 0.9, 0.99 );
            theta = random( TWO_PI );
            force = random( 2, 8 );
            particle.vx = sin( theta ) * force;
            particle.vy = cos( theta ) * force;
            particles.push( particle );
        };

        demo.update = function() {
            var i, particle;
            for ( i = particles.length - 1; i >= 0; i-- ) {

                particle = particles[i];

                if ( particle.alive ) particle.move();
                else pool.push( particles.splice( i, 1 )[0] );
            }
        };
        demo.draw = function() {
            demo.globalCompositeOperation  = 'lighter';
            for ( var i = particles.length - 1; i >= 0; i-- ) {
                particles[i].draw( demo );
            }
        };
        demo.mousemove = function() {
            var particle, theta, force, touch, max, i, j, n;
            for ( i = 0, n = demo.touches.length; i < n; i++ ) {
                touch = demo.touches[i], max = random( 1, 4 );
                for ( j = 0; j < max; j++ ) demo.spawn( touch.x, touch.y );
            }
        };
        //SKETCH END

        //audio player
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', $('.active-song').attr('data-src'));

        var tl = new TimelineMax();
        tl.to('.player__albumImg', 3, {
            rotation: '360deg',
            repeat: -1,
            ease: Power0.easeNone
        }, '-=0.2');
        tl.pause();

        $('.player__play').click(function () {

            if ($('.player').hasClass('play')) {
                $('.player').removeClass('play');
                audioElement.pause();
                TweenMax.to('.player__albumImg', 0.2, {
                    scale: 1,
                    ease: Power0.easeNone
                })
                tl.pause();
            } else {
                $('.player').addClass('play');
                audioElement.play();
                TweenMax.to('.player__albumImg', 0.2, {
                    scale: 1.1,
                    ease: Power0.easeNone
                })
                tl.resume();
            }

        });

        var playhead = document.getElementById("playhead");
        audioElement.addEventListener("timeupdate", function () {
            var duration = this.duration;
            var currentTime = this.currentTime;
            var percentage = (currentTime / duration) * 100;
            playhead.style.width = percentage * 4 + 'px';
        });

        function updateInfo() {
            $('.player__author').text($('.active-song').attr('data-author'));
            $('.player__song').text($('.active-song').attr('data-song'));
        }
        updateInfo();

        $('.player__next').click(function () {
            if ($('.player .player__albumImg.active-song').is(':last-child')) {
                $('.player__albumImg.active-song').removeClass('active-song');
                $('.player .player__albumImg:first-child').addClass('active-song');
                audioElement.addEventListener("timeupdate", function () {
                    var duration = this.duration;
                    var currentTime = this.currentTime;
                    var percentage = (currentTime / duration) * 100;
                    playhead.style.width = percentage * 4 + 'px';
                });
            } else {
                $('.player__albumImg.active-song').removeClass('active-song').next().addClass('active-song');
                audioElement.addEventListener("timeupdate", function () {
                    var duration = this.duration;
                    var currentTime = this.currentTime;
                    var percentage = (currentTime / duration) * 100;
                    playhead.style.width = percentage + '%';
                });
            }
            updateInfo();
            audioElement.setAttribute('src', $('.active-song').attr('data-src'));
            audioElement.play();
        });

        $('.player__prev').click(function () {
            if ($('.player .player__albumImg.active-song').is(':first-child')) {
                $('.player__albumImg.active-song').removeClass('active-song');
                $('.player .player__albumImg:last-child').addClass('active-song');
                audioElement.addEventListener("timeupdate", function () {
                    var duration = this.duration;
                    var currentTime = this.currentTime;
                    var percentage = (currentTime / duration) * 100;
                    playhead.style.width = percentage * 4 + 'px';
                });
            } else {
                $('.player__albumImg.active-song').removeClass('active-song').prev().addClass('active-song');
                audioElement.addEventListener("timeupdate", function () {
                    var duration = this.duration;
                    var currentTime = this.currentTime;
                    var percentage = (currentTime / duration) * 100;
                    playhead.style.width = percentage + 'px';
                });
            }
            updateInfo();
            audioElement.setAttribute('src', $('.active-song').attr('data-src'));
            audioElement.play();
        });
        //audio player end
    }



    //mobile menu
    $('.content-wrap__menu-btn').on('click', function(e){
        var menu = $('.content-wrap__menu');
        e.stopPropagation();
        if(menu.is(':visible')) {
            menu.fadeOut(0);
            $(this).css('left', '0').html('<span>Meniu</span>');
        } else {
            $(this).html('<span>Close</span>');
            menu.css('z-index', '20').fadeIn(0);
        }
    });

    if (($(window).width() <= 691)) {
        $('body').on('click', function (e) {
            if($('.content-wrap__menu').is(":visible")){
                $('.content-wrap__menu').fadeOut(0);
                $('.content-wrap__menu-btn').css('left', '0').html('<span>Meniu</span>');
            }
        });
    }
    //mobile menu end



    //menu hover random color
    var colours = ['color1', 'color2', 'color3'];

        $('.menu-list li').hover(function() {
            colours.sort(function() {return 0.5 - Math.random()});
            $(this).addClass(colours[0]);
        }, function() {
            $(this).removeClass(colours[0]);
        });
    //menu hover random color end


    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    });




});



