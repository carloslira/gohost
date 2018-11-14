import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import processoStyle from '../assets/jss/views/processoStyle';

class Processo extends React.Component {

    render() {
        const {
            classes
        } = this.props;

        return (
            'Processo'
        );
    }
}

Processo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(processoStyle)(Processo);
