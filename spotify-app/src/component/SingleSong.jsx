import { Component } from "react";
import{Row,Card} from 'react-bootstrap'

class SingleSong extends Component{
    render(){
        return(
            <Row class="row px-3 pt-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                  </Card>
            </Row>
         )
    }
}

export default SingleSong