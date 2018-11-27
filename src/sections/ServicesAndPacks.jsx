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

import rent from '../assets/img/servicesAndPacks/rent.png';
import happy from '../assets/img/servicesAndPacks/happy.png';
import advert from '../assets/img/servicesAndPacks/advert.png';
import visual from '../assets/img/servicesAndPacks/visual.png';
import pattern from '../assets/img/servicesAndPacks/pattern.png';
import reserves from '../assets/img/servicesAndPacks/reserves.png';
import cleaning from '../assets/img/servicesAndPacks/cleaning.png';
import top_host from '../assets/img/servicesAndPacks/top_host.png';
import reception from '../assets/img/servicesAndPacks/reception.png';
import start_host from '../assets/img/servicesAndPacks/start_host.png';
import real_estate from '../assets/img/servicesAndPacks/real_estate.png';
import professional_host from '../assets/img/servicesAndPacks/professional_host.png';
import primary_color_filler from '../assets/img/servicesAndPacks/primary_color_filler.png';
import secondary_color_filler from '../assets/img/servicesAndPacks/secondary_color_filler.png';

import servicesAndPacksStyle from '../assets/jss/sections/servicesAndPacksStyle';

class ServicesAndPacks extends React.Component {

	render() {
		const {
			classes
		} = this.props;

		return (
			<div className={classes.container}>
				<div className={classes.introContainer}>
					<div className={classes.introWrapper}>
						<P color="primary" className={classes.intro}>É ASSIM QUE A GENTE QUER AJUDAR VOCÊ E SEU IMÓVEL A CONQUISTAR <span className={classes.secondaryColor}>O TOPO DAS AVALIAÇÕES E A BRILHAR NOS SERVIÇOS DE ALUGUEL POR TEMPORADA.</span></P>
						<img src={happy} className={classes.happy} alt="happy" />
					</div>
					<img src={pattern} className={classes.pattern} alt="pattern" />
				</div>
				<Grid fluid className={classes.servicesGrid}>
					<Row>
						<Col xs={12}>
							<P color="primary" className={classes.header}>SERVIÇOS</P>
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={6} xl={4} className={classes.grayService}>
							<Grid fluid className={classes.serviceGrid}>
								<Row>
									<Col xs={4} className={classes.serviceIconContainer}>
										<img src={rent} className={classes.serviceIcon} alt="aluguel" />
									</Col>
									<Col xs={8}>
										<P color="primary" className={classes.serviceTitle}>GERENCIAMENTO DO ALUGUEL</P>
										<P color="secondary" className={classes.serviceGoal}><b>OBJETIVO: </b>aumentar sua rentabilidade.</P>
										<P color="secondary"><b>COMO FUNCIONA: </b>através da análise do mercado local e das últimas tendências, desenvolvemos diagnósticos e sugestões para a política de preços do seu imóvel.</P>
									</Col>
								</Row>
							</Grid>
						</Col>
						<Col xs={12} md={6} xl={4} className={classes.whiteService}>
							<Grid fluid className={classes.serviceGrid}>
								<Row>
									<Col xs={4} className={classes.serviceIconContainer}>
										<img src={advert} className={classes.serviceIcon} alt="aluguel" />
									</Col>
									<Col xs={8}>
										<P color="primary" className={classes.serviceTitle}>GERENCIAMENTO DO ANÚNCIO</P>
										<P color="secondary" className={classes.serviceGoal}><b>OBJETIVO: </b>atrair novos hoóspedes.</P>
										<P color="secondary"><b>COMO FUNCIONA: </b>criamos e diferenciamos seus anúncios nas plataformas mais importantes de aluguel por temporada, produzindo fotos profissionais e descrições completas e otimizadas para ferramentasde buscas.</P>
									</Col>
								</Row>
							</Grid>
						</Col>
						<Col xs={12} md={6} xl={4} className={classes.mainlyGrayService}>
							<Grid fluid className={classes.serviceGrid}>
								<Row>
									<Col xs={4} className={classes.serviceIconContainer}>
										<img src={real_estate} className={classes.serviceIcon} alt="aluguel" />
									</Col>
									<Col xs={8}>
										<P color="primary" className={classes.serviceTitle}>GERENCIAMENTO DO IMÓVEL</P>
										<P color="secondary" className={classes.serviceGoal}><b>OBJETIVO: </b>garantir conforto para o hóspede e tranquilidade para você.</P>
										<P color="secondary"><b>COMO FUNCIONA: </b>além de gerenciarmos todas as contas a serem pagas do imóvel (água, luz, internet, TV, etc), cuidamos também da manutenção e limpeza quinzenal, mesmo quando o mesmo estiver bloqueado para hóspedes.</P>
									</Col>
								</Row>
							</Grid>
						</Col>
						<Col xs={12} md={6} xl={4} className={classes.mainlyWhiteService}>
							<Grid fluid className={classes.serviceGrid}>
								<Row>
									<Col xs={4} className={classes.serviceIconContainer}>
										<img src={reserves} className={classes.serviceIcon} alt="aluguel" />
									</Col>
									<Col xs={8}>
										<P color="primary" className={classes.serviceTitle}>GERENCIAMENTO DE RESERVAS</P>
										<P color="secondary" className={classes.serviceGoal}><b>OBJETIVO: </b>gerar avaliações positivas e alcançar o status de Super Host.</P>
										<P color="secondary"><b>COMO FUNCIONA: </b>acompanhamos as reservas do check-in ao check-out, incluindo a limpeza do imóvel após a hospedagem.</P>
									</Col>
								</Row>
							</Grid>
						</Col>
						<Col xs={12} md={6} xl={4} className={classes.grayService}>
							<Grid fluid className={classes.serviceGrid}>
								<Row>
									<Col xs={4} className={classes.serviceIconContainer}>
										<img src={visual} className={classes.serviceIcon} alt="aluguel" />
									</Col>
									<Col xs={8}>
										<P color="primary" className={classes.serviceTitle}>CONSULTORIA VISUAL</P>
										<P color="secondary" className={classes.serviceGoal}><b>OBJETIVO: </b>conquistar os hóspedes pelo visual, gerar avaliações positivas e alcançar o topo das listas de aluguéis.</P>
										<P color="secondary"><b>COMO FUNCIONA: </b>a partir do diagnóstico de uma consultoria de design, podem ser feitas mudanças na decoração da casa, bem como reformas parciais ou totais. Tudo previamente decidido com você.</P>
									</Col>
								</Row>
							</Grid>
						</Col>
						<Col xs={12} md={6} xl={4} className={classes.whiteService}>
							<Grid fluid className={classes.serviceGrid}>
								<Row>
									<Col xs={4} className={classes.serviceIconContainer}>
										<img src={cleaning} className={classes.serviceIcon} alt="aluguel" />
									</Col>
									<Col xs={8}>
										<P color="primary" className={classes.serviceTitle}>SERVIÇOS DE LIMPEZA</P>
										<P color="secondary" className={classes.serviceGoal}><b>OBJETIVO: </b>manter o imóvel impecável, conquistar os hóspedes pelo visual e alcançar o topo das listas de aluguéis.</P>
										<P color="secondary"><b>COMO FUNCIONA: </b>além de cuidarmos da limpeza e higienização antes e depois das hospedagens, cuidamos do enxoval, do serviço de lavanderia e também de mimos personalizados para os hóspedes.</P>
									</Col>
								</Row>
							</Grid>
						</Col>
						<Col xs={12} md={6} xl={4} className={classes.mainlyGrayService}>
							<Grid fluid className={classes.serviceGrid}>
								<Row>
									<Col xs={4} className={classes.serviceIconContainer}>
										<img src={reception} className={classes.serviceIcon} alt="aluguel" />
									</Col>
									<Col xs={8}>
										<P color="primary" className={classes.serviceTitle}>SERVIÇOS DE RECEPÇÃO E HOSPITALIDADE</P>
										<P color="secondary" className={classes.serviceGoal}><b>OBJETIVO: </b>fazer com que o hóspede se sinta bem recebido, gerar avaliações positivas e alcançar o status de Super Host.</P>
										<P color="secondary"><b>COMO FUNCIONA: </b>recepcionamos seu hóspede com todo o carinho que ele merece. Além da entrega das chaves, seu cliente pode receber também kits de boas-vindas, guias locais e as regras da casa, tudo personalizado e definido por você.</P>
									</Col>
								</Row>
							</Grid>
						</Col>
						<Col xs={12} md={6} xl={4} className={classNames(classes.mdServiceFillerCol, classes.mainlyWhiteService)}>
							<div className={classes.serviceFillerContainer}>
								<img src={secondary_color_filler} className={classes.serviceFiller} alt="enchimento" />
							</div>
						</Col>
						<Col xs={12} md={6} xl={4} className={classNames(classes.xlServiceFillerCol, classes.mainlyGrayService)}>
							<div className={classes.serviceFillerContainer}>
								<img src={primary_color_filler} className={classes.serviceFiller} alt="enchimento" />
							</div>
						</Col>
					</Row>
				</Grid>
				<div className={classes.packsContainer}>
					<Grid fluid>
						<Row>
							<Col xs={12}>
								<P color="primary" className={classes.header}>PACOTES</P>
							</Col>
						</Row>
						<Row center="xs" className={classes.packsRow}>
							<Col xs={12} md={4}>
								<img src={start_host} className={classes.packIcon} alt="Start Host" />
								<P color="primary" className={classes.packTitle}>START HOST</P>
								<ul className={classes.packList}>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Gerenciamento do aluguel</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Gerenciamento do anúncio</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Gerenciamento de reservas</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Serviços de recepção e hospitalidade</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Serviços de limpeza (apenas faxina)</P></li>
								</ul>
							</Col>
							<Col xs={12} md={4}>
								<img src={professional_host} className={classes.packIcon} alt="Professional Host" />
								<P color="primary" className={classes.packTitle}>PROFESSIONAL HOST</P>
								<ul className={classes.packList}>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Gerenciamento do aluguel</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Gerenciamento do anúncio</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Gerenciamento de reservas</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Serviços de recepção e hospitalidade</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Serviços de limpeza</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Gerenciamento do imóvel</P></li>
								</ul>
							</Col>
							<Col xs={12} md={4}>
								<img src={top_host} className={classes.packIcon} alt="Top Host" />
								<P color="primary" className={classes.packTitle}>TOP HOST</P>
								<ul className={classes.packList}>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Gerenciamento do aluguel</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Gerenciamento do anúncio</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Gerenciamento de reservas</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Serviços de recepção e hospitalidade</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Serviços de limpeza</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Gerenciamento do imóvel</P></li>
									<li className={classes.packListItem}><P color="white" className={classes.packListItemText}>Consultoria visual</P></li>
								</ul>
							</Col>
						</Row>
					</Grid>
				</div>
				<div className={classes.customizeYourPackContainer}>
					<P color="secondary" className={classes.customizeYourPackTitle}>PERSONALIZE SEU PACOTE!</P>
					<P color="white" className={classes.customizeYourPackDescription}>Escolha os serviços que se encaixam nos seus planos e no seu orçamento e tenha um atendimento personalizado.</P>
				</div>
			</div>
		);
	}
}

ServicesAndPacks.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(servicesAndPacksStyle)(ServicesAndPacks);
