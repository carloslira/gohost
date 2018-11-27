import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import {
	Element
} from 'react-scroll';

import appRoutes from '../routes/app';

import mainStyle from '../assets/jss/views/mainStyle';

class Main extends React.Component {

	render() {
		const {
			classes
		} = this.props;

		return (
			<div className={classes.container}>
				{appRoutes.map((prop, key) => 
					<Element name={prop.section.name} key={key}>
						<prop.section.component />
					</Element>
				)}
			</div>
		);
	}
}

Main.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(mainStyle)(Main);
