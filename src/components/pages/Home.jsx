import React, {useEffect, useState} from 'react'
import axios from 'axios';
import data from "bootstrap/js/src/dom/data";
import {Card, CardGroup, Col, Container, Row} from "reactstrap";
import {createRows, fetchWeightClassesData} from '../../utils'
import WeightClassColumn from "./WeightclassColumn";


const Home = () => {
    const [weightClasses, setWeightClasses] = useState([])
    const [rows, setRows] = useState([])
    const [rowLength, setRowLength] = useState(0)
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        const d = fetchWeightClassesData()
        d.then(el => {
            setLoading(false)
            setWeightClasses(el)
        })

       return () => {
          console.log('Cleanup')
       }

    }, [loading])


    useEffect(() => {
        if(weightClasses.length > 0){
            setRows(createRows(weightClasses, Math.ceil(weightClasses.length / 4)))
            console.log('workded ', weightClasses.length)
        }
    }, [weightClasses])




    // return(
    //     <Container>
    //            <CardGroup>
    //                {weightClasses.map(el => {
    //                    return <WeightClassColumn lg="4" md="4" sm="2" xs="1" weightClass={el} />
    //                })}
    //            </CardGroup>
    //
    //     </Container>
    // )

    return(
        <Container
            className="bg-white border mt-5 mb-5">
            {
                rows.map((r, i) => <Row md="4" sm="2" xs="1" className="mt-4">
                    {
                        r.map((w, wIdx) => <WeightClassColumn weightClass={w} />)
                    }
                </Row>)
            }
        </Container>
    )
}

export default Home