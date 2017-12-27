import React from 'react';
import PropTypes from 'prop-types';

class Collapsible extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const {title, children} = this.props;

        return (
            <div className="panel">
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

