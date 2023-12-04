import React from 'react';
import {Card, CardBody, CardFooter, CardHeader} from "reactstrap";
import "./athleteCard.css"

const default_image_src = "https://www.ufc.com/themes/custom/ufc/assets/img/no-profile-image.png"

const AthleteCard = ({athlete}) => {

    const valid_image = athlete.img_src.slice(0, 4) === "http";
    const profile_img = valid_image ? athlete.img_src : default_image_src

   
   
    return (
        <div>
          <Card className="card_item">
              <CardHeader className="bg-white p-1 header">
                  <div className="m-auto">
                      <img className="athlete_img" src={profile_img} alt=""/>
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