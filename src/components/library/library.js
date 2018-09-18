import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import LibraryCourse from './libraryCourse';

class Library extends Component {
    componentWillMount() {
        this.props.fetchCourses();
    }

    renderCourses = () => {
        const data = this.props.courses;

        return data.map((course, index) => {
            return <LibraryCourse { ...course } key={ index } className="library__course"/>
        })
    }

    render() {
        return (
            <div className="library">
                <div className="library-container">
                    <h1 className="library__title">Course Library</h1>
                    { this.renderCourses() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps, actions)(Library);