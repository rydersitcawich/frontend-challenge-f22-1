import courses from '../data/courses.json';
import {Col, Row, Button, Form} from 'react-bootstrap';
import {CourseItem} from '../components/CourseItem';
import { useState } from 'react';

export function Courses(){
  const[query, setQuery] = useState('');
return (
<>
<h1 style = {{marginBottom: '1rem'}}>Browse Courses</h1>  
<Form style = {{marginBottom:'2rem', width: '30%'}}className="d-flex">
    <Form.Control
    type="search"
    placeholder="Search Course Number"
    className="me-2"
    aria-label="Search"
    onChange = {e => setQuery(e.target.value)}/>
</Form>
<Row md={2} xs = {1} lg = {3} className = 'g-3'>
  {/* only displays courses who's number contains the query */}
  {courses.map(item => {
  if(JSON.stringify(item.number).includes(query)){return (<Col key ={item.number}><CourseItem {...item}/></Col>)}
})}
</Row>
</>
)


}
