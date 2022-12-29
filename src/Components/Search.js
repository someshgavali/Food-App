import React, { useEffect } from 'react';
import "./style.css"
import Fooddata from './FoodData';
import { useState } from "react";
import { Form } from 'react-bootstrap';
import Cards from './Cards';
import Set from './Set';

const Search = () => {

    const [fdata, setFdata] = useState(Fooddata);
    // console.log(fdata)

    const [copydata, setCopyData] = useState();
    // console.log(copydata)

    const changeData = (e) => {

        let getchangedata = e.toLowerCase();

        if (getchangedata == "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });
            setCopyData(storedata);
        }
    }

    const zomatologo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafh7RZqxLLL42eHlwI9hG1HEl-_hbHBnpGA&usqp=CAU"

    useEffect(() => {
        setTimeout(() => {
            setCopyData(Fooddata);
        }, 3000);

    }, []);

    return (
        <>
            <div className='container d-flex justify-content-between align-items-center' >
                <img src={zomatologo} style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} alt='' />
                <h2 style={{ color: "#1b1464", cursor: "pointer" }}
                    className="mt-3" >Search Filter App</h2>
            </div>

            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
                    <Form.Control type="text"
                        onChange={(e) => changeData(e.target.value)}
                        placeholder="Search Restaurant" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
            </Form>

            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurants in Ahmedabad open now</h2>
                <div className='row mt-2  d-flex justify-content-aroud align-items-center'>
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set sdata={fdata}/>}
                </div>
            </section>
            
        </>
    );
};

export default Search;