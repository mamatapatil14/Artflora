import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Orderdetails.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'


const Orderdetails = () => {
  const [statuschange, setstatuschange] = useState()
  const location = useLocation()

  function updatestatus() {
    console.log("objrct")
    const ordsta = {
      id: location.state.order._id,
      orderstatus: statuschange
    }
    axios.post("http://localhost:5000/Updatestatus", ordsta)
      .then((result) => {
        console.log(result.data)
        alert("status Updated")
      }).catch((err) => {
        console.log(err)
      })

  }


  return (
    <div>
      <div className='orddiv'>
        <h4 className='mt-4 ordhead'>Order Details:</h4>

        <div className='d-flex'>
          <div>
            <table>
              <tr>
                <td><h6><b>Order ID:</b></h6></td>
                <td>:</td>
                <td>{location.state.order._id}</td>
              </tr>
              <tr>
                <td><h6><b>Order Date:</b></h6></td>
                <td>:</td>
                <td>{location.state.order.Orderdate}</td>
              </tr><tr>
                <td><h6><b>Total Amount</b></h6></td>
                <td>:</td>
                <td>{location.state.order.Orderamount}</td>
              </tr><tr>
                <td><h6><b>Total items:</b></h6></td>
                <td>:</td>
                <td>{location.state.order.qty}</td>
              </tr><tr>
                <td><h6><b>Shipping Address:</b></h6></td>
                <td>:</td>
                <td>{location.state.order.Customerid.Customeraddress}</td>
              </tr><tr>
                <td><h6><b>Billing method:</b></h6></td>
                <td>:</td>
                <td>{location.state.order.Customerid.Customeraddress}</td>
              </tr>
            </table>
          </div>
          <div className='updatestatus'>
            <div className='d-flex'>
              <h6 className='mt-2'><b>Update status:</b></h6>
              <select onChange={(e) => setstatuschange(e.target.value)} className='optionsel'>
                <option>Placed</option>
                <option>pending</option>
                <option>completed</option>
                <option>on the way</option>
              </select>
            </div>

            <Button  className='d-flex' onClick={() => updatestatus()}>Update</Button>
          </div>

        </div>
        <div>
          <div className='mt-3'><h4><b>ArtWork :</b></h4></div>
          <table className='table table-striped border border-3 rounded-2 '>
            <tr>
              <th>Item summary</th>
              <th>Qunatity</th>
              <th>Price</th>
              <th>Total price</th>
              <th>Artist ID</th>
              <th>Arist name</th>
            </tr>
            <tbody>
              {
                location.state.order.OrderItems.map((art) => {
                  return (
                    <tr>
                      <td lg={3}><img src={`http://localhost:5000${art.Art.Artworkimage}`} className='img' />{art.Art.Artwokname}</td>
                      <td>{art.Art.qty}</td>
                      <td>{art.Art.ArtworkPrice}</td>
                      <td></td>
                      <td>{art.Art._id}</td>
                      <td>{art.Art.Artistid.Artistfullname}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>


        </div>
        <div>
          <div className='mt-3'>
            <h4><b>Customer Details:</b></h4>
            <table className=''>
              <tr className='mt-5'>
                <td><b>Cuatomer Name</b></td>
                <td>:</td>
                <td>{location.state.order.Customerid.Customername}</td>
              </tr>
              <tr>
                <td><b>Cuatomer Mobile No</b>:</td>
                <td>:</td>
                <td>{location.state.order.Customerid.Customermobno}</td>
              </tr>
              <tr>
                <td><b>Cuatomer Email:</b></td>
                <td>:</td>
                <td>{location.state.order.Customerid.Customermobno}</td>
              </tr>
              <tr>
                <td><b>Cuatomer Address</b></td>
                <td>:</td>
                <td>
                  {location.state.order.Customerid.Customeraddress}&nbsp;
                  {location.state.order.Customerid.City}&nbsp;
                  {location.state.order.Customerid.State}&nbsp;
                  {location.state.order.Customerid.Pincode}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orderdetails
