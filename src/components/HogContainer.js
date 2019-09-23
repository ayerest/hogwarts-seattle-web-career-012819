import React, {Component} from 'react'
import Hog from './Hog'
import SortButton from './SortButton'
import FilterButton from './FilterButton'

class HogContainer extends Component {
    constructor(props) {
        super(props)
    }
    displayHogs = () => {
        return this.props.hogs.map((hog, index )=> {
            return < Hog hog={hog} key={index}/>
        })
    }

    render() {
        return (<div className="ui grid container">
            <div>
            <SortButton onSort={this.props.onSort} />
            <FilterButton onFilter={this.props.onFilter} />
            </div>

            {this.displayHogs()}
        </div>)
    }
}

export default HogContainer