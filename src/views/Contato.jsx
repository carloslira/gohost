import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import contatoStyle from '../assets/jss/views/contatoStyle';

class Contato extends React.Component {

    render() {
        const {
            classes
        } = this.props;

        return (
            'Contato'
        );
    }
}

Contato.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(contatoStyle)(Contato);
