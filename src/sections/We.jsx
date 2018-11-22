import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import P from '../components/P';

import happy from '../assets/img/we/happy.png';
import pattern from '../assets/img/we/pattern.png';

import weStyle from '../assets/jss/sections/weStyle';

class We extends React.Component {

	render() {
		const {
			classes
		} = this.props;

		return (
			<div className={classes.wrapper}>
				<div className={classes.descriptionContainer}>
					<div className={classes.descriptionWrapper}>
						<P className={classes.description}>A GoHost oferece todos os serviços de gerenciamento de aluguéis que seu imóvel merece para se tornar um sucesso de ocupação e avaliação</P>
						<img src={happy} className={classes.happy} alt="happy" />
					</div>
					<img src={pattern} className={classes.pattern} alt="pattern" />
				</div>
				<div className={classes.imagesWrapper}>
					<div className={classNames(classes.image, classes.image_1)} />
					<div className={classNames(classes.image, classes.image_2)} />
					<div className={classNames(classes.image, classes.image_3)} />
				</div>
			</div>
		);
	}
}

We.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(weStyle)(We);