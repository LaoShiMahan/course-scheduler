import React, { Component } from 'react';

class ProgressTracker extends Component {
    calculateProgress = () => {
        const {max, enrolled} = this.props;
        return enrolled / max * 100;
    }

    render() {
        return (
            <div className="progress-tracker">
                <label className="progress-tracker__label">ProgressTracker</label>
                <div className="progress-tracker__percentage">
                    { this.calculateProgress() }%
                </div>
            </div>
        );
    }
}

export default ProgressTracker;