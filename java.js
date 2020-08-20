// $(document).ready(function(){

//     // alert("det virker")

//     let timer;
//     let slidetoshow = 0;
//     let antalbilleder = $(".slide").length;
//     let billedbredde = $(".slide").width();

//     $("#slidecon").width(antalbilleder * billedbredde);

//     $(".slide").each(function(){

//         let nycirkel = $("<div></div>");

//         nycirkel.click(function(){

//             clearTimeout(timer)
//             slidetoshow = $(this).index();
//             animerSlideshow();
            
//         });

//         $("#circles").append(nycirkel);

//     })

//     function animerSlideshow() {

        

//         let nyvenstreposition = slidetoshow * billedbredde;
//         $("#slidecon").animate({"left" : -nyvenstreposition});

//         $("#circles div").removeClass("hilite")
//         $("#circles div").eq(slidetoshow).addClass("hilite")

        
//         slidetoshow = slidetoshow + 1;

//         if(slidetoshow >= antalbilleder) {
//             slidetoshow = 0;
//         }
//         timer = setTimeout(animerSlideshow, 4000);

//     }




// animerSlideshow();
// })

$(document).ready(function(){

    // alert("det virker")

    let timer;
    let slidetoshow = 0;
    let antalbilleder = $(".slider__content--img").length;
    let billedbredde = $(".slider__content--img").width();

    $("#slider__content").width(antalbilleder * billedbredde);

    $(".slider__content--img").each(function(){

        let nycirkel = $("<div></div>");

        nycirkel.click(function(){

            clearTimeout(timer)
            slidetoshow = $(this).index();
            animerSlideshow();
            
        });

        $("#circles").append(nycirkel);

    })

    function animerSlideshow() {

        

        let nyvenstreposition = slidetoshow * billedbredde;
        $("#slider__content").animate({"left" : -nyvenstreposition});

        $("#circles div").removeClass("hilite")
        $("#circles div").eq(slidetoshow).addClass("hilite")

        
        slidetoshow = slidetoshow + 1;

        if(slidetoshow >= antalbilleder) {
            slidetoshow = 0;
        }
        timer = setTimeout(animerSlideshow, 4000);

    }




animerSlideshow();
})



