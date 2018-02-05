
$(document).ready(function() {

  
    var a = 0;
    $(window).scroll(function() {
        var oTop = $(".skill").offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $(".html").animate({width: "95%"});
            $(".css").animate({width: "90%"});
            $(".javaScript").animate({width: "85%"});
            $(".responsive ").animate({width: "90%"});
            $(".wordPress ").animate({width: "95%"});
            $(".woocommerce ").animate({width: "80%"});
            $(".shopify ").animate({width: "75%"});
            $(".photoshop ").animate({width: "70%"});
            $(".email ").animate({width: "65%"});
            a = 1;
        };
    });

    $('.humbager svg').click(function() {
      $(".mobile-menu nav").toggleClass('mobile-nav-active');
    });

    $('.mobile-menu nav a').click(function() {
      $(".mobile-menu nav").removeClass('mobile-nav-active');
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 725) {
            $(".menu, .mobile-menu").addClass("fixed");
        } else {
            $(".menu, .mobile-menu").removeClass("fixed");
        }
        if ($(document).scrollTop() > 100) {
            $(".menu nav a:nth-child(1)").addClass("nav-active");
            $(".menu nav a:nth-child(2), .menu nav a:nth-child(3), .menu nav a:nth-child(4), .menu nav a:nth-child(5), .menu nav a:nth-child(6)").removeClass("nav-active");
        }
        if ($(document).scrollTop() > 700) {
            $(".menu nav a:nth-child(2)").addClass("nav-active");
            $(".menu nav a:nth-child(1), .menu nav a:nth-child(3), .menu nav a:nth-child(4), .menu nav a:nth-child(5), .menu nav a:nth-child(6)").removeClass("nav-active");
        }
        if ($(document).scrollTop() > 1500) {
            $(".menu nav a:nth-child(3)").addClass("nav-active");
            $(".menu nav a:nth-child(1), .menu nav a:nth-child(2), .menu nav a:nth-child(4), .menu nav a:nth-child(5), .menu nav a:nth-child(6)").removeClass("nav-active");
        }
        if ($(document).scrollTop() > 3100) {
            $(".menu nav a:nth-child(4)").addClass("nav-active");
            $(".menu nav a:nth-child(1), .menu nav a:nth-child(2), .menu nav a:nth-child(3), .menu nav a:nth-child(5), .menu nav a:nth-child(6)").removeClass("nav-active");
        }
        // if ($(document).scrollTop() > 3520) {
        //     $(".menu nav a:nth-child(5)").addClass("nav-active");
        //     $(".menu nav a:nth-child(1), .menu nav a:nth-child(2), .menu nav a:nth-child(3), .menu nav a:nth-child(4), .menu nav a:nth-child(6)").removeClass("nav-active");
        // }
        if ($(document).scrollTop() > 3800) {
            $(".menu nav a:nth-child(5)").addClass("nav-active");
            $(".menu nav a:nth-child(1), .menu nav a:nth-child(2), .menu nav a:nth-child(3), .menu nav a:nth-child(4), .menu nav a:nth-child(6)").removeClass("nav-active");
        }
        
    });

    $(".header-btn button.skewSwipe").click(function() {
        $('html, body').animate({
            scrollTop: parseInt($("#about").offset().top)
        }, 1000);
    });

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  window.sr = ScrollReveal();
  sr.reveal('.about-heading',{
    duration: 2000,
    // origin: 'left'
  });
  sr.reveal('.left-content',{
    duration: 2000,
    delay: 200,
    origin: 'left'
  });
  sr.reveal('.middle-content',{
    duration: 2000,
    delay: 500,
    // origin: 'left'
  });
  sr.reveal('.right-content',{
    duration: 2000,
    delay: 700,
    // origin: 'left'
  });
  sr.reveal('.skill',{
    duration: 2000,
    // origin: 'left'
  });
  sr.reveal('.codepen',{
    duration: 2000,
    // origin: 'left'
  });
  sr.reveal('.github',{
    duration: 2000,
    delay: 500,
    // origin: 'left'
  });
  sr.reveal('.work-title',{
    duration: 2000,
    // origin: 'left',
  });
  sr.reveal('.portfolio-item',{
    duration: 1500,
    delay: 200,
    // origin: 'bottom',
    // distance: '70px',
    viewFactor: 0.5
  });
  sr.reveal('.portfolio-item.nd',{
    duration: 1500,
    delay: 500,
    // origin: 'bottom',
    // distance: '70px',
    viewFactor: 0.5

  });
  sr.reveal('.service-item',{
    duration: 2000,
    viewFactor: 0.5
  });
  sr.reveal('.service-item.nd',{
    duration: 2000,
    delay: 200,
    viewFactor: 0.5
  });

  sr.reveal('.service-item.rd',{
    duration: 2000,
    delay: 500,
    viewFactor: 0.5
  });

  sr.reveal('.form-container',{
    duration: 1500,
    delay: 200,
    viewFactor: 0.5
  });
  var Body = $('body');
  Body.addClass('loaded');
  // $(window).load(function() {
  //   $('body').addClass('loaded');
  // }); 


  var scene = $('.parallax-content ul').get(0);
  console.log(scene);
  
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true
  });
  parallaxInstance.friction(0.2, 0.2);
  console.log(parallaxInstance);
  
  
});
