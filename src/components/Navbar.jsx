import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import {
	Link
} from 'react-scroll';

import appRoutes from '../routes/app';

import {
	navbarHeight
} from '../assets/jss/theme';

import simplified_logo from '../assets/img/simplified_logo.png';

import navbarStyle from '../assets/jss/components/navbarStyle';

const Navbar = ({ ...props }) => {

	const {
		classes,
		className,
		onSectionChanged
	} = props;

	return (
		<nav className={classNames(className, classes.container)}>
			<img src={simplified_logo} className={classes.logo} alt="GoHost" />
			<ul className={classes.list}>
				{appRoutes.map((props, key) =>
					<li className={classes.listItem} key={key}>
						<Link
							spy={true}
							smooth={true}
							duration={250}
							containerId="sections"
							offset={-navbarHeight}
							to={props.section.name}
							onSetActive={onSectionChanged}
							className={classes.listItemLink}
							activeClass={classes.listItemActiveLink}
						>
							{props.navbarName}
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}

Navbar.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
	onSectionChanged: PropTypes.func.isRequired
};

export default injectSheet(navbarStyle)(Navbar);