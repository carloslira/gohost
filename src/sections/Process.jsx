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

import happy from '../assets/img/process/happy.png';
import pattern from '../assets/img/process/pattern.png';
import intro_pattern from '../assets/img/process/intro_pattern.png';

import processStyle from '../assets/jss/sections/processStyle';

class Process extends React.Component {

	render() {
		const {
			classes
		} = this.props;

		return (
			<div className={classes.container}>
				<div className={classes.introContainer}>
					<div className={classes.introWrapper}>
						<P color="white" className={classes.intro}>CONHEÇA CADA ETAPA DO NOSSO ATENDIMENTO E RELAXE ENQUANTO CUIDAMOS DO SEU IMÓVEL.</P>
						<img src={happy} className={classes.happy} alt="happy" />
					</div>
					<img src={intro_pattern} className={classes.introPattern} alt="pattern" />
				</div>
				<div className={classes.processContainer}>
					<Grid fluid>
						<Row center="xs">
							<Col xs={12} lg={10} xl={8}>
								<div className={classes.process}>
									<div className={classNames(classes.step, classes.register, classes.stepAtLeft)}>
										<div className={classes.stepContent}>
											<P color="primary" className={classNames(classes.stepTitle, classes.textAtLeft)}>CADASTRO</P>
											<P color="white" className={classes.textAtLeft}>Você faz um cadastro e conta um pouco sobre seu imóvel pra gente.</P>
										</div>
									</div>
									<div className={classNames(classes.step, classes.evaluation, classes.stepAtRight)}>
										<div className={classes.stepContent}>
											<P color="primary" className={classNames(classes.stepTitle, classes.textAtRight)}>AVALIAÇÃO</P>
											<P color="white" className={classes.textAtRight}>Nós fazemos uma visita e avaliamos como transformá-lo no mais procurado da rede e da vizinhança.</P>
										</div>
									</div>
									<div className={classNames(classes.step, classes.packs, classes.stepAtLeft)}>
										<div className={classes.stepContent}>
											<P color="primary" className={classNames(classes.stepTitle, classes.textAtLeft)}>PACOTES</P>
											<P color="white" className={classes.textAtLeft}>Com um diagnóstico em mãos, você pode optar pelo pacote de serviços ideal para você e o seu imóvel.</P>
										</div>
									</div>
									<div className={classNames(classes.step, classes.adverts, classes.stepAtRight)}>
										<div className={classes.stepContent}>
											<P color="primary" className={classNames(classes.stepTitle, classes.textAtRight)}>ANÚNCIOS</P>
											<P color="white" className={classes.textAtRight}>Fazemos fotos profissionais e criamos anúncios completos nas principais plataformas de aluguel, como Airbnb e booking.com.</P>
										</div>
									</div>
									<div className={classNames(classes.step, classes.management, classes.stepAtLeft)}>
										<div className={classes.stepContent}>
											<P color="primary" className={classNames(classes.stepTitle, classes.textAtLeft)}>GERENCIAMENTO</P>
											<P color="white" className={classes.textAtLeft}>Gerenciamos os anúncios, cuidamos da agenda do imóvel, da sua manutenção, do atendimento e de todos os serviços que quiser para diferenciar sua oferta.</P>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Grid>
					<img src={pattern} className={classes.pattern} alt="pattern" />
				</div>
			</div>
		);
	}
}

Process.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(processStyle)(Process);
