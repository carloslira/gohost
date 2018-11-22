import {
	navbarHeight
} from '../theme';

const homeStyle = theme => ({
	wrapper: {
		[theme.breakpoints.up('md')]: {
			marginTop: `-${navbarHeight}px`
		},
		height: '100vh',
		position: 'relative'
	},
	overlay: {
		top: '0',
		left: '0',
		bottom: '0',
		zIndex: '2',
		width: '100%',
		height: '100%',
		display: 'flex',
		minHeight: '100vh',
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(1, 48, 92, 0.7)'
	},
	logoContainer: {
		textAlign: 'center'
	},
	logo: {
		maxWidth: '100%'
	},
	content: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		}
	},
	sloganContainer: {
		[theme.breakpoints.up('md')]: {
			margin: '40px 0 80px 60px'
		},
		fontSize: '35px',
		fontWeight: '500',
		margin: '40px 0 80px 0'
	},
	slogan: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		}
	},
	happy: {
		[theme.breakpoints.up('md')]: {
			marginLeft: '60px',
			maxWidth: 'calc(100% - 60px)'
		},
		maxWidth: '100%'
	},
	pattern: {
		[theme.breakpoints.down('md')]: {
			display: 'none'
		},
		zIndex: '3',
		right: '-40px',
		position: 'absolute'
	}
});

export default homeStyle;