import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import menuToggleStyle from '../assets/jss/components/menuToggleStyle';

class MenuToggle extends React.Component {

	render() {
		const {
			route,
			onClick,
			classes,
			className
		} = this.props;

		let color = 'primary';
		if (route === '/nos') {
			color = 'white';
		}

		return (
			<a href="#toggle" className={classNames(className, classes.wrapper)} onClick={onClick}>
				<div className={classNames(classes.bar, classes[color])} />
				<div className={classNames(classes.bar, classes[color])} />
				<div className={classNames(classes.bar, classes[color])} />
			</a>
		);
	}
}

MenuToggle.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired
};

export default injectSheet(menuToggleStyle)(MenuToggle);
