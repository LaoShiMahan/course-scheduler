import React, { Component } from 'react';

class ScheduleCourse extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="schedule-course">
                <label>{title}</label>
            </div>
        );
    }
}

export default ScheduleCourse;