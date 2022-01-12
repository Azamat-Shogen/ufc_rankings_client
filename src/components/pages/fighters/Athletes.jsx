import React, {useState, useEffect} from "react";
import {fetchAthletesData} from "../../../api/requests";
import {Container, Row, Col, Spinner, PaginationItem, PaginationLink, Pagination} from 'reactstrap';
import {createRows2} from "../../../utils";
import AthleteCard from "./AthleteCard";
import withRouter from "../../../withRouter";



const Athletes = () => {

    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [rows, setRows] = useState([])

    useEffect( () => {
       const data = fetchAthletesData(page)
        data.then( el => {
            setLoading(false);
            setRows(createRows2(el))
        })
        return () => {
           console.log("unmount athletes")
        }
    }, [])



    const renderRows = () => (
        <>
            <h1>ATHLETES</h1>
            {
                rows.map((row, i) => <Row md="4" sm="2" xs="1" className="mt-4 mb-4" key={i}>
                    {
                        row.map( el => <AthleteCard key={el.id} athlete={el} />)
                    }
                </Row>)
            }
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
            <div className="d-flex flex-row-reverse" >
            <Pagination aria-label="Page">
                <PaginationItem disabled>
                    <PaginationLink
                        first
                        href="#"
                    />
                </PaginationItem>
                <PaginationItem disabled>
                    <PaginationLink
                        href="#"
                        previous
                    />
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        next
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        last
                    />
                </PaginationItem>
            </Pagination>
            </div>
        </Container>
    )
}

export default withRouter(Athletes)