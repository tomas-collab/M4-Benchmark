import { Component } from "react";
import {Card} from 'react-bootstrap'

class SongFooter extends Component{
    render(){
        return(
            <Card className='bg-dark text-dark'>
                
                <Card.Body>
                    <Card.Title>Song Playing</Card.Title>                
                </Card.Body>
            </Card>
        )
    }
}

export default SongFooter