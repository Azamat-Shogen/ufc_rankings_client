import React, {useState} from 'react'
import AthleteCollapseCard from "../rankings_athlete_collapse/AthleteCollapseCard";



const WeightClassColumn = ({data}) => {

   const [collapse, setCollapse] = useState(0)
   
   const toggle = (e) => {
       const event = e.target.dataset.event;
    setCollapse(collapse === Number(event) ? 0: Number(event))

   }
    
    return (
        <div className="container mb-4" >
            <h6 style={{color: "#d20a0a", letterSpacing: ".2px"}} className="page-header mt-3 mb-4">{data.weight_class}</h6>
            { data.athletes.map(el => <AthleteCollapseCard key={el.id}
                                                           toggle={toggle} collapse={collapse}
                                                           athlete={el}
                                      />)
            }
            </div>
    )
}

export default WeightClassColumn

