export const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 2
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ]
};
