import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import AnimateHeight from 'react-animate-height';
import { Icon } from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
    constructor() {
        super()
        this.state = {
            descriptionStatus: false,
            height: 0
        }
    }

    handleCallback = (status, id) => {
        let height = this.state.height === 0 ? "auto" : 0;

        status ? 
            document.getElementById(`library-course-${id}`).classList.remove('library-course-selected')
            :
            document.getElementById(`library-course-${id}`).classList.add('library-course-selected')
        
        this.setState({
            descriptionStatus: !status,
            height: height
        });
    }

    render() {
        const { id, title, description, toggleEnrolled } = this.props;
        return (
            <div id={ `library-course-${id}` } className="library-course">
                <div className="library-course__title-check">
                    <div className="library-course__title">{ title }</div>
                    <Icon icon="check" className="library-course__icon" />
                </div>
                <Arrow id={ id } callBack={ status => this.handleCallback(status, id) } className="library-course__arrow" />
                <Action id={ id } onClick={ () => toggleEnrolled(id) } className="library-course__action" />
                <AnimateHeight duration={300} height={this.state.height} className="library-course__description">
                    <label>Course Description</label>
                    <p>{ description }</p>
                </AnimateHeight>
            </div>
        );
    }
}

export default connect(null, actions)(LibraryCourse);