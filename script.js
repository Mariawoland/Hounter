var swiper = new Swiper(".mySwiperOne", {
    slidesPerView: 1.7,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


function myFunction(x) {
    if (x.matches) { // If media query matches
        var swiper = new Swiper(".mySwiperTwo", {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } else {
        var swiper = new Swiper(".mySwiperTwo", {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
            initialSlide: 1,
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}


var swiper = new Swiper(".mySwiperThree", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 70,
    initialSlide: 1,

});

var x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes