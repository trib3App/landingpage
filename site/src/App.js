import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.min.css'
import './App.css';
import {Row, Col, Typography, Image, Carousel, Form, Input} from 'antd'
import ReactCardCarousel from "react-card-carousel";
const {Title, Text} = Typography
const { TextArea } = Input;
function App() {
  const form = Form.useForm();
  return (
    <div className="App">
      <div id="header" className="container">
        <Row justify="center" gutter={[32,32]} align="middle">
          <Col xs={24} md={12}>
          <img src="https://trib3app.github.io/landingpage/images/logo.png" className="img-fluid pt-3" alt=""/>
            <Title level={1} className="text-white mt-3">Controla la noche</Title>
            <Row gutter={16}>
              <Col>
              <a href="/#contacto">
                <button className="btn pill-sm redPill">Contacta con nosotros</button>
              </a>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={12}>
            <img src="https://trib3app.github.io/landingpage/images/mockup1.png" className="img-fluid" alt=""/>
          </Col>
        </Row>
      </div>
      <div className="mt-20 container text-center">
        <Title level={3} className="text-white">
        Somos la única plataforma social de reserva de mesas que además <br className="d-none d-sm-block"/>
        permite el seguimiento de tus usuarios para optimizar ventas.
        </Title>
      </div>
      <div className="mt-20 container">
        <Row gutter={[32,32]} align="middle">
            <Col xs={24} md={16}>
              <Title level={2} className="text-white">Visibilidad</Title>
              <Text className="text-white text20">
                Generamos tráfico para la sala y expandemos su cartera de clientes. Nuestras acciones de comunicación digital atraen nuevos usuarios y mantienen a los habituales para aumentar su público y consolidar la fanbase actual. 
              </Text>
            </Col>
            <Col xs={24} md={8}>
              <img src="https://trib3app.github.io/landingpage/images/visibilidad.png" alt="" className="img-fluid"/>
            </Col>
        </Row>
      </div>
      <div className="mt-20 container">
        <Row gutter={[32,32]} align="middle">       
            <Col xs={24}>
              <Title level={2} className="text-white">Gestión</Title>
              <Text className="text-white text20">
              Utilizamos la información de compra a tiempo real para desarrollar una herramienta de venue management que informa sobre la clientela presente y permite realizar cambios para perfeccionar su experiencia con un diseño intuitivo y sencillo.                            </Text>
            </Col>
        </Row>
        <Row justify="center mt-5">
          <Col xs={24}>
          <div className="d-block d-sm-none">
            <Carousel>
              <div className="p-3">
              <img
            className="img-fluid customShadow"
            src="https://trib3app.github.io/landingpage/images/gestionBig.png"
          />
              </div>
              <div className="p-3">
              <img
            className="img-fluid customShadow"
            src="https://trib3app.github.io/landingpage/images/tpv2.png"
          />
              </div>

            </Carousel>

          </div>
          </Col>
        <Col xs={20} className="text-center"
        style={
          {
            position: "relative",
            height: "30vh",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
          }
        } 
        >
          <ReactCardCarousel className="d-none d-sm-block">
          <img
            className="img-fluid customShadow"
            src="https://trib3app.github.io/landingpage/images/gestionBig.png"
          />
                    <img
            className="img-fluid customShadow"
            src="https://trib3app.github.io/landingpage/images/tpv2.png"
          />
          </ReactCardCarousel>
          </Col>  
        </Row>
      </div>
      <div className="mt-20 container">
        <Row gutter={[32,32]} align="middle">
            <Col xs={24}>
              <Title level={2} className="text-white">Estrategia</Title>
              <Text className="text-white text20">
                Aprovechamos la data recogida en los registros de usuario y la enriquecemos a través del uso orgánico de nuestra plataforma para impulsar la planificación específica de cada sala, utilizando KPIs orientados a su elección 
              </Text>
            </Col>
        </Row>
        <Row className="mt-5" justify="center" >
          <Col xs={24}>
          <div className="d-block d-sm-none">

            <Carousel>
              <div className="p-3">
                <img
                className="img-fluid customShadow"
                src="https://trib3app.github.io/landingpage/images/Retargeting.png"
                />
              </div>
              <div className="p-3">
              <img
            className="img-fluid customShadow"
            src="https://trib3app.github.io/landingpage/images/IMPULSO.png"
          />
              </div>
              <div className="p-3">
              <img
            className="img-fluid customShadow"
            src="https://trib3app.github.io/landingpage/images/ENGAGEMENT.png"
          />
              </div>
            </Carousel>
          </div> 
          </Col>
        <Col xs={20} className="text-center"
        style={
          {
            position: "relative",
            height: "30vh",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
          }
        }
        >
          <ReactCardCarousel className="d-none d-sm-block">
          <img
            className="img-fluid customShadow"
            src="https://trib3app.github.io/landingpage/images/Retargeting.png"
          />
          <img
            className="img-fluid customShadow"
            src="https://trib3app.github.io/landingpage/images/IMPULSO.png"
          />
          <img
            className="img-fluid customShadow"
            src="https://trib3app.github.io/landingpage/images/ENGAGEMENT.png"
          />
          </ReactCardCarousel>
      </Col>  
        </Row>
      </div>   
      <div className="mt-20 container" id="contacto">
        <Title level={2} className="text-white">Contacta con nosotros</Title>
        <Text className="text-white text15">Rellena este formulario y obtendrás acceso exclusivo a un demo de la herramienta y a nuestro kit de producto. </Text>
        <div>
          <Row className="mt-4" justify="center">
            <Col xs={22} md={12}>
              <div className="contactCard">
                <Row className="mb-3" gutter={16}>
                  <Col>
                  <img src="https://trib3app.github.io/landingpage/images/crown.png" alt="" className="img-fluid"/>

                  </Col>
                  <Col>
                  <Title level={3} className="text-white mt-3">Formulario de contacto</Title>

                  </Col>
                </Row>
              <Form>
                <Form.Item
                  name="email"
                  label={<span className="text-white">Email</span>}
                  required
                >
                  <Input></Input>
                </Form.Item>
                <Form.Item
                  name="name"
                  label={<span className="text-white">Nombre</span>}
                  required
                >
                  <Input></Input>
                </Form.Item>
                <Form.Item
                  name="city"
                  label={<span className="text-white">Ciudad</span>}
                  required
                >
                  <Input></Input>
                </Form.Item>
                <Form.Item
                  name="business"
                  label={<span className="text-white">Empresa</span>}
                  required
                >
                  <Input></Input>
                </Form.Item> 
                <Form.Item
                  name="feedback"
                  label={<span className="text-white">Comentarios</span>}
                  required
                >
                  <TextArea></TextArea>
                </Form.Item>  
                <Form.Item>
                  <button className="btn pill-sm redPill float-end">Enviar</button>  
                </Form.Item>                             
            </Form>
            
              </div>
            </Col> 
          </Row> 
        </div>
      </div>
      <div className="mt-20 container mb-5">
        <hr/>
        <Row>
          <Col>
            <img src="https://trib3app.github.io/landingpage/images/logo.png" alt="" className="img-fluid imgLogoSm"/>
          </Col> 
        </Row> 
      </div>         
    </div>  
  );
}

export default App;
