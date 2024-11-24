const cabins = new Swiper('.cabins__slider', {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".cabins__pagination",
        clickable: true,
    },

    })

    const mainSlider = new Swiper('.slider__inner', {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: 'true',
    pagination: {
        el: ".slider__pagination",
        type: "progressbar"
    },
    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
    }

    })