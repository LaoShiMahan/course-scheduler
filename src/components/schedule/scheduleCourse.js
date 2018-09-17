import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Action from '../action';

class ScheduleCourse extends Component {
    render() {
        const { id, title, toggleEnrolled } = this.props;
        return (
            <div className="schedule-course">
                <label>{title}</label>
                <Action onClick={ () => toggleEnrolled(id) } className="library-course__action" />
            </div>
        );
    }
}

export default connect(null, actions)(ScheduleCourse);