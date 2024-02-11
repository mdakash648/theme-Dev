var swiper = new Swiper(".FT_mySwiper", {
    slidesPerView: getSlidesPerView(),
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    }
});

function getSlidesPerView() {
    var screenWidth = window.innerWidth;
    if (screenWidth < 576) {
        return 1;
    } else if (screenWidth < 768) {
        return 3;
    } else if (screenWidth < 992) {
        return 4;
    } else {
        return 5;
    }
}

window.addEventListener('resize', function () {
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.update();
});


