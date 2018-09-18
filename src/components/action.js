import React, { Component } from 'react';
import { Icon } from './icon';

class Action extends Component {
    constructor() {
        super()
        this.state = {
            status: false
        }
    }

    handleAction = (onClick) => {
        onClick();
        if(this.state.status) {
            document.getElementById("action").classList.remove("action-remove");
        } else {
            document.getElementById("action").classList.add("action-remove");
        }
        this.setState((prevState) => {
            return ({
                status: !prevState.status
            })
        })
    }

    render() {
        const { onClick, className } = this.props;
        return (
            <a id="action" onClick={ () => this.handleAction(onClick) } className={ `${ className } action` }>
                {/* <Icon icon="plus-circle" className={ className } /> */}
                {/* <Icon icon="times-circle" className={ className } /> */}
            </a>
        );
    }
}

export default Action;