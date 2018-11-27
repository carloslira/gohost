import {
	navbarHeight,
	primaryColor,
	secondaryColor,
	lightGrayColor
} from '../theme';

const servicesAndPacksStyle = theme => ({
	container: {

	},
	introContainer: {
		[theme.breakpoints.up('md')]: {
			minHeight: `calc(50vh - ${navbarHeight / 2}px)`
		},
		display: 'flex',
		minHeight: '50vh',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center'
	},
	introWrapper: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		},
		width: '855px',
		maxWidth: '100%',
		margin: '60px 20px'
	},
	intro: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		},
		fontSize: '30px',
		lineHeight: '40px',
		fontWeight: 'bold'
	},
	secondaryColor: {
		color: secondaryColor
	},
	happy: {
		maxWidth: '100%',
		marginTop: '30px'
	},
	pattern: {
		[theme.breakpoints.down('md')]: {
			display: 'none'
		},
		right: '-40px',
		position: 'absolute'
	},
	header: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		},
		fontSize: '35px',
		fontWeight: 'bold',
		padding: '30px 80px'
	},
	servicesGrid: {
		padding: '0'
	},
	grayService: {
		backgroundColor: lightGrayColor
	},
	whiteService: {
		backgroundColor: 'white'
	},
	mainlyGrayService: {
		[theme.breakpoints.up('md')]: {
			backgroundColor: 'white'
		},
		[theme.breakpoints.up('xl')]: {
			backgroundColor: lightGrayColor
		},
		backgroundColor: lightGrayColor
	},
	mainlyWhiteService: {
		[theme.breakpoints.up('md')]: {
			backgroundColor: lightGrayColor
		},
		[theme.breakpoints.up('xl')]: {
			backgroundColor: 'white'
		},
		backgroundColor: 'white'
	},
	serviceGrid: {
		padding: '40px 40px 40px 0'
	},
	serviceIconContainer: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	serviceIcon: {
		maxWidth: '100%'
	},
	serviceTitle: {
		padding: '5px 0',
		fontWeight: 'bold'
	},
	serviceGoal: {
		padding: '5px 0'
	},
	mdServiceFillerCol: {
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	xlServiceFillerCol: {
		[theme.breakpoints.down('lg')]: {
			display: 'none'
		}
	},
	serviceFillerContainer: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	serviceFiller: {
		padding: '40px',
		maxWidth: 'calc(100% - 80px)'
	},
	packsContainer: {
		backgroundColor: secondaryColor
	},
	packsRow: {
		paddingTop: '10px',
		paddingBottom: '50px'
	},
	packIcon: {
		[theme.breakpoints.up('md')]: {
			paddingTop: '0'
		},
		paddingTop: '30px',
		paddingBottom: '10px'
	},
	packTitle: {
		fontSize: '20px',
		fontWeight: 'bold'
	},
	packList: {
		margin: '0',
		padding: '0',
		listStyle: 'none'
	},
	packListItem: {
		margin: '5px 0',
		listStyleType: 'none',
		'&:before': {
			color: primaryColor,
			padding: '0 6px 0 0',
			content: '\'\\2713\'',
			display: 'inline-block'
		}
	},
	packListItemText: {
		display: 'inline-block'
	},
	customizeYourPackContainer: {
		padding: '30px',
		textAlign: 'center',
		backgroundColor: primaryColor
	},
	customizeYourPackTitle: {
		fontSize: '40px',
		fontWeight: 'bold'
	},
	customizeYourPackDescription: {
		width: '100%',
		margin: '0 auto',
		fontSize: '20px',
		maxWidth: '620px',
		paddingTop: '10px'
	}
});

export default servicesAndPacksStyle;