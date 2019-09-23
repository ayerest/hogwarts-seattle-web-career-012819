import React, {Component} from 'react'

class Hog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDetails: false
        }
    }

    handleHideHog = (e) => {
        // debugger
        e.target.parentElement.style = "display: none"
    }


    handleShowDetails = (e) => {
        this.setState(prevState => {
            // debugger
            return {showDetails: !prevState.showDetails}
        }, () => console.log(this.state.showDetails))
    }


    render() {
        let { greased, name, specialty, weight } = this.props.hog
        let formattedName = name.toLowerCase().split(" ").join("_")
        const imgUrl = require(`../hog-imgs/${formattedName}.jpg`)
        return(
            <div className="ui eight wide column">
                <h3>{name}</h3>
                <img src={imgUrl} alt={name}/>
                <button onClick={this.handleHideHog}>Hide This Hog</button>
                <button onClick={this.handleShowDetails}>{this.state.showDetails ? "Hide Details" : "Show Details"}</button>
                <div>
                {this.state.showDetails ? 
                    (<ul>
                        <li>Weight: {weight}</li>
                        <li>Speciality: {specialty}</li>
                        <li>Greased: {greased.toString()}</li>
                    </ul>) 
                    : null}
                </div>
                
            </div>
        )
    }
}

export default Hog