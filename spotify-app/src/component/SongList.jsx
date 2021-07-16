import { Component } from "react";
import {Row,Col,Container} from 'react-bootstrap'




class SongList extends Component{
    state ={
        songs:[]
    }

 componenetDidMount = async() =>{
     try {
         let resp = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem`, {
            method: "GET",
            headers: {
              "x-rapidapi-key": "727e34e77cmsh746a91ecb9acf23p19fa3djsn87030c669d94",
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            },
          })
        console.log(resp)
        if(resp.ok){
            let data = await resp.json()
            console.log('data',data)
            this.setState({songs:data})
        }else{
            console.log('error')
        }
     } catch (error) {
         console.log(error)
     }
 }


    render(){
        return(
           <Row>
            
               <Col>
               {this.state.songs}
               </Col>
               )
               
               
           
           </Row>
        )
    }
}
export default SongList
















