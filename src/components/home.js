import React, { Component } from 'react';
import CourseLibrary from './courseLibrary';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='library'>
                    <h1 className='library__header'>Course Library</h1>
                    <CourseLibrary />
                </div>
                <div className='schedule'>
                    <h1 className='schedule__header'>My Schedule</h1>
                </div>
            </div>
        );
    }
}

export default Home;