import React from 'react';
import PropTypes from 'prop-types';

class Collapsible extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            isExpanded: false
        }
    }
    
    handleToggle(evt) {
        evt.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

    render() {
        const {title, children} = this.props;
        const {isExpanded} = this.state;

        return (
            <div className={`panel ${isExpanded ? 'is-expanded' : ''}`} onClick={this.handleToggle}>
                <div className="panel-heading">
                    <h2>{title}</h2>
                </div>
                <div className="panel-collapse">
                    <div className="panel-body">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Collapsible.propTypes = {
    title: PropTypes.string
}

export default Collapsible;

