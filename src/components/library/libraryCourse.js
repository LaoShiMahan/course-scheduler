import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Icon } from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
    constructor() {
        super()
        this.state = {
            descriptionStatus: true
        }
    }

    renderDescription = (description) => {
        if(this.state.descriptionStatus) {
            return (
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>{ description }</p>
                </div>
            )
        }
    }

    handleCallback = (status) => {
        this.setState({
            descriptionStatus: status
        });
    }

    render() {
        const { id, title, description, toggleEnrolled } = this.props;
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">{ title }</label>
                    <Icon icon="check" className="library-course__icon" />
                </div>
                <div className="library-course__line"></div>
                <Arrow callBack={ status => this.handleCallback(status) } id={ id }className="library-course__arrow" />
                <Action onClick={ () => toggleEnrolled(id) } className="library-course__action" />
                { this.renderDescription(description) }
            </div>
        );
    }
}

export default connect(null, actions)(LibraryCourse);