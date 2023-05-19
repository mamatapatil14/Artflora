import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './Allcustomer.css'

function Allcustomer() {
    const [allCus, setallCus] = useState([])


    useEffect(() => {
        axios.get("http://localhost:5000/AllCustomer")
            .then((result) => {
                setallCus(result.data)
                console.log(result)
            }).catch((err) => {
                console.log(err)
            })



    }, [])
    return (
        <div className=''>
            {/* <Container className=' border border-1 mt-2 ms-3 '> */}
                <table className=' maindiv table table-striped border border-1'>
                    <tr className=''>
                        <th className='ps-4'>sr no.</th>
                        <th className='ps-4'>Name</th>
                        <th className='ps-4'>Mobile No</th>
                        <th className='ps-4'>Address</th>
                        <th className='ps-4'>City</th>
                        <th className='ps-4'>State</th>
                        <th className='ps-4'>Pincode</th>
                        <th className='ps-4'>Email</th>
                        <th className='ps-4'>Image</th>
                        

                      
                        
                    </tr>
                    <tbody>
                        {
                            allCus.map((cus, idx) => {
                                return (
                                    <tr>
                                        <td className='ps-4'>{idx + 1}</td>
                                        <td className='ps-4'>{cus.Customername}</td>
                                        <td className='ps-4'>{cus.Customermobno}</td>
                                        <td className='ps-4'>{cus.Customeraddress}</td>
                                        <td className='ps-4'>{cus.City}</td>
                                        <td className='ps-4'>{cus.State}</td>
                                        <td className='ps-4'>{cus.Pincode}</td>
                                        <td className='ps-4'>{cus.City}</td>
                                        <td className='ps-4'>{cus.Email}</td>
                                        
                                        <td>
                                            <img src={`http://localhost:5000${cus.Profile}`} className='setimage' />
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>
            {/* </Container> */}
        </div>
    )
}

export default Allcustomer
