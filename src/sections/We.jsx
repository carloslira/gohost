import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import {
	Row,
	Col,
	Grid
} from 'react-flexbox-grid';

import P from '../components/P';

import uau from '../assets/img/we/uau.png';
import happy from '../assets/img/we/happy.png';
import clocks from '../assets/img/we/clocks.png';
import pattern from '../assets/img/we/pattern.png';
import simplified_logo from '../assets/img/simplified_logo.png';

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
						<P color="secondary" className={classes.description}>A GoHost oferece todos os serviços de gerenciamento de aluguéis que seu imóvel merece para se tornar um sucesso de ocupação e avaliação</P>
						<img src={happy} className={classes.happy} alt="happy" />
					</div>
					<img src={pattern} className={classes.pattern} alt="pattern" />
				</div>
				<Grid fluid className={classes.imagesContainer}>
					<Row>
						<Col xs className={classNames(classes.image, classes.image_1)} />
						<Col xs className={classNames(classes.image, classes.image_2)} />
						<Col xs className={classNames(classes.image, classes.image_3)} />
					</Row>
					<Row>
						<Col md={5} className={classNames(classes.claim, classes.claim_1)} />
						<Col xs={12} md={7} className={classNames(classes.claimDescriptionContainer, classes.primary)}>
							<Row className={classes.claimDescriptionWrapper}>
								<Col xs={6} className={classes.claimDescriptionTitleContainer}>
									<P color="primary" className={classes.claimDescriptionTitle}>Cuidamos de cada detalhe...</P>
								</Col>
								<Col xs={6}>
									<div className={classes.claimDescriptionAssetContainer}>
										<P color="white" className={classes.claimDescriptionText}>Da preparação do imóvel ao checkout, <b>deixe tudo</b> com a gente!</P>
									</div>
									<div className={classes.claimDescriptionAssetContainer}>
										<img src={uau} className={classes.claimDescriptionIcon} alt="uau" />
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col md={5} className={classNames(classes.claim, classes.claim_2)} />
						<Col xs={12} md={7} className={classNames(classes.claimDescriptionContainer, classes.white)}>
							<Row className={classes.claimDescriptionWrapper}>
								<Col xs={6} className={classes.claimDescriptionTitleContainer}>
									<P color="primary" className={classes.claimDescriptionTitle}>...com cuidado e agilidade...</P>
								</Col>
								<Col xs={6}>
									<div className={classes.claimDescriptionAssetContainer}>
										<P color="secondary" className={classes.claimDescriptionText}>Atendimento especializado para você e seu hóspede <b>24h por dia</b>.</P>
									</div>
									<div className={classes.claimDescriptionAssetContainer}>
										<img src={clocks} className={classes.claimDescriptionIcon} alt="clocks" />
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col md={5} className={classNames(classes.claim, classes.claim_3)} />
						<Col xs={12} md={7} className={classNames(classes.claimDescriptionContainer, classes.primary)}>
							<Row className={classes.claimDescriptionWrapper}>
								<Col xs={6} className={classes.claimDescriptionTitleContainer}>
									<P color="primary" className={classes.claimDescriptionTitle}>...para seu imóvel brilhar.</P>
								</Col>
								<Col xs={6}>
									<div className={classes.claimDescriptionAssetContainer}>
										<P color="white" className={classes.claimDescriptionText}>Tudo para diferenciar seu imóvel e multiplicar seu rendimento.</P>
									</div>
									<div className={classes.claimDescriptionAssetContainer}>
										<img src={simplified_logo} className={classes.claimDescriptionIcon} alt="GoHost" />
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

We.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(weStyle)(We);
