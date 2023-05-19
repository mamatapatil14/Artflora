import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Row ,Col, Button} from 'react-bootstrap'
import './ArtistDocument.css'

function ArtistDocument(props) {
   function updateverify(){
    console.log(props.artistId._id)
    const verifyobj={
      id:props.artistId._id,
      isverified:"true"
    }
    axios.post("http://localhost:5000/Updateverify",verifyobj)
      .then((result) => {
        alert("Documents verified")
        console.log(result.data)
      }).catch((err) => {
        console.log(err)
      });

   }
  console.log("props", props)
  console.log(props.artistId.Artistadharcard)
  return (
    <div className='divdoc'>
      <div className='d-flex'>
        <div className='d-flex'>
          <h4>&nbsp;Aadhar Card</h4>
          
          <Card>

            <Card.Img className='imgadhar' src={`http://localhost:5000${props.artistId.Artistadharcard}`} />
          </Card>

          </div>
          
          <div className='d-flex'>
          <h4>&nbsp;Handicap Certificate</h4>
          <Card>

            <Card.Img className='imgcert' src={`http://localhost:5000${props.artistId.Artisthandicapcer}`} />

          </Card>

        </div>
      





      </div>
      <div className='verifybutton'><Button className='verbtn' onClick={()=>{updateverify()}} size="">Verifiy</Button></div>

    </div>
  )
}

export default ArtistDocument
