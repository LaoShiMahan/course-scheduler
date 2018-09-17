import React, { Component } from 'react';
import { Icon } from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                <Icon icon="check" className="library-course__icon" />
                
                {/* Arrow Component */}
                
                <Icon icon="plus-circle" className="library-course__action" />
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam totam, cupiditate mollitia quaerat consequuntur fuga asperiores facilis est. Similique blanditiis fugit saepe animi nisi! Placeat magni assumenda ullam fugiat.</p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;