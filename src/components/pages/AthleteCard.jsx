import React from 'react';
import {Card, CardBody, CardHeader, Collapse} from "reactstrap";


const AthleteCard = ({athlete, toggle, collapse}) => {


    return(
        <div>
            <Card className="" style={{ border: 'none', marginBottom: '0.1rem' }} >
                {
                    athlete.rank === 0 ? <CardHeader className="bg-white p-1" onClick={toggle}
                                                     data-event={athlete.id}>{athlete.athlete_name} {collapse === athlete.id ? '➖' : '➕'}</CardHeader> :
                        <CardHeader className="bg-white p-1" onClick={toggle}
                                    data-event={athlete.id}>{`${athlete.rank}.  ${athlete.athlete_name}`} </CardHeader>
                }

                {
                    athlete.rank === 0 ? <Collapse className="bg-white" isOpen={collapse === 0}>
                        <CardBody>
                            <p>CHAMPION</p>
                            <img src={athlete.image_src} alt=""/>
                        </CardBody>
                    </Collapse>:

                        <Collapse className="bg-white" isOpen={collapse === athlete.id}>
                            <CardBody>
                                <img src={athlete.image_src} style={{width: "208px", height: "130px"}} alt=""/>
                            </CardBody>
                        </Collapse>
                }
            </Card>
        </div>

    )
}

export default AthleteCard;