import React, { useState } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dahboard'
import Allartist from '../Pages/Allartist'
import Allcustomer from '../Pages/Allcustomer'
import Allorders from '../Pages/Allorders'
import Orderdetails from '../Pages/Orderdetails'
import './Main.css'
import Artistdetails from '../Pages/Artistdetails'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlinePeopleOutline } from 'react-icons/md'
import { BsClipboard2Heart } from 'react-icons/bs'
import { BsPeople } from 'react-icons/bs'
import { AiOutlineLogin } from 'react-icons/ai'
import flora from '../Assests/flora.png'

function Main() {
    const [select, setselect] = useState(0)
    return (
        <div>
            <Row>
                <Col lg={2}>
                    <div className='sidebar'>
                        <div className='logo'>

                            <span>Art Flora</span>
                        </div>
                        <div className='menue'>

                            <Nav className=''>
                                <div className={select === 0 ? 'menueitem active' : 'menueitem'} key={0} onClick={() => setselect(0)}>
                                    <Nav.Link>
                                        <Link to='/' className='link' >

                                            <div className='icon'> <AiOutlineHome /></div>
                                            <span>Dashboard</span>

                                        </Link>
                                    </Nav.Link>
                                </div>
                                <div className={select === 1 ? 'menueitem active' : 'menueitem'} key={1} onClick={() => setselect(1)}>
                                    <Nav.Link>
                                        <Link to='/allcustomer' className='link' >

                                            <div className='icon'> <MdOutlinePeopleOutline /></div>
                                            <span>Customers</span>

                                        </Link>
                                    </Nav.Link>
                                </div>
                                <div className={select === 2 ? 'menueitem active' : 'menueitem'} key={2} onClick={() => setselect(2)}>
                                    <Nav.Link>
                                        <Link to='/addorders' className='link' >

                                            <div className='icon'><BsClipboard2Heart /></div>
                                            <span>Orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                                        </Link>
                                    </Nav.Link>
                                </div>
                                <div className={select === 3 ? 'menueitem active' : 'menueitem'} key={3} onClick={() => setselect(3)}>
                                    <Nav.Link>
                                        <Link to='/allartist' className='link ' >

                                            <div className='icon'> <BsPeople /></div>
                                            <span>Artist List &nbsp;&nbsp;&nbsp;</span>

                                        </Link>
                                    </Nav.Link>
                                </div>
                                <div className='menueitem'>
                                    <Nav.Link>
                                        <Link to='' className='link mt-5 ml-0' >

                                            <div className='icon'><AiOutlineLogin /></div>


                                        </Link>
                                    </Nav.Link>
                                </div>

                            </Nav>


                        </div>

                    </div>
                </Col>

                <Col lg={10}>
                    <Routes>
                        <Route path='/' element={<Dashboard />}></Route>
                        <Route path='/allcustomer' element={<Allcustomer />}></Route>
                        <Route path='/addorders' element={<Allorders />}></Route>
                        <Route path='/allartist' element={<Allartist />}></Route>
                        <Route path='/artistdetails' element={<Artistdetails />}></Route>
                        <Route path='/orderdetails' element={<Orderdetails/>}></Route>
                    </Routes>
                </Col>
            </Row>

        </div >
    )
}

export default Main