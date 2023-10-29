import {Carousel} from "react-bootstrap";

export const CarouselHome = () => {
  return (

    <>
    <Carousel>

      <Carousel.Item>
      <img 
        className='d-block w-100'
        style={{maxHeight:'500px', objectFit:'cover'}}
        src="https://www.dogalize.com/wp-content/uploads/2017/06/La-sverminazione-e-la-pulizia-del-cucciolo-del-cane-2-800x400-800x400.jpg" alt="slide1" />
        <Carousel.Caption>
        <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        style={{maxHeight:'500px', objectFit:'cover'}}
        src="https://st2.depositphotos.com/3378121/5193/i/450/depositphotos_51933801-stock-photo-labrador-puppies-in-a-basket.jpg" alt="slide2" />
        <Carousel.Caption>
        <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='d-block w-100'
        style={{maxHeight:'500px', objectFit:'cover'}}
        src="https://static8.depositphotos.com/1009420/988/i/450/depositphotos_9889235-stock-photo-group-of-twelve-dogs.jpg" alt="slide3" />
        <Carousel.Caption>
        <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>

  )
}

export default CarouselHome;

