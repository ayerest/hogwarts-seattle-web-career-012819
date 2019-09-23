import React, {Component} from 'react'

class SortButton extends Component {
    constructor() {
        super()
    }

    handleSortClick = () => {
        this.props.onSort()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleSortClick}>Sort Hogs by Weight</button>
            </div>
        )
    }
}

export default SortButton