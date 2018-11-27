import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import MaskedInput from 'react-text-mask';
import Textarea from 'react-textarea-autosize';

import {
	Row,
	Col,
	Grid
} from 'react-flexbox-grid';

import P from '../components/P';

import pattern from '../assets/img/contact/pattern.png';

import contactStyle from '../assets/jss/sections/contactStyle';

class Contact extends React.Component {

	state = {
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	};

	render() {
		const {
			classes
		} = this.props;

		const {
			name,
			email,
			phone,
			subject,
			message
		} = this.state;

		return (
			<div className={classes.container}>
				<Grid fluid className={classes.contactGrid}>
					<Row>
						<Col xs={12} md={4} lg={6} className={classes.backgroundCol}>
							<img src={pattern} className={classes.pattern} alt="pattern" />
						</Col>
						<Col xs={12} md={8} lg={6}>
							<div className={classes.formWrapper}>
								<div className={classes.header}>
									<P color="primary">DEIXE A GOHOST CUIDAR DO SEU IMÓVEL E FIQUE</P>
									<P color="white">TRANQUILO ENQUANTO ELE BRILHA.</P>
								</div>
								<div className={classes.form}>
									<form className={classes.formElement}>
										<input type="text" name="name" placeholder="Nome" className={classes.input} onChange={this.onInputChanged} value={name} required />
										<input type="email" name="email" placeholder="E-mail" className={classes.input} onChange={this.onInputChanged} value={email} required />
										<MaskedInput name="phone" placeholder="Telefone" className={classes.input} mask={this.phoneMask} placeholderChar={'\u2000'} onChange={this.onInputChanged} value={phone} required />
										<input type="text" name="subject" placeholder="Assunto" className={classes.input} onChange={this.onInputChanged} value={subject} required />
										<Textarea name="message" placeholder="Mensagem" minRows={5} className={classes.input} onChange={this.onInputChanged} value={message} required />
									</form>
								</div>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

	phoneMask = rawValue => {
		const withoutMask = rawValue.replace(/[^0-9]/g, '');

		if (withoutMask.length >= 11) {
			return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
		}

		return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
	};

	onInputChanged = e => {
		const {
			name,
			value
		} = e.target;

		this.setState({
			[name]: value
		});
	};
}

Contact.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(contactStyle)(Contact);
