import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import pStyle from '../assets/jss/components/pStyle';

const P = ({ ...props }) => {

	const {
		classes,
		children,
		className
	} = props;

	return (
		<p className={classNames(className, classes.p)}>
			{children}
		</p>
	);
}

P.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
	classes: PropTypes.object.isRequired
};

export default injectSheet(pStyle)(P);
