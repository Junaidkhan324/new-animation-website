



$(document).ready(function(){
  
  gsap.fromTo(".tp", 1,  {yPercent:-90, opacity: 0, },{yPercent:0, opacity: 1, stagger:0.1, delay:3 })
  gsap.fromTo(".lr", 1,  {xPercent:-90, opacity: 0, },{xPercent:0, opacity: 1, stagger:0.1, delay:3 })
  gsap.fromTo(".rl", 1,  {xPercent:100, opacity: 0, },{xPercent:0, opacity: 1, stagger:0.1, delay:3 })
  gsap.fromTo(".h-p p", 1,  {yPercent:-90,  },{yPercent:0,  stagger:0.1 })

  gsap.to(".page-logo ", 1,  {delay:2, opacity:0})
  gsap.to(".pg-item ", 1,  {x:'100%',delay:2.2,stagger:0.1})
  gsap.to(".page-loder", 1,  {delay:2.2,zIndex:-1})

  gsap.timeline({
    scrollTrigger: {
      trigger: ".main-black",
      start: "1px 0%",
      end:"300% 0%",
      toggleActions:"restart none resume reverse",
      pin:true,
    }
  })

  let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-black",
        start: "0px 0%",
        end:"10% 0%",
        // markers:true,
        toggleActions:"restart none resume reverse",
      }
    })
    tl1.to(".scrol", 1,  {y:"-92vh", opacity: 1, duration:3})   
    .fromTo(".bt", 1,  {y:"0",duration:0.5},{y:"30", duration:"0.1s"})
    .fromTo(".tb", 1,  {y:"-60" },{y:"0" })


    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".our-project",
        start: "0% 0%",
        end:" 40% 0%",
        // markers:true,
        toggleActions:"restart none resume reverse",
      }
    })
    tl2.to(".inter-ss",1, {y:"0", duration:"0.1s"})
    .to(".gi", 1,  {x:"0" ,duration:"0.1s"})
    .to(".cg", 1,  {color:"#232221",}) 
    .to(".cga", 1,  {baclgroundColor:"#232221 !important",}) 
    .to(".et", 1,  {y:"-43",duration:"0.1s" })
    .to(".ft", 1,  {y:"0",duration:"0.1s" })
    

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".interiors-wrap",
        start: "180% 0%",
        end:"0% 0%",
        // markers:true,
        toggleActions:"restart none resume reverse",
      }
    })
    tl3.to(".i-w", 1,  {y:"-100vh", opacity: 1, duration:1})   
        .to(".ig", 1,  {color:"#ffffff",duration:"0.1s"})   
        .to(".fr-wrap", 1,  {x:30, opacity:0,duration:"0.1s"})   
        .to(".project-title", 1,  { x:-19, opacity:0,duration:"0.1s"})   

    // ------------------------slider-------------------------
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin:10,
        mouseDrag: false,
        scrollPerPage: true,
        // navigation : true, // Show next and prev buttons
        // slideSpeed : 300,
        // paginationSpeed : 400,
        // singleItem:true,  
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },            
            960:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    // scroll slider js 
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>1000) {
            owl.trigger('prev.owl');
        } else {
            owl.trigger('next.owl');
        }
        e.preventDefault();
    });
    // slider dots change to number
    jQuery('#tstpLightbox.twelvesteps').one('click', (function(){
      var i = 01;
      jQuery('.loop.twelvesteps .owl-dot').each(function(){
      jQuery(this).append(i)
      i++;
      });
    }));
    // mouse hover to add class
    $('.bro-c ').hover(
      function(){ $('.main-content').addClass('ccolor') },
      function(){ $('.main-content').removeClass('ccolor') }
    )
    $('.col-c').hover(
      function(){ $('.main-content').addClass('beut') },
      function(){ $('.main-content').removeClass('beut')}
    )
    $(".bro-c").click(function(){
      $(".main-content").toggleClass("mycolor");
      $(".main-content").removeClass("mybeut");
    });
    $(".col-c").click(function(){
      $(".main-content").toggleClass("mybeut");
      $(".main-content").removeClass("mycolor");
    });



    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".our-works",
        start: "0px 0%",
        end:"10% 0%",
        // markers:true,
        toggleActions:"restart none resume reverse",
      }
    })
    tl4.to(".scrol", 1,  {y:"-92vh", opacity: 1, duration:3})   
    .fromTo(".bt", 1,  {y:"0",duration:0.5},{y:"30", duration:"0.1s"})
    .fromTo(".tb", 1,  {y:"-60" },{y:"0" })




    gsap.to(".w-c-section1 .card, .w-c-section1 .card-img , .w-c-section1 img, .w-c-section1 h4", 1,  {
      y:"0", x:"0", scale:1, opacity: 1, duration:1,
      scrollTrigger: {
        trigger: ".w-c-section1",
        scrub:6,
        start: "0% 95%",
        end:"20% 95%",
        // markers:true,
        toggleActions:"restart none resume reverse",
      }
    })
    

    gsap.to(".w-c-section2 .card, .w-c-section2 .card-img , .w-c-section2 img, .w-c-section2 h4", 1,  {
      y:"0", x:"0", scale:1, opacity: 1, duration:1,
      scrollTrigger: {
        trigger: ".w-c-section2",
        scrub:6,
        start: "-30% 95%",
        end:"20% 95%",
        // markers:true,
        toggleActions:"restart none resume reverse",
      }
    })
    

    gsap.to(".w-c-section3 .card, .w-c-section3 .card-img , .w-c-section3 img, .w-c-section3 h4", 1,  {
      y:"0", x:"0", scale:1, opacity: 1, duration:1,
      scrollTrigger: {
        trigger: ".w-c-section3",
        scrub:6,
        start: "-30% 95%",
        end:"20% 95%",
        // markers:true,
        toggleActions:"restart none resume reverse",
      }
    })

    gsap.to(".w-c-section4 .card , .w-c-section4 .card-img , .w-c-section4 img, .w-c-section4 h4", 1,  {
      y:"0", x:"0", scale:1, opacity: 1, duration:1,
      scrollTrigger: {
        trigger: ".w-c-section3",
        scrub:6,
        start: "-30% 95%",
        end:"20% 95%",
        // markers:true,
        toggleActions:"restart none resume reverse",
      }
    })

    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".works-project",
        start: "0px 5%",
        end:"0% 0%",
        // markers:true,
        toggleActions:"restart none resume reverse",
      }
    })
    tl5.to(".works-inner", 1,  {y:"-100vh", opacity: 1, duration:3})   

    gsap.timeline({
      scrollTrigger: {
        trigger: ".works-inner",
        start: "0% 25%",
        end:"70% 25%",
        // markers:true,
        toggleActions:"restart none resume reverse",
        pin:".work-pro",
      }
    })  

});

$(document).ready(function() {
  $("#work-page").click(function() {
  $(".magicdiv4")
    .addClass('magictime')
    .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
    function() {
      alert('load next page here');
    });
  });
});

