import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import servicosStyle from '../assets/jss/views/servicosStyle';

class Servicos extends React.Component {

    render() {
        const {
            classes
        } = this.props;

        return (
            'Serviços e Pacotes'
        );
    }
}

Servicos.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(servicosStyle)(Servicos);
