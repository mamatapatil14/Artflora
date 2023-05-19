import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Artistdetails from './Artistdetails'
import './Allartist.css'
import { useNavigate } from 'react-router-dom'
import Pagination from '../Component/Pagination'

function Allartist() {

 
  const navigate=useNavigate()

  const [showperpage, setshowperpage] = useState(8)
  const [allartist, setallartist] = useState([])
  const [pagination, setpagination] = useState({
    start:0,
    end:showperpage,
  })

  

  useEffect(() => {
    axios.get("http://localhost:5000/Allartist")
      .then((result) => {
        setallartist(result.data)
        console.log(result)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

const onpginationchange=(start,end)=>{
  setpagination({start:start,end:end})
}


  return (
    <div className='mt-5 '>
      
        <Row>
          {
            allartist.slice(pagination.start,pagination.end).map((art,idx) => {
              return (
                <Col lg={3} md={4} key={art._id}>
                  <Card className='maincard mb-4'>
                    <Card.Body className='cardbody'>
                        <Card.Img className='proimg' src={`http://localhost:5000${art.Artistprofile}`}/>
                        
                    </Card.Body>
                    <Card.Footer className='w-100 text-center'>
                        <div><h6>{art.Artistfullname}</h6></div>
                        <Button onClick={()=>{
                          navigate("/artistdetails",{state:{id:art}})
                        }} variant='outline-primary'>Details</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
       <Pagination  className="artistpag" showPerPage={showperpage} onPagignationChange={onpginationchange} total={allartist.length}/>
      
    </div>
  )
}

export default Allartist
