import {
	defaultFont,
	navbarHeight,
	secondaryColor
} from '../theme';

import background from '../../img/contact/background.jpg';

const contactStyle = theme => ({
	container: {
		[theme.breakpoints.up('md')]: {
			minHeight: `calc(100vh - ${navbarHeight}px)`
		},
		minHeight: '100vh',
		backgroundColor: secondaryColor
	},
	contactGrid: {
		padding: '0'
	},
	backgroundCol: {
		[theme.breakpoints.up('md')]: {
			minHeight: `calc(100vh - ${navbarHeight}px)`
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		},
		float: 'left',
		width: '50vw',
		display: 'flex',
		minHeight: '100vh',
		position: 'relative',
		alignItems: 'center',
		backgroundSize: 'cover',
		justifyContent: 'center',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundImage: `url(${background})`
	},
	pattern: {
		[theme.breakpoints.down('md')]: {
			display: 'none'
		},
		right: '0',
		position: 'absolute'
	},
	formContainer: {
		[theme.breakpoints.up('md')]: {
			minHeight: `calc(100vh - ${navbarHeight}px)`
		},
		display: 'flex',
		minHeight: '100vh',
		alignItems: 'center',
		justifyContent: 'center'
	},
	formWrapper: {
		padding: '20px'
	},
	header: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		},
		padding: '20px',
		fontSize: '50px',
		textAlign: 'right',
		lineHeight: '70px'
	},
	form: {
		display: 'flex',
		marginTop: '30px',
		justifyContent: 'center'
	},
	formElement: {
		width: '100%',
		padding: '0 20px'
	},
	input: {
		...defaultFont,
		width: '100%',
		resize: 'none',
		color: 'white',
		outline: 'none',
		padding: '10px',
		display: 'block',
		maxWidth: '500px',
		margin: '20px auto',
		borderRadius: '20px',
		border: '1px solid white',
		backgroundColor: 'transparent'
	}
});

export default contactStyle;