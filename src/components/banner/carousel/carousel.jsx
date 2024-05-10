import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import banner1 from '../../../icon/banner1.jpg'
import banner2 from '../../../icon/banner2.jpg'
import banner3 from '../../../icon/banner3.jpg'


function ImageCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;