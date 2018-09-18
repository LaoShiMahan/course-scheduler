import React, { Component } from 'react';

class ProgressTracker extends Component {
    calculateProgress = () => {
        const {max, enrolled} = this.props;
        return enrolled / max * 100;
    }



    render() {
        return (
            <div className={`progress-tracker percentage-${ this.calculateProgress() }`}>
                <div className="progress-tracker__title">Progress Tracker</div>
                <div className="progress-tracker__percentage">
                    { this.calculateProgress() }%
                </div>
            </div>
        );
    }
}

export default ProgressTracker;