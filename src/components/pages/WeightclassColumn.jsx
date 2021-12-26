import React, {useState, Component} from 'react'
import { Collapse, Card, CardHeader, CardBody, Col} from "reactstrap";
import axios from "axios";



class WeightClassColumn extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            collapse: 0,
            cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            athletes: []
        };
    }

    componentDidMount() {
        this.fetchAthletes()
    }

    async fetchAthletes() {
        await axios.get(process.env.REACT_APP_API_ATHLETES)
            .then(res => res.data)
            .then(data => this.setState({...this.state, athletes: data}))
            .catch(err => console.log(err))
    }



    toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }

    render() {
        const {cards, collapse} = this.state;

        return (
           <div className="container" >
                <h6 style={{color: "#d20a0a", letterSpacing: ".2px"}} className="page-header mt-3 mb-4">{this.props.weightClass.weight_class}</h6>
                {cards.map(index => {
                    return (
                        <Card className="" style={{ border: 'none', marginBottom: '0.1rem' }} key={index}>
                            <CardHeader className="bg-white p-1"  onClick={this.toggle} data-event={index}>Header {collapse === index?'➖':'➕'}</CardHeader>
                            <Collapse className="bg-white" isOpen={collapse === index}>
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