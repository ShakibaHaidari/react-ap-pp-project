import { useParams } from "react-router-dom";
import MyNavbar from "../components/navbar/Navbar";
import { courseData } from "../dataCourse";
import { Container , Row , Col } from "react-bootstrap";

function CourseItem() {
    const param = useParams().courseId;
    const courseInfo = courseData.find(course => course.id == param)
    console.log(courseInfo)
    return (
      <div>
        <MyNavbar></MyNavbar>
        <Container>
          <Row>
            <Col>
              <img className="my-4" src={courseInfo.img} />
            </Col>

            <Col  className="my-3">
              {" "}
              <h2>{courseInfo.title}</h2>
              <p>داکتر مربوطه: داکتر دنیال حسنی</p>
              <p>
                <b>{courseInfo.text}</b>
              </p>
              <p className="textAlign:justify">
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
          </Row>
        </Container>
      </div>
    );
}
export default CourseItem;