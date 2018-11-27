import {
	defaultFont,
	navbarHeight,
    primaryColor,
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
		[theme.breakpoints.down('lg')]: {
            fontSize: '40px',
            lineHeight: '60px'
		},
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		},
		padding: '20px',
		fontSize: '50px',
		textAlign: 'right',
		lineHeight: '70px'
	},
	form: {
		width: '100%',
		display: 'flex',
		margin: '0 auto',
		marginTop: '30px',
		maxWidth: '500px',
		justifyContent: 'center'
	},
	formElement: {
		width: '100%'
	},
	input: {
		...defaultFont,
		resize: 'none',
		color: 'white',
		outline: 'none',
		padding: '10px',
		display: 'block',
		margin: '20px 0',
		borderRadius: '20px',
		border: '1px solid white',
		width: 'calc(100% - 22px)',
		backgroundColor: 'transparent'
    },
    submitFormButton: {
		[theme.breakpoints.down('md')]: {
            width: '100%',
            float: 'none'
		},
        float: 'right',
        border: 'none',
        display: 'flex',
        outline: 'none',
        cursor: 'pointer',
        padding: '10px 20px',
        borderRadius: '20px',
        justifyContent: 'center',
        backgroundColor: primaryColor
    },
    submitFormButtonText: {
        lineHeight: '24px'
    },
    submitFormButtonIcon: {
        marginLeft: '5px'
    }
});

export default contactStyle;