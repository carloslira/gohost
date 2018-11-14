import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import inicialStyle from '../assets/jss/views/inicialStyle';

class Inicial extends React.Component {

    render() {
        const {
            classes
        } = this.props;

        return (
            'Inicial'
        );
    }
}

Inicial.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(inicialStyle)(Inicial);
