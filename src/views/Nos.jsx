import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import nosStyle from '../assets/jss/views/nosStyle';

class Nos extends React.Component {

    render() {
        const {
            classes
        } = this.props;

        return (
            'Nós'
        );
    }
}

Nos.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(nosStyle)(Nos);
