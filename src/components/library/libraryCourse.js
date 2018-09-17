import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/* Icon Component
                Arrow Component
                Action Button Component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam totam, cupiditate mollitia quaerat consequuntur fuga asperiores facilis est. Similique blanditiis fugit saepe animi nisi! Placeat magni assumenda ullam fugiat.</p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;