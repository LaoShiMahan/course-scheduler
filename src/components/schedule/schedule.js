import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';

class Schedule extends Component {
    renderCourses = () => {
        const data = this.props.courses;

        return data.map((course, index) => {
            if(course.enrolled && this.amountEnrolled !== 5) {
                this.amountEnrolled++;
                return <ScheduleCourse { ...course } key={ index }/>
            }
        })
    }

    render() {
        this.amountEnrolled = 0;
        return (
            <div className="schedule">
                <h1 className="schedule__title">Course Schedule</h1>
                { this.renderCourses() }
                <ProgressTracker max={5} enrolled={ this.amountEnrolled }/>
                <Gradient />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(Schedule);