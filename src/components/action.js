import React, { Component } from 'react';
import { Icon } from './icon';

class Action extends Component {
    render() {
        const { className } = this.props;
        console.log(className);
        return (
            <div className={ `${ className } action` }>
                <Icon icon="plus-circle" className={ className } />
                {/* <Icon icon="times-circle" className={ className } /> */}
            </div>
        );
    }
}

export default Action;