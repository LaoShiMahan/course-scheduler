import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Action from '../action';

class ScheduleCourse extends Component {
    render() {
        const { id, title, toggleEnrolled } = this.props;
        return (
            <div className="schedule-course">
                <div className="schedule-course__title">{title}</div>
                <Action onClick={ () => toggleEnrolled(id) } className="schedule-course__action action-remove" />
            </div>
        );
    }
}

export default connect(null, actions)(ScheduleCourse);