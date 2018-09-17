import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Icon = (props) => {
    const {icon, className} = props;
    return (
        <FontAwesomeIcon icon={icon} className={className}/>
            // <i className={ `${icon} ${className}` }></i>
    );
}