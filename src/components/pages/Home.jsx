import React, {useEffect, useState} from 'react';
import {Container, Row, Spinner} from "reactstrap";
import {createRows} from '../../utils'
import { fetchAthletesData, fetchWeightClassesData } from '../../api/requests';
import WeightClassColumn from "./WeightclassColumn";


const Home = () => {
    const [athletesData, setAthletesData] = useState([])
    const [rows, setRows] = useState([])
    const [loading1, setLoading1] = useState(true)
    const [loading2, setLoading2] = useState(true)
    


    useEffect(() => {

        const data1 = fetchAthletesData()
        data1.then(el => {
            setAthletesData(el)
            setLoading1(false)
        })
       if(!loading1){
           const data2 = fetchWeightClassesData()
           data2.then(d => {
               setRows(createRows(d, Math.ceil(d.length / 4), athletesData))
               setLoading2(false)
           })
       }


        return () => {
            console.log('🐥')
        }

    }, [loading1])

    

    const renderRows = () => (
        <>
        {
            rows.map((row, i) => <Row md="4" sm="2" xs="1" className="mt-4" key={i}>
                {
                    row.map((el) => <WeightClassColumn key={el.id}  data={el} />)
                }
            </Row>)
        }
        </>
    )


    return(

        <Container
            className="bg-white border mt-5 mb-5">
            {
                loading2 ? <Spinner>
                    Loading...
                </Spinner>: renderRows()
            }
        </Container>

    )
}

export default Home