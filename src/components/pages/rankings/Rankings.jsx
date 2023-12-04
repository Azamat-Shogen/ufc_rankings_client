import React, {useEffect, useState} from 'react';
import {Row, Spinner} from "reactstrap";
import {createRows} from '../../../utils'
import {fetchRankingsAthletesData, fetchWeightClassesData, // these methods for django api ( currently disconnected )
    getRankingsData, getWeightClassesData} from '../../../api/requests';


import WeightClassColumn from "../weight_class_athletes/WeightclassColumn";
import pageContainer from '../../../pageContainer';


const Rankings = () => {
    const [athletesData, setAthletesData] = useState([])
    const [rows, setRows] = useState([])
    const [loading1, setLoading1] = useState(true)
    const [loading2, setLoading2] = useState(true)


    useEffect(() => {
        const data1 = getRankingsData()
        data1.then(el => {
            setAthletesData(el)
            setLoading1(false)
        })
        if(!loading1){
            const data2 = getWeightClassesData()
            data2.then(d => {
                setRows(createRows(d, Math.ceil(d.length / 4), athletesData))
                setLoading2(false)
            })
        }

        return () => {
            console.log('unmounted')
        }
    }, [loading1])
    

    const renderRows = () => (
        <>
            <h1>ATHLETE RANKINGS</h1>
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

        <React.Fragment>
            {
                loading2 ? <Spinner>
                    Loading...
                </Spinner> : renderRows()
            }
            </React.Fragment>

    )
}

export default pageContainer(Rankings)