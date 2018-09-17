import React, { Component } from 'react';

class Arrow extends Component {
    constructor() {
        super()
        this.state = {
            status: true
        }
    }

    toggleArrow = (id) => {
        this.props.callBack(this.state.status);
        if(this.state.status) {
            document.getElementById(id).classList.add('arrow-closed');
        } else {
            document.getElementById(id).classList.remove('arrow-closed');
        }
        this.setState(prevState => {
            return ({ status: !prevState.status });
        });
    }

    render() {
        const { id, className } = this.props;
        return (
            <a id={id} onClick={ () => this.toggleArrow(id) } className={ `${ className } arrow` }></a>
        );
    }
}

export default Arrow;