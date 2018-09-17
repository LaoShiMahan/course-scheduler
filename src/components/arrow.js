import React, { Component } from 'react';

class Arrow extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={ `${ className } arrow` }></div>
        );
    }
}

export default Arrow;