
    const btnSt = document.querySelector('.scroll-top');
    // var st = $(".btn-scroll-top");
  
    // $(window).scroll(function() {

    //   var topPos = $(this).scrollTop();
  
    //   if (topPos > 100) {
    //     $(st).css("opacity", "1");
  
    //   } else {
    //     $(st).css("opacity", "0");
    //   }
  
    // }); 
  

    $(btnSt).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
  
    });
