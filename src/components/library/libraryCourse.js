import React, { Component } from 'react';
import { Icon } from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
    render() {
        const { title, description } = this.props;
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">{ title }</label>
                    <Icon icon="check" className="library-course__icon" />
                </div>
                
                <Arrow className="library-course__arrow" />

                <Action className="library-course__action" />
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>{ description }</p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;