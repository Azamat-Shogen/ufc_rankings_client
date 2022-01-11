import React, {useState, useEffect} from "react";
import {fetchAthletesData} from "../../../api/requests";
import {Container, Row, Col, Spinner} from 'reactstrap';
import {createRows} from "../../../utils";



const Athletes = () => {
    const [athletes, setAthletes] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [rows, setRows] = useState([])

    useEffect( () => {
       const data = fetchAthletesData(page)
        data.then( el => {
            setLoading(false)
            setAthletes(el);

        })
        return () => {
           console.log("unmount athletes")
        }
    }, [])

    console.log(athletes)


    const renderRows = () => (
        <>
            <h1>ATHLETES</h1>
        </>
    )

    return (
        <Container
            className="bg-white border mt-5 mb-5">
            {
                loading ? <Spinner>
                    Loading...
                </Spinner> : renderRows()

            }
        </Container>
    )
}

export default Athletes