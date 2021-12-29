import React, {useEffect, useState} from 'react';
import {Container, Row, Spinner} from "reactstrap";
import {createRows, fetchWeightClassesData, fetchAthletesData, filterAthletesData} from '../../utils'
import WeightClassColumn from "./WeightclassColumn";


const Home = () => {
    const [weightClasses, setWeightClasses] = useState([])
    const [athletesData, setAthletesData] = useState([])
    const [rows, setRows] = useState([])
    const [loading1, setLoading1] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [data, setData] = useState([])




    useEffect(() => {

        const data1 = fetchAthletesData()
        data1.then(el => {
            setAthletesData(el)
            setLoading1(false)
        })
       if(!loading1){
           const data2 = fetchWeightClassesData()
           data2.then(d => {
               setRows(createRows(d, Math.ceil(d.length / 4)))
               setWeightClasses(d)
               let tempData =[]
               d.forEach( el => {
                   tempData.push({weightClass: el, athletes: filterAthletesData(el, athletesData)})
                   setData(tempData)
                   // setData([...data, {weightClass: el, athletes: filterAthletesData(el, athletesData)}])
               })
               setLoading2(false)
           })
       }


        return () => {
            console.log('🐥')
        }

    }, [loading1])

    // useEffect(() => {
    //     if(!loading1){
    //         const data2 = fetchWeightClassesData()
    //         data2.then(d => {
    //             setWeightClasses([...weightClasses, ...d])
    //             d.forEach( el => {
    //                 setData([...data, {weightClass: el, athletes: filterAthletesData(el, athletesData)}])
    //             })
    //             setLoading2(false)
    //         })
    //     }
    //
    // },[])




    // useEffect(() => {
    //     const d = fetchWeightClassesData()
    //     d.then(el => {
    //         setWeightClasses(el)
    //         const d2 = fetchAthletesData()
    //         d2.then(el2 => {
    //             setAthletes(el2)
    //             setLoading(false)
    //         })
    //     })
    //
    //
    //    return () => {
    //       console.log('🐥')
    //    }
    //
    // }, [loading])





    // useEffect(() => {
    //     if(weightClasses.length > 0){
    //         setRows(createRows(weightClasses, Math.ceil(weightClasses.length / 4)))
    //     }
    // }, [loading2])


    const renderRows = () => (
        <>
        {
            rows.map((row, i) => <Row md="4" sm="2" xs="1" className="mt-4" key={i}>
                {
                    row.map(w => <WeightClassColumn key={w.id} data={data} />)
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
            {/*{*/}
            {/*    rows.map((r, i) => <Row md="4" sm="2" xs="1" className="mt-4" key={i}>*/}
            {/*        {*/}
            {/*            r.map((w) => <WeightClassColumn weightClass={w} key={w.id} />)*/}
            {/*        }*/}
            {/*    </Row>)*/}
            {/*}*/}
        </Container>

    )
}

export default Home