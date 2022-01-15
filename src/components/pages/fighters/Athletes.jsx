import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {fetchAthletesData} from "../../../api/requests";
import {Container, Row, Col, Spinner, PaginationItem, PaginationLink, Pagination} from 'reactstrap';
import {createRows2} from "../../../utils";
import AthleteCard from "./AthleteCard";
import withRouter from "../../../withRouter";
import "./Athletes.css"
import pageContainer from "../../../pageContainer";



const Athletes = (props) => {

   // const path = props.router.location.pathname
   
    const pageNumbners = [1, 2, 3]

    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [rows, setRows] = useState([])

    const navigate = useNavigate()

    useEffect( () => {
        setLoading(true);
       const data = fetchAthletesData(page)
        data.then( el => {
            setLoading(false);
            setRows(createRows2(el))
        })
        return () => {
           console.log("unmount athletes")
        }
    }, [page])


    const handleNextClick = () => {
        // setPage(state => state + 1)
        setPage(prev => prev + 1)
    }

    const handlePrevClick = () => {
        setPage(prev => prev - 1)
    }

    const handleNumberClick = (num) => {
        setPage(num)
    }



    const renderRows = () => (
        <>
            <h1>ATHLETES</h1>
            <div>
            {
                rows.map((row, i) => <Row md="4" sm="2" xs="1" className="mt-4 mb-4" key={i}>
                    {
                        row.map( el => <AthleteCard key={el.id} athlete={el} />)
                    }
                </Row>)
            }
            </div>
        </>
    )

    return (
        <React.Fragment>  
            {
                loading ? <div className="spinner"><Spinner>
                    Loading...
                </Spinner></div> : renderRows()

            }
            <div className="d-flex flex-row-reverse" >
            <Pagination aria-label="Page" size="sm">
            
                <PaginationItem disabled>
                    <PaginationLink
                        first
                        href="#"
                    />
                </PaginationItem>
                <PaginationItem disabled={page === 1}>
                    <PaginationLink
                        onClick={handlePrevClick}
                        previous
                    />
                </PaginationItem>
                <PaginationItem active={pageNumbners[0] === page}>
                    <PaginationLink onClick={() => handleNumberClick(1)}>
                        {pageNumbners[0]}
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem active={pageNumbners[1] === page}>
                    <PaginationLink onClick={() => handleNumberClick(2)} >
                    {pageNumbners[1]}
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem active={pageNumbners[2] === page}>
                    <PaginationLink onClick={() => handleNumberClick(3)} >
                    {pageNumbners[2]}
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem disabled>
                    <PaginationLink  >
                    {"..."}
                    </PaginationLink>
                </PaginationItem>

                {
                    page > 3 && 
                    <PaginationItem active >
                    <PaginationLink  >
                    {page}
                    </PaginationLink>
                </PaginationItem>
                }
                
                <PaginationItem>
                    <PaginationLink
                        // href="/"
                        onClick={handleNextClick}
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
            </React.Fragment>
    )
}

export default withRouter(pageContainer(Athletes))