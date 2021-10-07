import {Row, Col, Typography, message, Carousel, Form, Input} from 'antd'
import ReactCardCarousel from "react-card-carousel";
import axios from 'axios'
import desktopBg from '../assets/BgDesktop1.png'
const {Title, Text} = Typography
const { TextArea } = Input;

export default function Home(){
    return(
        <div id="home-desktop" style={{background:`url(${desktopBg})`}}>
            <div className="container-fluid">
            <ul class="nav justify-content-end px-5">
            <li class="nav-item text-center">
                <h5 className="text-white section">
                ¿Quieres trabajar con nosotros?
                </h5>
                <a  href="#" className="yellowText section nav-link">CONTACTA CON TRIBE</a>
            </li>
            </ul>
            <Row className="px-5" justify="space-between" align="middle">
                <Col span={16}>
                    <img src="/images/crownLogo.png" alt="" className="img-fluid" style={{maxWidth:"600px"}}/>
                <h2 className="text-white display-2 mt-10">
                DESCUBRE <br/>
                &nbsp;&nbsp;CON QUIEN Y DONDE  <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;SALIR POR MADRID
                </h2>

                </Col>
                <Col span={8}>
                    <img src="/images/desktopMockup.png" alt="" className="img-fluid"/>
                </Col>
            </Row>
            <Row className="px-5" align="middle" justify="">
                    <Col span={8}>
                    <h2 className="text-white text-center">
                        CONTENIDO EXCLUSIVO <br/> Y RESERVAS EN <br/> LAS MEJORES SALAS
                    </h2>
                    <Row justify="center">
                        <Col>
                            <img src="/images/logos/instagram.png" alt="" className="img-fluid img-xs"/>
                        </Col>
                        <Col>
                            <img src="/images/logos/tiktok.png" alt="" className="img-fluid img-xs"/>
                        </Col>
                        <Col>
                            <img src="/images/logos/twitter.png" alt="" className="img-fluid img-xs"/>
                        </Col>
                        <Col>
                            <img src="/images/logos/facebook.png" alt="" className="img-fluid img-xs"/>
                        </Col>
                        <Col>
                            <img src="/images/logos/linkedin.png" alt="" className="img-fluid img-xs"/>
                        </Col>
                    </Row>
                    </Col>
                    <Col span={8} className="text-center">
                        <button className="btn pill-lg redPill section">DESCARGAR</button>
                    </Col>
                </Row>
            </div>

        </div>
    )
}