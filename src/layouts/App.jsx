import React from 'react';
import PropTypes from 'prop-types';

import {
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import Sidebar from 'react-sidebar';
import injectSheet from 'react-jss';

import MenuToggle from '../components/MenuToggle';
import SidebarContent from '../components/SidebarContent';

import appRoutes from '../routes/app';

import breakpoints from '../styles/breakpoints';

import appStyle from '../assets/jss/layouts/appStyle';

const mql = window.matchMedia(breakpoints.up('lg', false));

class App extends React.Component {

	state = {
		open: false,
		docked: mql.matches
	};

	componentWillMount() {
		mql.addListener(this.mediaQueryChanged);
		window.addEventListener('hashchange', this.onHashChanged, false);
	}

	onHashChanged = () => {
		this.setState({
			open: false
		});
	};

	mediaQueryChanged = () => {
		this.setState({
			open: false,
			docked: mql.matches
		});
	};

	render() {
		const {
			classes,
			location
		} = this.props;

		console.log(this.props);

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
			sidebarClassName: classes.sidebar,
			contentClassName: classes.content,
			overlayClassName: classes.sidebarOverlay
		};

		return (
			<Sidebar {...sidebarProps}>
				<div className={classes.wrapper}>
					{!docked && (
						<MenuToggle onClick={this.toggleOpen} route={location.pathname} />
					)}
					<Switch>
						{appRoutes.map((prop, key) => {
							if (prop.redirect) {
								return <Redirect from={prop.path} to={prop.to} key={key} />;
							}

							return <Route path={prop.path} component={prop.component} key={key} />;
						})}
					</Switch>
				</div>
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
		window.removeEventListener('hashchange', this.onHashChanged, false);
	}
}

App.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object.isRequired
};

export default injectSheet(appStyle)(App);
