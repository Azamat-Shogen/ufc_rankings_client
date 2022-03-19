import React, {useState, useEffect} from "react";
import {fetchAthletesData, fetchMenData, fetchWomenData} from "../../../api/requests";
import {Row, Spinner, PaginationItem, PaginationLink, Pagination, Nav} from 'reactstrap';
import {createRows2} from "../../../utils";
import AthleteCard from "./AthleteCard";
import withRouter from "../../../withRouter";
import "./Athletes.css"
import pageContainer from "../../../pageContainer";


const pageNumbners = [1, 2, 3]
const dataToLoad = [{fightes:"ALL", selected: true}, {fightes:"MEN", selected: false}, {fightes:"WOMEN", selected: false}]

const Athletes = (props) => {

   // const path = props.router.location.pathname
    

    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [rows, setRows] = useState([])
    const [filteredData, setFilteredData] = useState(dataToLoad)


    useEffect( () => {
        setLoading(true);
        let data;
        const selectedData = filteredData.find(el => el.selected === true).fightes

        console.log(selectedData)
        if(selectedData === "ALL") data = fetchAthletesData(page)
        else if(selectedData === "MEN") data = fetchMenData(page)
        else data = fetchWomenData(page)

        data.then( el => {
            setLoading(false);
            setRows(createRows2(el))
        })
        return () => {
           console.log("unmount athletes")
        }
    }, [page, filteredData])

    

    const toggleFilter = (filterByData) => {
      const temp = [...filteredData]
      temp.map(el => {
          if(el.fightes === filterByData){console.log("found"); el.selected = true}
          else { el.selected = false}
          return el
      })

      console.log(temp)
      setPage(1)
      setFilteredData(temp)
    }


    const handleNextClick = () => {
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
           <div className="athletes-toggle">
               <div className="data-to-load" onClick={() => toggleFilter("ALL")}>
               <h5 className={filteredData[0].selected ? "fighters-selected": "fighters-not-selected"}>ALL</h5>
               </div>
               <div className="data-to-load" onClick={() => toggleFilter("MEN")}>
               <h5 className={filteredData[1].selected ? "fighters-selected": "fighters-not-selected"}>MEN</h5>
               </div>
               <div className="data-to-load" onClick={() => toggleFilter("WOMEN")}>
               <h5 className={filteredData[2].selected ? "fighters-selected": "fighters-not-selected"}>WOMEN</h5>
               </div>
           </div>
            
            <div>
            { rows.length > 0 && (
                rows.map((row, i) => <Row md="4" sm="2" xs="1" className="mt-4 mb-4" key={i}>
                    {
                        row.map( el => <AthleteCard key={el.id} athlete={el} />)
                    }
                </Row>))
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

            {
                !loading && 
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
                
                <PaginationItem disabled={rows.length < 3}>
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
            </div> }
            </React.Fragment>
    )
}

export default withRouter(pageContainer(Athletes))