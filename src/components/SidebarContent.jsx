import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import {
    NavLink
} from 'react-router-dom';

import appRoutes from '../routes/app';

import sidebar_logo from '../assets/img/sidebar_logo.png';

import sidebarContentStyle from '../assets/jss/components/sidebarContentStyle';

const SidebarContent = ({ ...props }) => {

    const {
        classes,
        className
    } = props;

    return (
        <div className={classNames(className, classes.container)}>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src={sidebar_logo} alt="GoHost" />
            </div>
            <div className={classes.listContainer}>
                <ul className={classes.list}>
                    {appRoutes.map((prop, key) => {
                        if (prop.redirect) {
                            return null;
                        }

                        return (
                            <li className={classes.listItem} key={key}>
                                <NavLink
                                    to={prop.path}
                                    className={classes.listItemLink}
                                    activeClassName={classes.activeListItemLink}
                                >
                                    {prop.sidebarName}
                                </NavLink>
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
    classes: PropTypes.object.isRequired
};

export default injectSheet(sidebarContentStyle)(SidebarContent);
