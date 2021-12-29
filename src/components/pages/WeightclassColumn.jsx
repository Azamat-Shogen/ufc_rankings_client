import React, {Component} from 'react'
import AthleteCard from "./AthleteCard";
import data from "bootstrap/js/src/dom/data";



const WeightClassColumn = ({data}) => {




    const renderAthletes = () => {
        if(data){
            console.log('weightclass is: ',data)
            return <div className="container" >
                <h6 style={{color: "#d20a0a", letterSpacing: ".2px"}} className="page-header mt-3 mb-4">{'d'}</h6>
            </div>
        }
    }


    return (
        <div>
            {renderAthletes()}
        </div>
    )
}

export default WeightClassColumn

// class WeightClassColumn extends Component{
//     constructor(props) {
//         super(props);
//         this.toggle = this.toggle.bind(this);
//
//         this.state = {
//             collapse: 0,
//             cards: [],
//             athletes: [],
//             weightClassAthletes: []
//         }
//     }
//
//     componentDidMount() {
//         this.handleInitSetup()
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//        if(prevState.weightClassAthletes !== this.state.weightClassAthletes){
//            this.setState({...this.state,
//                cards: [].concat(this.state.weightClassAthletes.map((el, i) => i + 1))
//            })
//        }
//      }
//
//
//      handleInitSetup(){
//          const d = fetchAthletesData();
//          d.then(data => {
//              this.setState(
//                  {...this.state,
//                      athletes: data,
//                      weightClassAthletes: data.filter(el => el.weight_class === this.props.weightClass.id)
//                  })})
//      }
//
//
//     toggle(e) {
//         let event = e.target.dataset.event;
//         this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
//     }
//
//     render() {
//         const {collapse, weightClassAthletes} = this.state;
//
//         return (
//            <div className="container" >
//                 <h6 style={{color: "#d20a0a", letterSpacing: ".2px"}} className="page-header mt-3 mb-4">{this.props.weightClass.weight_class}</h6>
//                     <div>
//
//                     {
//                         weightClassAthletes.map(el => <AthleteCard athlete={el} key={el.id} collapse={collapse} toggle={this.toggle}/>)
//                     }
//                     </div>
//             </div>
//         );
//     }
//
// }



