import React, { Component } from 'react';
import { Icon } from './icon';

class Action extends Component {
    constructor() {
        super()
        this.state = {
            status: false
        }
    }

    handleAction = (id, onClick) => {
        onClick();

        this.state.status ?
            document.getElementById(`action-${id}`).classList.remove("action-remove")
            :
            document.getElementById(`action-${id}`).classList.add("action-remove")

        this.setState((prevState) => {
            return ({ status: !prevState.status })
        });
    }

    render() {
        const { id, onClick, className } = this.props;
        console.log(this.props);
        return (
            <a id={ `action-${id}` } onClick={ () => this.handleAction(id, onClick) } className={ `${ className } action` }>
                {/* <Icon icon="plus-circle" className={ className } /> */}
                {/* <Icon icon="times-circle" className={ className } /> */}
            </a>
        );
    }
}

export default Action;