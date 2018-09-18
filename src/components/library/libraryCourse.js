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
        const { id, title, description, enrolled, toggleEnrolled } = this.props;
        return (
            <div id={ `library-course-${id}` } className="library-course">
                <div className="library-course__title-check">
                    <div className="library-course__title">{ title }</div>
                    {enrolled ? <Icon icon="check" className="library-course__icon" /> : "" }
                </div>
                <Arrow id={ id } callBack={ status => this.handleCallback(status, id) } className="library-course__arrow" />
                <Action id={ id } onClick={ () => toggleEnrolled(id) } className={`library-course__action ${ enrolled ? "action-remove" : "" }`} />

                {/* {
                    this.state.descriptionStatus ?
                    <div className="library-course__description">
                        <div>Course Description</div>
                        <p>{ description }</p>
                    </div>
                    : ''
                } */}
                <div className="library-course__description">
                    <AnimateHeight duration={300} height={this.state.height}>

                            <div>Course Description</div>
                            <p>{ description }</p>
            
                    </AnimateHeight>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(LibraryCourse);