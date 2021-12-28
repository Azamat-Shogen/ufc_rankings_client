import React, {useEffect, useState} from 'react'
import axios from 'axios';
import data from "bootstrap/js/src/dom/data";
import {Card, CardGroup, Col, Container, Row} from "reactstrap";
import {createRows, fetchWeightClassesData} from '../../utils'
import WeightClassColumn from "./WeightclassColumn";


const Home = () => {
    const [weightClasses, setWeightClasses] = useState([])
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(true)




    // useEffect(() => {
    //     const d = fetchWeightClassesData()
    //     d.then(el => {
    //         setLoading(false)
    //         setWeightClasses(el)
    //     })
    //
    //    return () => {
    //       console.log('Cleanup')
    //    }
    //
    // }, [loading])

    const baseUrl1 = "/feed/weightclasses"

    useEffect(() => {
       const fetchWeightClasses = async () => {
           //await axios.get(`http://ec2-3-18-183-239.us-east-2.compute.amazonaws.com:8000/api/weightclasses`)
           await axios.get(baseUrl1)
               .then(res => {
                   console.log('res is: ', res)
                   setLoading(false);
                   setWeightClasses(res.data)
               })
               .catch(err => console.log('error is: ', err))
       }

       fetchWeightClasses()

    }, [loading])




    useEffect(() => {
        if(weightClasses.length > 0){
            setRows(createRows(weightClasses, Math.ceil(weightClasses.length / 4)))
        }
    }, [weightClasses])



    return(

        <Container
            className="bg-white border mt-5 mb-5">
            {
                rows.map((r, i) => <Row md="4" sm="2" xs="1" className="mt-4" key={i}>
                    {
                        r.map((w) => <WeightClassColumn weightClass={w} key={w.id} />)
                    }
                </Row>)
            }
        </Container>

    )
}

export default Home