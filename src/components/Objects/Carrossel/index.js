import Slider from "react-slick";

function Carroussel({ children }) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        //slidesToShow: 3,
        slidesToScroll: 1,
    };

    return(
        <Slider {...settings}>
            { children }
        </Slider>
    );
}

export default Carroussel;