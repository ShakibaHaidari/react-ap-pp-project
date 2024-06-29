import { Container, Row, Col } from "react-bootstrap"
import "./Footer.css";
function Footer() {
    return (
      <footer style={{ background: "rgba(102, 203, 255, 0.34)" }}>
        <Container>
          <Row>
            <Col>
              <h2>اهداف دندان پزشکی دنیال</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز،
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}
export default Footer;
