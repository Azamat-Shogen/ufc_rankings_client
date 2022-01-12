import React from 'react';
import {Card, CardBody, CardFooter, CardHeader} from "reactstrap";
import "./athleteCard.css"

const AthleteCard = ({athlete}) => {


    return (
        <div>
          <Card className="card_item">
              <CardHeader className="bg-white p-1 header">
                  <div className="m-auto">
                      <img className="athlete_img" src={athlete.image_src} alt=""/>
                  </div>
              {/*<div>{athlete.athlete_name}</div>*/}
              </CardHeader>
              <CardBody>
              <div>
                  <div>{`"${athlete.nickname}"`}</div>
                  <div>{athlete.athlete_name}</div>
              </div>
              </CardBody>

          </Card>
        </div>
    )
}

export default AthleteCard