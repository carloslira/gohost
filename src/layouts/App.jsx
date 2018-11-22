import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from 'react-sidebar';
import injectSheet from 'react-jss';
import StickyBox from 'react-sticky-box';

import {
	Element,
	scrollSpy
} from 'react-scroll';

import MainView from '../views/Main';

import Navbar from '../components/Navbar';
import MenuToggle from '../components/MenuToggle';
import SidebarContent from '../components/SidebarContent';

import breakpoints from '../styles/breakpoints';

import appStyle from '../assets/jss/layouts/appStyle';

const mql = window.matchMedia(breakpoints.up('md', false));

class App extends React.Component {

	state = {
		open: false,
		activeSection: 'home'
	};

	componentWillMount() {
		mql.addListener(this.mediaQueryChanged);
	}

	componentDidMount() {
		scrollSpy.update();
	}

	mediaQueryChanged = () => {
		this.setState({
			open: false
		});
	};

	render() {
		const {
			classes
		} = this.props;

		const {
			open,
			activeSection
		} = this.state;

		const sidebarProps = {
			open,
			pullRight: !mql.matches,
			onSetOpen: this.onSetOpen,
			sidebarClassName: classes.sidebar,
			contentClassName: classes.content,
			overlayClassName: classes.sidebarOverlay,
			sidebar: <SidebarContent onSectionChanged={this.onSectionChanged} />
		};

		return (
			<Sidebar {...sidebarProps}>
				<Element id="sections" className={classes.wrapper}>
					{mql.matches ? (
						<StickyBox className={classes.stickyBox}>
							<Navbar onSectionChanged={this.onSectionChanged} />
						</StickyBox>
					) : (
						<MenuToggle onClick={this.toggleOpen} section={activeSection} />
					)}
					<MainView />
				</Element>
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

	onSectionChanged = newSection => {
		this.setState({
			open: false,
			activeSection: newSection
		});
	};

	componentWillUnmount() {
		mql.removeListener(this.mediaQueryChanged);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(appStyle)(App);
