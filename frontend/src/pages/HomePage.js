import React,{useState} from 'react';
import Layout from '../components/Layout/Layout';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
<<<<<<< HEAD

const Home = () => {
  return (
    <Layout title="E-Commerce Website">
      {/* Automatic Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-image-1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-image-2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-image-3.jpg"
            alt="Third slide"
          />
=======
import { useAuth } from '../Context/auth';
// import YouTube from 'react-youtube'; // Import react-youtube
// import { useAuth } from './auth/AuthContext';

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
  // Add more video data objects as needed
];

// const Home = () => {
 
const Home = () => {
  // const [auth,setAuth]=useAuth();
  const [auth]=useAuth();

  const [setSelectedVideo] = useState(null);

  // const [auth,setAuth]=useAuth();

  const onVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const cardBorderRadius = '10px';

  return (
    <Layout title="Home-Ashutosh Enterprise">
      {/* Automatic Carousel */}
      {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={require('../pages/photospages/ambuja_cement.webp')} alt="First slide" style={{'height':'580px','width':'1200px'}}/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={require('../pages/photospages/ultratech.jpg')} alt="First slide" style={{'height':'580px','width':'100%'}}/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={require('../pages/photospages/berger.jpg')} alt="First slide" style={{'height':'600px','width':'1100px'}}/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={require('../pages/photospages/asian.jpg')} alt="First slide" style={{'height':'580px','width':'1200px'}}/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={require('../pages/photospages/tmtbars.jpg')} alt="First slide" style={{'height':'580px','width':'1200px'}}/>
>>>>>>> 96a9b37adb01aa09c9c0a0875f47ffd543d8284c
        </Carousel.Item>
      </Carousel>

      {/* Category Cards */}
      <Container className="mt-5">
        <h2 className="mb-4">Shop by Category</h2>
        <Row>
          <Col md={4}>
<<<<<<< HEAD
            <Card>
              <Card.Img variant="top" src="category-image-1.jpg" />
              <Card.Body>
                <Card.Title>Category 1</Card.Title>
=======
            <Card style={{ borderRadius: cardBorderRadius }}>
              <Card.Img variant="top" src={require('../pages/photospages/category_cements.jpg')} />
              <Card.Body>
                <Card.Title>Cements</Card.Title>
>>>>>>> 96a9b37adb01aa09c9c0a0875f47ffd543d8284c
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
<<<<<<< HEAD
            <Card>
              <Card.Img variant="top" src="category-image-2.jpg" />
              <Card.Body>
                <Card.Title>Category 2</Card.Title>
=======
            <Card style={{ borderRadius: cardBorderRadius }}>
              <Card.Img variant="top" src={require('../pages/photospages/category_paints.jpg')} />
              <Card.Body>
                <Card.Title>House Paints</Card.Title>
>>>>>>> 96a9b37adb01aa09c9c0a0875f47ffd543d8284c
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
<<<<<<< HEAD
            <Card>
              <Card.Img variant="top" src="category-image-3.jpg" />
              <Card.Body>
                <Card.Title>Category 3</Card.Title>
=======
            <Card style={{ borderRadius: cardBorderRadius }}>
              <Card.Img variant="top" src={require('../pages/photospages/category_tmt.jpg')} style={{'height':'290px'}} />
              <Card.Body>
                <Card.Title>TMT Bars</Card.Title>
>>>>>>> 96a9b37adb01aa09c9c0a0875f47ffd543d8284c
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Small Banners */}
      <Container className="mt-5">
<<<<<<< HEAD
        <Row>
          <Col md={6}>
            <img src="banner-1.jpg" alt="Banner 1" className="img-fluid" />
          </Col>
          <Col md={6}>
            <img src="banner-2.jpg" alt="Banner 2" className="img-fluid" />
          </Col>
=======
      <h2 className="mb-4">Featured Brands</h2>
        <Row className="d-flex align-items-center">
          <Col md={3} >
            <img src={require('../pages/photospages/ambujabanner.webp')} alt="Banner 1" className="img-fluid" style={{'height':'200px', 'width':'200px'}}/>
          </Col>
          <Col md={2}>
          <img src={require('../pages/photospages/ultratechbanner.jpg')} alt="Banner 1" className="img-fluid" style={{'height':'200px', 'width':'200px'}}/>
          </Col>
          <Col md={2}>
          <img src={require('../pages/photospages/utkarsh-ms-tmt-bar.jpg')} alt="Banner 1" className="img-fluid" style={{'height':'200px', 'width':'200px'}}/>
          </Col>
          <Col md={2}>
          <img src={require('../pages/photospages/bergerbanner.jpg')} alt="Banner 1" className="img-fluid" style={{'height':'200px', 'width':'200px'}}/>          </Col>
          <Col md={3}>
          <img src={require('../pages/photospages/asianbanner2.png')} alt="Banner 1" className="img-fluid" style={{'height':'200px', 'width':'200px'}}/>          </Col>
>>>>>>> 96a9b37adb01aa09c9c0a0875f47ffd543d8284c
        </Row>
      </Container>

      {/* Video Cards */}
<<<<<<< HEAD
      <Container className="mt-5">
=======
      {/* <Container className="mt-5">
>>>>>>> 96a9b37adb01aa09c9c0a0875f47ffd543d8284c
        <h2 className="mb-4">Featured Videos</h2>
        <Row>
          <Col md={4}>
            <Card>
<<<<<<< HEAD
              <Card.Img variant="top" src="video-thumbnail-1.jpg" />
=======
              <Card.Img variant="top" src={require('../pages/photospages/asianvideo.jpg')} />
>>>>>>> 96a9b37adb01aa09c9c0a0875f47ffd543d8284c
              <Card.Body>
                <Card.Title>Video Title 1</Card.Title>
                <Button variant="primary">Watch Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="video-thumbnail-2.jpg" />
              <Card.Body>
                <Card.Title>Video Title 2</Card.Title>
                <Button variant="primary">Watch Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="video-thumbnail-3.jpg" />
              <Card.Body>
                <Card.Title>Video Title 3</Card.Title>
                <Button variant="primary">Watch Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
<<<<<<< HEAD
      </Container>
=======
      </Container>  */}

      {/* Video Cards */}
      <Container className="mt-5">
        <h2 className="mb-4">Featured Videos</h2>
        <Row>
          {videoData.map((video, index) => (
            <Col md={3} key={index}>
              <Card style={{ width: '18rem',borderRadius: cardBorderRadius }}>
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

      {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
>>>>>>> 96a9b37adb01aa09c9c0a0875f47ffd543d8284c
    </Layout>
  );
};

export default Home;
