import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function Pagination({ showPerPage, onPagignationChange, total }) {
    const [counter, setcounter] = useState(1)
    const [numbersofbutton, setnumbersofbutton] = useState(Math.ceil(total / showPerPage))


    useEffect(() => {
        const value = showPerPage * counter
        onPagignationChange(value - showPerPage, value)

    }, [counter])

    const onButtonClick = (type) => {
        if (type == 'prev') {
            if (counter == 1) {
                setcounter(1)
            } else {
                setcounter(counter - 1)
            }
        } else if (type == 'next') {
            if (Math.ceil(total / showPerPage) == counter) {
                setcounter(counter)
            } else {
                setcounter(counter + 1)
            }

        }
    }
    return (
        <div className='d-flex justify-content-center'>
            <nav aria-label="Page navigation example " >
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#" onClick={() => onButtonClick('prev')}>Previous</a></li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {

                        new Array(Math.ceil(total / showPerPage)).fill("").map((el,index)=>
                            (
                                <li class={`page-item ${index+1===counter?"active":null}`}><a class="page-link" href="#" onClick={()=>setcounter(index+1)}>{index+1} </a></li>
                            )
                        )
                    }
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li class="page-item"><a class="page-link" href="#" onClick={() => onButtonClick('next')}>Next</a></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Pagination
