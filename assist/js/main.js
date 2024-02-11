//footer slider start
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
//footer slider end
//mobile menu mmenu js start
document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#menu", {
            "offCanvas": {
                "position": "left"
            },
            "theme": "black-contrast",
            "navbars": [{
                "position": "top",
                "content": [
                    "searchfield"
                ]
            }]
        });
    }
);
//mobile menu mmenu js end

// desktop navbar search box js start
document.getElementById("small_srch").addEventListener("click", function () {
    var small_srch = document.getElementById("small_srch");
    var large_srch = document.getElementById("large_srch");

    small_srch.style.display = "none";
    large_srch.style.display = "block";
    large_srch.style.transform = "translateX(0)";
});
// desktop navbar search box js end

//slider js start
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    // loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    // mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
//slider js end

//counter section js start
$(document).ready(function () {
    // Check if the ".counter" section is visible on the screen
    function isElementVisible(element) {
        var rect = element.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    // Animate the count numbers when the ".counter" section becomes visible
    function animateCountNumbers() {
        $('.counting:not(.animated)').each(function () {
            if (isElementVisible(this)) {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 3000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        $this.addClass('animated');
                    }
                });
            }
        });
    }

    // Call the function when the page loads and when scrolling
    animateCountNumbers();
    $(window).scroll(animateCountNumbers);
});
//counter section js end
// AOS animation Media Query ->  business solution section start left box aos js start
function update_Aos_Attribute_l_box() {
    var elements = document.getElementsByClassName("aos-bs-l-box");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "fade-right");
        } else {
            element.setAttribute("data-aos", "fade-right");
        }
    }
}

update_Aos_Attribute_l_box();

window.addEventListener("resize", update_Aos_Attribute_l_box);
// AOS animation Media Query ->  business solution section left box aos js end

// AOS animation Media Query ->  business solution section right box aos js start
function update_Aos_Attribute_r_box() {
    var elements = document.getElementsByClassName("aos-bs-r-box");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "fade-left");
        } else {
            element.setAttribute("data-aos", "fade-left");
        }
    }
}

update_Aos_Attribute_r_box();

window.addEventListener("resize", update_Aos_Attribute_r_box);
// AOS animation Media Query ->  business solution section right box aos js end

// AOS animation Media Query ->  business solution section 1st card aos js start
function update_Aos_Attribute_b_s_card1() {
    var elements = document.getElementsByClassName("b_s_card1");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else {
            element.setAttribute("data-aos", "fade-right");
        }
    }
}

update_Aos_Attribute_b_s_card1();

window.addEventListener("resize", update_Aos_Attribute_b_s_card1);
// AOS animation Media Query ->  business solution section 1st card aos js end

// AOS animation Media Query ->  business solution section 2nd card aos js start
function update_Aos_Attribute_b_s_card2() {
    var elements = document.getElementsByClassName("b_s_card2");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else if (window.innerWidth < 992) {
            element.setAttribute("data-aos", "zoom-in-left");
        } else {
            element.setAttribute("data-aos", "zoom-in");
        }
    }
}

update_Aos_Attribute_b_s_card2();

window.addEventListener("resize", update_Aos_Attribute_b_s_card2);
// AOS animation Media Query ->  business solution section 2nd card aos js end

// AOS animation Media Query ->  business solution section 3rd card aos js start
function update_Aos_Attribute_b_s_card3() {
    var elements = document.getElementsByClassName("b_s_card3");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in-right");
        } else if (window.innerWidth < 992) {
            element.setAttribute("data-aos", "zoom-out-up");
        } else {
            element.setAttribute("data-aos", "zoom-in-left");
        }
    }
}

update_Aos_Attribute_b_s_card3();

window.addEventListener("resize", update_Aos_Attribute_b_s_card3);
// AOS animation Media Query ->  business solution section 3rd card aos js end

// AOS animation Media Query ->  counter section 2nd counter start
function update_Aos_Attribute_counter2() {
    var elements = document.getElementsByClassName("counter2");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in-left");
        } else {
            element.setAttribute("data-aos", "zoom-in");
        }
    }
}

update_Aos_Attribute_counter2();

window.addEventListener("resize", update_Aos_Attribute_counter2);
// AOS animation Media Query ->  counter section 2nd counter end
// AOS animation Media Query ->  counter section 3rd counter start
function update_Aos_Attribute_counter3() {
    var elements = document.getElementsByClassName("counter3");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "fade-right");
        } else {
            element.setAttribute("data-aos", "zoom-in");
        }
    }
}

update_Aos_Attribute_counter3();

window.addEventListener("resize", update_Aos_Attribute_counter3);
// AOS animation Media Query ->  counter section 3rd counter end
// AOS animation Media Query ->  counter section 4th counter start
function update_Aos_Attribute_counter4() {
    var elements = document.getElementsByClassName("counter4");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "fade-left");
        } else {
            element.setAttribute("data-aos", "fade-left");
        }
    }
}

update_Aos_Attribute_counter4();

window.addEventListener("resize", update_Aos_Attribute_counter4);
// AOS animation Media Query ->  counter section 4th counter end


// AOS animation Media Query ->  latest projects section 1st image js start
function update_Aos_Attribute_l_p_img1() {
    var elements = document.getElementsByClassName("l-p-img1");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else {
            element.setAttribute("data-aos", "fade-right");
        }
    }
}

update_Aos_Attribute_l_p_img1();

window.addEventListener("resize", update_Aos_Attribute_l_p_img1);
// AOS animation Media Query ->  latest projects section 1st image js end

// AOS animation Media Query ->  latest projects section 2nd image js start
function update_Aos_Attribute_l_p_img2() {
    var elements = document.getElementsByClassName("l-p-img2");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else if (window.innerWidth < 992) {
            element.setAttribute("data-aos", "fade-left");
        } else {
            element.setAttribute("data-aos", "zoom-in");
        }
    }
}

update_Aos_Attribute_l_p_img2();

window.addEventListener("resize", update_Aos_Attribute_l_p_img2);
// AOS animation Media Query ->  latest projects section 2nd image js end

// AOS animation Media Query ->  latest projects section 3rd image js start
function update_Aos_Attribute_l_p_img3() {
    var elements = document.getElementsByClassName("l-p-img3");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else if (window.innerWidth < 992) {
            element.setAttribute("data-aos", "fade-right");
        } else {
            element.setAttribute("data-aos", "fade-left");
        }
    }
}

update_Aos_Attribute_l_p_img3();

window.addEventListener("resize", update_Aos_Attribute_l_p_img3);
// AOS animation Media Query ->  latest projects section 3rd image js end
// AOS animation Media Query ->  latest projects section 4th image js start
function update_Aos_Attribute_l_p_img4() {
    var elements = document.getElementsByClassName("l-p-img4");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else if (window.innerWidth < 992) {
            element.setAttribute("data-aos", "fade-left");
        } else {
            element.setAttribute("data-aos", "fade-right");
        }
    }
}

update_Aos_Attribute_l_p_img4();

window.addEventListener("resize", update_Aos_Attribute_l_p_img4);
// AOS animation Media Query ->  latest projects section 4th image js end
// AOS animation Media Query ->  latest projects section 5th image js start
function update_Aos_Attribute_l_p_img5() {
    var elements = document.getElementsByClassName("l-p-img5");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else if (window.innerWidth < 992) {
            element.setAttribute("data-aos", "fade-right");
        } else {
            element.setAttribute("data-aos", "zoom-in");
        }
    }
}

update_Aos_Attribute_l_p_img5();

window.addEventListener("resize", update_Aos_Attribute_l_p_img5);
// AOS animation Media Query ->  latest projects section 5th image js end
// AOS animation Media Query ->  latest projects section 6th image js start
function update_Aos_Attribute_l_p_img6() {
    var elements = document.getElementsByClassName("l-p-img6");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else {
            element.setAttribute("data-aos", "fade-left");
        }
    }
}

update_Aos_Attribute_l_p_img6();

window.addEventListener("resize", update_Aos_Attribute_l_p_img6);
// AOS animation Media Query ->  latest projects section 6th image js end

// AOS animation Media Query ->  meet the team section 1st image js start
function update_Aos_Attribute_team_img1() {
    var elements = document.getElementsByClassName("team_img1");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else {
            element.setAttribute("data-aos", "fade-right");
        }
    }
}

update_Aos_Attribute_team_img1();

window.addEventListener("resize", update_Aos_Attribute_team_img1);
// AOS animation Media Query ->  meet the team section 1st image js end

// AOS animation Media Query ->  meet the team section 2nd image js start
function update_Aos_Attribute_team_img2() {
    var elements = document.getElementsByClassName("team_img2");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else if (window.innerWidth < 992) {
            element.setAttribute("data-aos", "fade-left");
        } else {
            element.setAttribute("data-aos", "zoom-in");
        }
    }
}

update_Aos_Attribute_team_img2();

window.addEventListener("resize", update_Aos_Attribute_team_img2);
// AOS animation Media Query ->  meet the team section 2nd image js end

// AOS animation Media Query ->  meet the team section 3rd image js start
function update_Aos_Attribute_team_img3() {
    var elements = document.getElementsByClassName("team_img3");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else if (window.innerWidth < 992) {
            element.setAttribute("data-aos", "fade-right");
        } else {
            element.setAttribute("data-aos", "zoom-in");
        }
    }
}

update_Aos_Attribute_team_img3();

window.addEventListener("resize", update_Aos_Attribute_team_img3);
// AOS animation Media Query ->  meet the team section 3rd image js end

// AOS animation Media Query ->  meet the team section 4th image js start
function update_Aos_Attribute_team_img4() {
    var elements = document.getElementsByClassName("team_img4");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else {
            element.setAttribute("data-aos", "fade-left");
        }
    }
}

update_Aos_Attribute_team_img4();

window.addEventListener("resize", update_Aos_Attribute_team_img4);
// AOS animation Media Query ->  meet the team section 4th image js end

// AOS animation Media Query ->  Phone email location section 1st card js start
function update_Aos_Attribute_p_e_l_card1() {
    var elements = document.getElementsByClassName("p_e_l_card1");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 576) {
            element.setAttribute("data-aos", "zoom-in");
        } else {
            element.setAttribute("data-aos", "fade-right");
        }
    }
}

update_Aos_Attribute_p_e_l_card1();

window.addEventListener("resize", update_Aos_Attribute_p_e_l_card1);
// AOS animation Media Query ->  Phone email location section 1st card js end
// AOS animation Media Query ->  Phone email location section 2nd card js start
function update_Aos_Attribute_p_e_l_card2() {
    var elements = document.getElementsByClassName("p_e_l_card2");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 576) {
            element.setAttribute("data-aos", "zoom-in");
        } else if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "fade-left");
        } else {
            element.setAttribute("data-aos", "zoom-in");
        }
    }
}

update_Aos_Attribute_p_e_l_card2();

window.addEventListener("resize", update_Aos_Attribute_p_e_l_card2);
// AOS animation Media Query ->  Phone email location section 2nd card js end

// AOS animation Media Query ->  Phone email location section 3rd card js start
function update_Aos_Attribute_p_e_l_card3() {
    var elements = document.getElementsByClassName("p_e_l_card3");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (window.innerWidth < 768) {
            element.setAttribute("data-aos", "zoom-in");
        } else {
            element.setAttribute("data-aos", "fade-left");
        }
    }
}

update_Aos_Attribute_p_e_l_card3();

window.addEventListener("resize", update_Aos_Attribute_p_e_l_card3);
// AOS animation Media Query ->  Phone email location section 3rd card js end



//   auto type js start 
var typed = new Typed('.auto_type1', {
    strings: ["row Your"],
    startDelay: 300,
    typeSpeed: 100,
    cursorChar: "",
    // backSpeed: 1000,
    // loop: true
});
var typeb = new Typed('.auto_type2', {
    strings: ["usiness With Us"],
    typeSpeed: 46,
    startDelay: 300,
    smartBackspace: true,
    cursorChar: "",
    // backSpeed: 50,
    // loop:true
});
var typeb = new Typed('.ft_text', {
    strings: ["Md.Nazmul Hasan Akash", "akash", "Nazmul"],
    typeSpeed: 50,
    smartBackspace: true,
    cursorChar: "|",
    backSpeed: 50,
    loop: true
});
// auto type js end



//aos Initialize js start 
AOS.init({
    offset: 100,
    duration: 600
});
//aos Initialize js end