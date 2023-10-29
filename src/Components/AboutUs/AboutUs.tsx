import {Card} from "react-bootstrap";

export const AboutUs = () => {
  return (
<>
<h3>About Us</h3>
<div style={{display:"flex", justifyContent: "center"}}>
<div style={{display: "flex", marginRight:"30px"}}>
<Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src="src/assets/Images/Cachorro-Perro-y-Gato.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div style={{display: "flex", marginRight:"30px"}}>
    <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src="src/assets/Images/perritos-de-instagram-1616062929.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div>    <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src="src/assets/Images/videos_de_perritos_y_gatitos_en_internet.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
</>

  )
}

export default AboutUs;
