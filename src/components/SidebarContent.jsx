import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import {
	Link
} from 'react-scroll';

import sections from '../sections';

import simplified_logo from '../assets/img/simplified_logo.png';

import sidebarContentStyle from '../assets/jss/components/sidebarContentStyle';

const SidebarContent = ({ ...props }) => {

    const {
        classes,
		className,
		onSectionChanged
    } = props;

    return (
        <div className={classNames(className, classes.container)}>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src={simplified_logo} alt="GoHost" />
            </div>
            <div className={classes.listContainer}>
                <ul className={classes.list}>
                    {sections.map((prop, key) => {
                        return (
                            <li className={classes.listItem} key={key}>
								<Link
									spy={true}
									smooth={true}
									duration={250}
									to={prop.section.name}
									containerId="sections"
									onSetActive={onSectionChanged}
									className={classes.listItemLink}
									activeClass={classes.activeListItemLink}
								>
									{prop.sidebarName}
								</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

SidebarContent.propTypes = {
	className: PropTypes.string,
    classes: PropTypes.object.isRequired,
	onSectionChanged: PropTypes.func.isRequired
};

export default injectSheet(sidebarContentStyle)(SidebarContent);
