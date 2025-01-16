$(function(){

    //Scroll event
    $(window).scroll(function(){
      var scrolled = $(window).scrollTop();
      total = $(window).scrollTop() + $(window).height();
      diff = $(document).height() - 147;
      if($(window).scrollTop() + $(window).height() >= $(document).height() - 147) {
          $('.go-top').css("bottom", total - diff+'px');
          $('.enquiry-mobile').css("bottom", total - diff+'px');
          $('.brochure-mobile').css("bottom", total - diff+'px');
          $('.Contact').css("bottom", total - diff+'px');
      }else{
          $('.go-top').css("bottom", "12px");
          $('.enquiry-mobile').css("bottom", "12px");
          $('.brochure-mobile').css("bottom", "12px");
          $('.Contact').css("bottom", "0px");
          
      }
      if (scrolled > 200) $('.go-top').fadeIn('slow');
      if (scrolled < 200) $('.go-top').fadeOut('slow');
    });
    
    //Click event
    $('.go-top').click(function () {
      $("html, body").animate({ scrollTop: "0" },  2000);
    });

    //Scroll event landing page
    $(window).scroll(function(){
      var scrolled = $(window).scrollTop();
      total = $(window).scrollTop() + $(window).height();
      var specific = $('#stop_top').offset().top;
      exact = total - specific + 5;
      if($(window).scrollTop() + $(window).height() >= specific) {
          $('.landGo-top').css("bottom", exact+'px');
          $('.landBrochure-mobile').css("bottom", exact+'px');
      }else{
          $('.landGo-top').css("bottom", "91px");
          $('.landBrochure-mobile').css("bottom", "91px");
      }
      if (scrolled > 200) $('.landGo-top').fadeIn('slow');
      if (scrolled < 200) $('.landGo-top').fadeOut('slow');
    });
    
    //Click event
    $('.landGo-top').click(function () {
      $("html, body").animate({ scrollTop: "0" },  2000);
    });
  
  });

