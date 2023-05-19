import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap';
import './Allorder.css'
import { useNavigate } from 'react-router-dom';
import Pagination from '../Component/Pagination';

function Allorders() {
  const [allorders, setallorders] = useState([])
  const navigate = useNavigate()

  const [showperpage, setshowperpage] = useState(8)
  const [pagination, setpagination] = useState({
    start:0,
    end:showperpage,
  })

  useEffect(() => {
    axios.get("http://localhost:5000/Allorder")
      .then((result) => {
        setallorders(result.data)
        console.log(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [])

  const onpginationchange=(start,end)=>{
    setpagination({start:start,end:end})
  }
  
  

  return (
    <div>
      
      <Row className=" h-100 mt-3">
        {
          allorders.slice(pagination.start,pagination.end).map((ord) => {
            return (
              <Col lg={3} md={4}>
                <Card className='mt-3 cardord mb-3'>
                  <Card.Body>
                    <div><h6><b>OrderID:</b>{ord._id}</h6></div>
                    <div className='' ><h6><b>Order Date:</b>{(ord.Orderdate).slice(0, 19)}</h6></div>
                    <div><h6><b>Order Amount:</b>{ord.Orderamount}</h6></div>
                    <div><h6><b>Items:</b>{ord.OrderItems.qty}</h6></div>
                    <div><h6><b>Order status:</b>{ord.Orderstatus}</h6></div>
                    <Button variant='outline-info'
                      onClick={() => 
                        navigate('/orderdetails', { state: { order: ord } })
                      }
                    >Order Details</Button>

                  </Card.Body>

                </Card>
              </Col>
            )
          })
        }
      </Row>      
       <Pagination className="mt-5" showPerPage={showperpage} onPagignationChange={onpginationchange} total={allorders.length}/>

    </div>
  )
}

export default Allorders
