import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './Allartistworklist.css'

function Allartistartworklist(props) {
    const [allartistartwork, setallartistartwork] = useState([])

 useEffect(() => {
    const id={artistid:props.artistId}
    axios.post("http://localhost:5000/Artworkbyartistid",id)
        .then((result) => {
            console.log(result.data)
            setallartistartwork(result.data)
        }).catch((err) => {
            console.log(err)
        });
 
   
 }, [])
 
  return (
    <div>
      
      <Row className='mt-4 tabdiv'>
        {
            allartistartwork.map((artwork)=>{
                return(
                    <Col lg={3}>
                        <Card>
                            <Card.Body>
                                <Card.Img className='cardimg' src={`http://localhost:5000${artwork.Artworkimage}`}/>
                            </Card.Body>
                            <Card.Footer  className='text-center'>
                                <Card.Title className='text-center'>{artwork.Artwokname}</Card.Title>
                                <div className='d-flex justify-content-center'>
                                    <h6>Type:</h6> {artwork.Artworktype}
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <h6>Size:</h6> {artwork.Artworkframesize}
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <h6>Price:</h6> &#8377; {artwork.ArtworkPrice}/-
                                </div>

                            </Card.Footer>
                        </Card>
                    </Col>
                )
            })
        }
      </Row>
    </div>
  )
}

export default Allartistartworklist
