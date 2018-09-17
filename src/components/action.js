import React, { Component } from 'react';
import { Icon } from './icon';

class Action extends Component {
    render() {
        const { onClick, className } = this.props;
        return (
            <button onClick={() => onClick() } className={ `${ className } action` }>
                <Icon icon="plus-circle" className={ className } />
                {/* <Icon icon="times-circle" className={ className } /> */}
            </button>
        );
    }
}

export default Action;