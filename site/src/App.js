import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.min.css'
import './App.css';
import {Row, Col, Typography, message, Carousel, Form, Input} from 'antd'
import ReactCardCarousel from "react-card-carousel";
import axios from 'axios'
const {Title, Text} = Typography
const { TextArea } = Input;
function App() {
  const form = Form.useForm();
  const onFinish = async (form) => {
    let error = false;
    axios.post('http://50.16.27.140:3001/api/support/contact', form).catch((err) => {error= true; message.error("Vaya algo, a salido mal por favor recargue la página e inténtelo de nuevo.")})
    if(!error){
      message.success("Mensaje enviado, revisa tu correo.")
    }
  }
  return (
    <div className="App">
      <div id="header" className="container">
        <Row justify="center" gutter={[32,32]} align="middle">
          <Col xs={24} md={12}>
          <img src="/images/logo.png" className="img-fluid pt-3" alt=""/>
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
            <img src="/images/mockup1.png" className="img-fluid" alt=""/>
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
              <img src="/images/visibilidad.png" alt="" className="img-fluid"/>
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
        <Row justify="center mt-20">
          <Col xs={24}>
          <div className="d-lg-none">
            <Carousel>
              <div className="p-3">
              <img
            className="img-fluid customShadow"
            src="/images/gestionBig.png"
          />
              </div>
              <div className="p-3">
              <img
            className="img-fluid customShadow"
            src="/images/tpv2.png"
          />
              </div>

            </Carousel>

          </div>
          </Col>
        <Col xs={20} className="text-center d-none d-lg-block">
          <div
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
          <ReactCardCarousel className="d-none d-lg-block">
            <div>
              <img
              className="img-fluid customShadow"
              src="/images/gestionBig.png"
            />
            </div>
            <div>
            <img
            className="img-fluid customShadow"
            src="/images/tpv2.png"
          />
            </div>
          </ReactCardCarousel>
        
          </div>
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
        <Row className="mt-20" justify="center" >
          <Col xs={24}>
          <div className="d-block d-md-none">

            <Carousel>
              <div className="p-3">
                <img
                className="img-fluid customShadow"
                src="/images/Retargeting.png"
                />
              </div>
              <div className="p-3">
              <img
            className="img-fluid customShadow"
            src="/images/IMPULSO.png"
          />
              </div>
              <div className="p-3">
              <img
            className="img-fluid customShadow"
            src="/images/ENGAGEMENT.png"
          />
              </div>
            </Carousel>
          </div> 
          </Col>
        <Col xs={20} className="text-center d-none d-lg-block">
          <div
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
          <ReactCardCarousel>
          <img
            className="img-fluid customShadow"
            src="/images/Retargeting.png"
          />
          <img
            className="img-fluid customShadow"
            src="/images/IMPULSO.png"
          />
          <img
            className="img-fluid customShadow"
            src="/images/ENGAGEMENT.png"
          />
          </ReactCardCarousel>
      
          </div>
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
                  <img src="/images/crown.png" alt="" className="img-fluid"/>

                  </Col>
                  <Col>
                  <Title level={3} className="text-white mt-3">Formulario de contacto</Title>

                  </Col>
                </Row>
              <Form onFinish={(data) => onFinish(data)}>
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
                  name="surname"
                  label={<span className="text-white">Apellidos</span>}
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
                  name="enterpriseName"
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
            <img src="/images/logo.png" alt="" className="img-fluid imgLogoSm"/>
          </Col> 
        </Row> 
      </div>         
    </div>  
  );
}

export default App;
