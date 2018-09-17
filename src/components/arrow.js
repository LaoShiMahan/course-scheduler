import React, { Component } from 'react';

class Arrow extends Component {
    constructor() {
        super()
        this.state = {
            status: false
        }
    }

    toggleArrow = () => {
        if(this.state.status) {
            document.getElementById('arrow').classList.remove('arrow-closed');
        } else {
            document.getElementById('arrow').classList.add('arrow-closed');
        }
        this.setState(prevState => {
            return ({ status: !prevState.status });
        });
    }

    render() {
        const { className } = this.props;
        return (
            <a id="arrow" onClick={ () => this.toggleArrow() } className={ `${ className } arrow` }></a>
        );
    }
}

export default Arrow;