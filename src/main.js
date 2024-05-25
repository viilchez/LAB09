import React from 'react';
import { Carousel } from 'react-bootstrap';

const Main = () => {
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '70vh', paddingTop: '20px' }}> 
        <Carousel style={{ width: '80%', maxWidth: '1000px', marginBottom: '20px' }}> 
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://t3.ftcdn.net/jpg/02/14/36/84/360_F_214368481_jYlhuRT83m1xnnWig3va94rnu1B40W7Z.jpg" 
              alt="First slide"
              style={{ objectFit: 'cover', height: '400px' }} 
            />
            <Carousel.Caption>
              <h3 style={{ marginBottom: '0' }}>Connect With Friends.</h3> 
              <p style={{ marginBottom: '0' }}>Make New Friends.</p> 
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.belgica.com.pe/blog/wp-content/uploads/2021/02/ventajas-comprar-departamento-preventa.jpg" 
              alt="Second slide"
              style={{ objectFit: 'cover', height: '400px' }} 
            />
            <Carousel.Caption>
              <h3 style={{ marginBottom: '20' }}>Sell Things.</h3> 
              <p style={{ marginBottom: '20' }}>Make Money.</p> 
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
};

export default Main;
