import React, {useState, Component} from 'react'
import { Collapse, Card, CardHeader, CardBody, Col} from "reactstrap";


class WeightClassColumn extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            collapse: 0,
            cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        };
    }

    toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }

    render() {
        const {cards, collapse} = this.state;
        return (
            <div className="container">
                <h6 className="page-header">Reactstrap Accordion</h6>
                {cards.map(index => {
                    return (
                        <Card style={{ marginBottom: '0.1rem' }} key={index}>
                            <CardHeader onClick={this.toggle} data-event={index}>Header {collapse === index?'➖':'➕'}</CardHeader>
                            <Collapse isOpen={collapse === index}>
                                <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                </CardBody>
                            </Collapse>
                        </Card>
                    )
                })}
            </div>
        );
    }

}



export default WeightClassColumn