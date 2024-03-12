import Image from "next/image";
import iconoIg from "../../public/imagenes/iconos/instagram.png";
import iconoPinterest from "../../public/imagenes/iconos/pinterest.png";
import iconoTelegram from "../../public/imagenes/iconos/telegram.png";
import iconoGithub from "../../public/imagenes/iconos/github.png";
import { Container, Row, Col } from "reactstrap";

export default function IconosSociales() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <a href="https://www.instagram.com/overl4in/" target="_blank">
            <Image
              className="iconosRedesSociales me-3"
              src={iconoIg}
              alt=""
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </a>

          <a href="https://www.pinterest.es/dassault87/" target="_blank">
            <Image
              className="iconosRedesSociales me-3"
              src={iconoPinterest}
              alt=""
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </a>
          <a href="https://t.me/overlain" target="_blank">
            <Image
              className="iconosRedesSociales me-3"
              src={iconoTelegram}
              alt=""
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </a>
          <a href="https://github.com/al3hz" target="_blank">
            <Image
              className="iconosRedesSociales"
              src={iconoGithub}
              alt=""
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
