import React from 'react';
import PropTypes from 'prop-types';

import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Sidebar from 'react-sidebar';
import injectSheet from 'react-jss';

import SidebarContent from '../components/SidebarContent';

import appRoutes from '../routes/app';

import breakpoints from '../styles/breakpoints';

import appStyle from '../assets/jss/layouts/appStyle';

const mql = window.matchMedia(breakpoints.up('md', false));

class App extends React.Component {

    state = {
        open: false,
        docked: mql.matches
    };

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    mediaQueryChanged = () => {
        this.setState({
            open: false,
            docked: mql.matches
        });
    };

    render() {
        const {
            classes
        } = this.props;

        const {
            open,
            docked
        } = this.state;

        const sidebarProps = {
            open,
            docked,
            pullRight: !mql.matches,
            onSetOpen: this.onSetOpen,
            sidebar: <SidebarContent />,
            sidebarClassName: classes.sidebar
        };

        const contentHeader = (
            <span>
                {!docked && (
                    <a
                        href="#toggle"
                        onClick={this.toggleOpen}
                    >
                        =
                    </a>
                )}
            </span>
        );

        return (
            <Sidebar {...sidebarProps}>
                {contentHeader}
                <Switch>
                    {appRoutes.map((prop, key) => {
                        if (prop.redirect) {
                            return <Redirect from={prop.path} to={prop.to} key={key} />;
                        }

                        return <Route path={prop.path} component={prop.component} key={key} />;
                    })}
                </Switch>
            </Sidebar>
        );
    }

    toggleOpen = e => {
        this.setState(prevState => ({
            open: !prevState.open
        }));

        if (e) {
            e.preventDefault();
        }
    };

    onSetOpen = open => {
        this.setState({ open });
    };

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }
}

App.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default injectSheet(appStyle)(App);
