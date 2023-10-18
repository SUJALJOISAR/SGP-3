import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth } from './auth/AuthContext'; 

const videoData = [
  {
    title: 'Asian Paints',
    thumbnail: require('../pages/photospages/asianvideo.jpg'),
    youtubeLink: 'https://www.youtube.com/watch?app=desktop&v=MQMfegIWCPY',
  },
  {
    title: 'Berger Paints',
    thumbnail: require('../pages/photospages/bergervideo.jpg'),
    youtubeLink: 'https://www.youtube.com/watch?v=tsXpWwVK6ak',
  },
  {
    title: 'Ultratech Cement',
    thumbnail: require('../pages/photospages/ultratechvideo.jpg'),
    youtubeLink: 'https://www.youtube.com/watch?v=WAlxp_5Abl4',
  },
  {
    title: 'Utkarsh TMT Bars',
    thumbnail: require('../pages/photospages/utkarshvideo.jpg'),
    youtubeLink: 'https://www.youtube.com/watch?v=3PjbkvvxCGM',
  },
];

const Home = () => {
  const [auth] = useAuth();
  const [setSelectedVideo] = useState(null);

  const onVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const cardBorderRadius = '10px';

  return (
    <Layout title="Home-Ashutosh Enterprise">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={require('../pages/photospages/ambuja_cement.webp')} alt="First slide" style={{ 'height': '580px', 'width': '1200px' }} />
        </Carousel.Item>
        {/* Add more Carousel items here */}
      </Carousel>

      <Container className="mt-5">
        <h2 className="mb-4">Shop by Category</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="category-image-1.jpg" />
              <Card.Body>
                <Card.Title>Category 1</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="category-image-2.jpg" />
              <Card.Body>
                <Card.Title>Category 2</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="category-image-3.jpg" />
              <Card.Body>
                <Card.Title>Category 3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <img src="banner-1.jpg" alt="Banner 1" className="img-fluid" />
          </Col>
          <Col md={6}>
            <img src="banner-2.jpg" alt="Banner 2" className="img-fluid" />
          </Col>
        </Row>
        <h2 className="mb-4">Featured Brands</h2>
        <Row className="d-flex align-items-center">
          <Col md={3}>
            <img src={require('../pages/photospages/ambujabanner.webp')} alt="Banner 1" className="img-fluid" style={{ 'height': '200px', 'width': '200px' }} />
          </Col>
          <Col md={2}>
            <img src={require('../pages/photospages/ultratechbanner.jpg')} alt="Banner 1" className="img-fluid" style={{ 'height': '200px', 'width': '200px' }} />
          </Col>
          <Col md={2}>
            <img src={require('../pages/photospages/utkarsh-ms-tmt-bar.jpg')} alt="Banner 1" className="img-fluid" style={{ 'height': '200px', 'width': '200px' }} />
          </Col>
          <Col md={2}>
            <img src={require('../pages/photospages/bergerbanner.jpg')} alt="Banner 1" className="img-fluid" style={{ 'height': '200px', 'width': '200px' }} />
          </Col>
          <Col md={3}>
            <img src={require('../pages/photospages/asianbanner2.png')} alt="Banner 1" className="img-fluid" style={{ 'height': '200px', 'width': '200px' }} />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <h2 className="mb-4">Featured Videos</h2>
        <Row>
          {videoData.map((video, index) => (
            <Col md={3} key={index}>
              <Card style={{ width: '18rem', borderRadius: cardBorderRadius }}>
                <Card.Img variant="top" src={video.thumbnail} />
                <Card.Body>
                  <Card.Title>{video.title}</Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => onVideoClick(video.youtubeLink)}
                  >
                    Watch Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
