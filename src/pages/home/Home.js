import { Container,Row, Col} from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import proImg from '../../assets/images/pexels-photo-287237.webp'
import Course from "../course/Course";
import { useState } from "react";
import Footer from "../../components/footer/footer";
import {courseData} from '../../dataCourse'

function Home() {

    let [courses, setCourses] = useState(courseData);
    return (
      <div>
        <MyNavbar></MyNavbar>
        <Container fluid='md'>
          <Row className="align-items-center my-5">
            <Col md={6}>
              <h1>دندان پزشکی دنیال</h1>
              <p style={{textAlign:'justify'}} >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </Col>
               <Col lg={6}>
                  <img src={proImg} className="img-fluid my-4 px-5" />    
                 </Col>
                </Row>
                <Row>
                    <h2>تجربه در بخش های زیر:</h2>
                    {courses.map(item =>(
                        <Col key={item.id} className="py-3" md={6} lg={4} xl={3}>
                            <Course {...item} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer></Footer>
        </div>
        
    );
}
export default Home;
