import React from 'react';

export const ScheduleSlots = (props) => {
    return (
        <div className="schedule-slot">
            <div className={`schedule-slot__${props.id}`}>Empty Course</div>
        </div>
    );
}