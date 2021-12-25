import React, {useEffect, useState} from 'react'
import axios from 'axios';
import data from "bootstrap/js/src/dom/data";
import {Col, Container, Row} from "reactstrap";
import {createRows} from '../../utils'
import WeightClassColumn from "./WeightclassColumn";


const Home = () => {
    const [weightClasses, setWeightClasses] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "j", "i", "k"])
    const [athletes, setAthletes] = useState(["cj", "aj", "dj", "jj"])
    const [users, setUsers] = useState(null)
    const [rows, setRows] = useState([])


    const rowsLength = Math.ceil(weightClasses.length / 4)


    //setRows(createRows(weightClasses, rowsLength))


    useEffect(() => {
        setRows(createRows(weightClasses, rowsLength))
    }, [])

    console.log('rows: ', rows)

    // useEffect(() => {
    //    const fetchData = async () => {
    //       await axios.get(process.env.REACT_APP_API_WEICHTCLASSES)
    //           .then(response => response.data)
    //            .then(data => {
    //                console.log(data)
    //                setWeightClasses(data)
    //            })
    //            .catch(err => console.log(err))
    //    }
    //
    //    fetchData()
    //
    //    return () => {
    //       console.log('Cleanup')
    //    }
    //
    // }, [])

    const d = process.env.REACT_APP_API_WEIGHTCLASSES
    console.log(process.env.REACT_APP_API_WEIGHTCLASSES)
    // useEffect(() => {
    //     fetch(process.env.REACT_APP_API_WEIGHTCLASSES)
    //     // fetch("http://127.0.0.1:8000/api/weightclasses")
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err))
    //
    //     return () => {
    //         console.log('Cleanup')
    //     }
    //
    // }, [])



    return(
        <Container
            // className="bg-light border mt-5"
            className="bg-white border mt-5 mb-5"

        >
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