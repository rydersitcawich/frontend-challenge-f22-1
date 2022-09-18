import courses from '../data/courses.json';
import {Col, Row} from 'react-bootstrap';
import {CourseItem} from '../components/CourseItem';

export function Courses(){
return (
<>
<h1 style = {{marginBottom: '1rem'}}>Browse Courses</h1>
<Row md={2} xs = {1} lg = {3} className = 'g-3'>
  {courses.map(item =>(<Col key ={item.number}><CourseItem {...item}/></Col>))}
</Row>
</>
)


}
