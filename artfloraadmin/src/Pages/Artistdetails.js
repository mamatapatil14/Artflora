import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row } from 'react-bootstrap'
import { MdVerified } from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import './Artistdetails.css'
import Allartistartworklist from './Allartistartworklist';
import ArtistDocument from './ArtistDocument'

function Artistdetails() {

  const location = useLocation()

  return (
    <div className='maindiv'>
      <div className='border border-1  artdetailmain'>
        <div className='bg-info ps-3'><h2>Profile</h2></div>
        <div className='d-flex'>
          <div>
            <img className='rounded-circle border border-dark detailimg' src={`http://localhost:5000${location.state.id.Artistprofile}`} />

          </div>
          <div className='ms-5 infodiv'>
            {/* <div className='d-flex'><h4>Name : &nbsp;{location.state.id.Artistfullname}</h4></div> */}
            <table>
              <tr className=''>
                <td className=''><h4>Name</h4></td>
                <td>:</td>
                <td className='fs-5 '>&nbsp;{location.state.id.Artistfullname}</td>
              </tr>
              <tr className=''> 
                <td className=''><h4>Address</h4></td>
                <td>:</td>
                <td className='fs-5 '>&nbsp;{location.state.id.Artistaddress}</td>
              </tr>
              <tr className=''> 
                <td className=''><h4>Age</h4></td>
                <td>:</td>
                <td className='fs-5 '>&nbsp;{location.state.id.Artistage}</td>
              </tr>
              <tr className=''> 
                <td className=''><h4>City</h4></td>
                <td>:</td>
                <td className='fs-5 '>&nbsp;{location.state.id.City},{location.state.id.State},{location.state.id.Pincode}</td>
              </tr>
              <tr className=''> 
                <td className=''><h4>Verified</h4></td>
                <td>:</td>
                <td className='fs-5 '>
                    {
                      location.state.id.Isverified==true?<MdVerified className='verify'/>:<AiFillCloseCircle className='notverify'/>
                    }
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className='mt-3 '>
            <Tabs  defaultActiveKey="artlist" className=''>
              <Tab eventKey='artlist' title='Art Work List'><Allartistartworklist artistId={location.state.id._id}/></Tab>
              <Tab eventKey='artdoc' title='Artist Document'><ArtistDocument artistId={location.state.id}/></Tab>
            </Tabs>
        </div>
        
      </div>

    </div>
  )
}

export default Artistdetails
