import React, { Component } from 'react'

class FilterButton extends Component {
    constructor() {
        super()
    }

    handleFilterClick = () => {
        this.props.onFilter()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleFilterClick}>Filter Greased Hogs</button>
            </div>
        )
    }
}

export default FilterButton