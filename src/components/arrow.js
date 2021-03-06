import React, { Component } from 'react';

class Arrow extends Component {
    constructor() {
        super()
        this.state = {
            status: false
        }
    }

    toggleArrow = (id) => {
        this.props.callBack(this.state.status);
        if(this.state.status) {
            document.getElementById(`arrow-${id}`).classList.remove('arrow-closed');
        } else {
            document.getElementById(`arrow-${id}`).classList.add('arrow-closed');
        }
        this.setState(prevState => {
            return ({ status: !prevState.status });
        });
    }

    render() {
        const { id, className } = this.props;
        return (
            <a id={ `arrow-${id}` } onClick={ () => this.toggleArrow(id) } className={ `${ className } arrow` }></a>
        );
    }
}

export default Arrow;