import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';

import {
	Row,
	Col,
	Grid
} from 'react-flexbox-grid';

import P from '../components/P';

import logo from '../assets/img/logo.png';
import happy from '../assets/img/home/happy.png';
import image_1 from '../assets/img/home/image_1.jpg';
import image_2 from '../assets/img/home/image_2.jpg';
import image_3 from '../assets/img/home/image_3.jpg';
import pattern from '../assets/img/home/pattern.png';

import homeStyle from '../assets/jss/sections/homeStyle';

class Home extends React.Component {

	state = {
		selected: 0
	};

	onSliderMounted = () => {
		setInterval(() => {
			this.setState(prevState => ({
				selected: prevState.selected === 2 ? 0 : prevState.selected + 1
			}));
		}, 5000);
	};

	render() {
		const {
			classes
		} = this.props;

		const {
			selected
		} = this.state;

		return (
			<div className={classes.wrapper}>
				<AwesomeSlider selected={selected} onFirstMount={this.onSliderMounted}>
					<div data-src={image_1} />
					<div data-src={image_2} />
					<div data-src={image_3} />
				</AwesomeSlider>
				<div className={classes.overlay}>
					<Grid fluid>
						<Row>
							<Col xs={12} className={classes.logoContainer}>
								<img src={logo} className={classes.logo} alt="GoHost" />
							</Col>
							<Col xs={12} md={6} mdOffset={6} className={classes.content}>
								<div className={classes.sloganContainer}>
									<P className={classes.slogan}>Seu imóvel</P>
									<P className={classes.slogan}>fazendo sucesso.</P>
								</div>
								<img src={happy} className={classes.happy} alt="happy" />
							</Col>
						</Row>
					</Grid>
					<img src={pattern} className={classes.pattern} alt="pattern" />
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(homeStyle)(Home);
