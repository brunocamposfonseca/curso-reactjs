import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function Carroussel({ children }) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        //slidesToShow: 4,
        slidesToScroll: 1,
    };

    return(
        <Slider {...settings}>
            { children }
        </Slider>
    );
}

export default Carroussel;