
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './Course.css'

function Course({id,title,img,text}) {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={ img}
        />
        <Card.Body>
          <Card.Title>{title }</Card.Title>
          <Card.Text>{ text} </Card.Text>
          <Button variant="primary">
            <Link to={`/courseitem/${id}`} className="buy-btn">ویزیت</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  ); 
}
export default Course;
