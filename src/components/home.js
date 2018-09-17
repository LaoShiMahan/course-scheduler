import React, { Component } from 'react';
import Library from './library/library';
import Schedule from './schedule/schedule';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faCheck, faPlusCircle, faTimesCircle);

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Library />
                <Schedule />
            </div>
        );
    }
}

export default Home;