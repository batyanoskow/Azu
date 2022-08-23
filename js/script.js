function header()
{
  
    if($(".menu__icon")){
        $(".menu__icon").click(function(){
            $(this).toggleClass("menu-open");
            $(".menu__body").toggleClass("_active");
         
        })
        $(".menu__item").click(function(){
            if($(window).width() > 991.99)
            {
                if($(".menu__moving-bar")){
                    $(".menu__moving-bar").css("width" , $(this).width() +'px');
                    if($(this).position().left == 0)
                    {
                      $(".menu__moving-bar").css("left" , ($(this).position().left +'px')  )
                    }
                    else if($(this).position().left != 0)
                    {
                      $(".menu__moving-bar").css("left" , ($(this).position().left  + 30  +'px')  )
                    }
              
                  }
            }
            else if($(window).width() < 991.99)
            {
                setTimeout(function(){
                    $(".menu__body").removeClass("_active");
                },200)
              
            }
         
        
        })
       
    }
    if($(window).width() < 991.99)
    {
        $(".social").remove();
        $(".menu__body").append(` <div class="menu__social social">
        <div class="social__media">
          <div class="social__item"><img src="../img/youtube.svg" alt=""></div>
          <div class="social__item"><img src="../img/facebook.svg" alt=""></div>
        </div>
        <div class="social__lang">
          <div class="social__item"><p>EN</p></div>
          <div class="social__item"><p>UA</p></div>
        </div>
      </div>`)
    
    }
    $(".social__item p").click(function(){
        $(".social__item p").removeClass("_active");
        $(this).addClass("_active");
    })
    //====================================//
    // if($(window).width() < 991.99)
    // {
    //   $(".pag1").remove();
    //   $(".help__inform").append(` <div class="swiper-pagination pag1">
       
    //   </div>`)
    // }
    
}
header()