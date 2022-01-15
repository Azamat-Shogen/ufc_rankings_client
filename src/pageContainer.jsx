import React from "react";
import {Container} from "reactstrap";

function pageContainer(Component){
   
       const Hoc = (props) => {

            return (
                <Container className="bg-white border mt-5 mb-5" style={{ height: "1019px", width: "1140"}}>
                  <Component {...props} />
                </Container>
            )
        }
        return Hoc
}

export default pageContainer