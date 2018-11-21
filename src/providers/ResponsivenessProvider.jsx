import React from 'react';
import PropTypes from 'prop-types';

class ResponsivenessProvider extends React.Component {

	static childContextTypes = {
		docked: PropTypes.bool.isRequired,
		toggleOpen: PropTypes.func.isRequired
	}

	getChildContext() {
		return {
			docked: this.props.docked,
			toggleOpen: this.props.toggleOpen
		};
	}

	render() {
		return this.props.children;
	}
}

ResponsivenessProvider.propTypes = {
	docked: PropTypes.bool.isRequired,
	toggleOpen: PropTypes.func.isRequired
};

export default ResponsivenessProvider;