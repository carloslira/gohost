import {
	navbarHeight,
	primaryColor,
	secondaryColor
} from '../theme';

import packs from '../../img/process/packs.jpg';
import adverts from '../../img/process/adverts.jpg';
import register from '../../img/process/register.jpg';
import evaluation from '../../img/process/evaluation.jpg';
import management from '../../img/process/management.jpg';

const processStyle = theme => ({
	container: {
		position: 'relative',
		backgroundColor: secondaryColor
	},
	introContainer: {
		[theme.breakpoints.up('md')]: {
			minHeight: `calc(50vh - ${navbarHeight / 2}px)`
		},
		display: 'flex',
		minHeight: '50vh',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: primaryColor
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
		fontSize: '40px',
		lineHeight: '60px',
		fontWeight: 'bold'
	},
	happy: {
		maxWidth: '100%',
		marginTop: '30px'
	},
	introPattern: {
		[theme.breakpoints.down('md')]: {
			display: 'none'
		},
		right: '-40px',
		position: 'absolute'
	},
	processContainer: {
		display: 'flex',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center'
	},
	process: {
		margin: '0 auto',
		maxWidth: '100%',
		padding: '50px 0',
		position: 'relative',
		'&:after': {
			[theme.breakpoints.down('sm')]: {
				left: '31px'
			},
			top: '-0',
			left: '50%',
			bottom: '0',
			width: '2px',
			content: '""',
			marginLeft: '-3px',
			position: 'absolute',
			backgroundColor: primaryColor
		}
	},
	step: {
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '70px',
			paddingRight: '25px',
			width: 'calc(100% - 120px)',
			'&:before': {
				left: '60px !important',
				borderWidth: '10px 10px 10px 0 !important',
				borderColor: 'transparent white transparent transparent !important'
			}
		},
		padding: '15px 60px',
		position: 'relative',
		width: 'calc(50% - 120px)',
		backgroundColor: 'inherit',
		'&:after': {
			zIndex: 1,
			top: '30px',
			width: '60px',
			height: '60px',
			borderRadius: '50%',
			position: 'absolute'
		}
	},
	stepAtLeft: {
		left: '0'
	},
	stepAtRight: {
		[theme.breakpoints.down('sm')]: {
			left: '0%'
		},
		left: '50%'
	},
	register: {
		'&:after': {
			[theme.breakpoints.down('sm')]: {
				left: '6px'
			},
			right: '-36px',
			content: `url(${register})`
		}
	},
	evaluation: {
		'&:after': {
			[theme.breakpoints.down('sm')]: {
				left: '-6px'
			},
			left: '-36px',
			content: `url(${evaluation})`
		}
	},
	packs: {
		'&:after': {
			[theme.breakpoints.down('sm')]: {
				left: '-4px'
			},
			right: '-25px',
			content: `url(${packs})`
		}
	},
	adverts: {
		'&:after': {
			[theme.breakpoints.down('sm')]: {
				left: '10px'
			},
			left: '-21px',
			content: `url(${adverts})`
		}
	},
	management: {
		'&:after': {
			[theme.breakpoints.down('sm')]: {
				left: '8px'
			},
			right: '-38px',
			content: `url(${management})`
		}
	},
	stepContent: {
		borderRadius: '6px',
		padding: '20px 30px',
		position: 'relative'
	},
	stepTitle: {
		fontSize: '20px',
		fontWeight: 'bold',
		paddingBottom: '10px'
	},
	textAtLeft: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'left'
		},
		textAlign: 'right'
	},
	textAtRight: {
		textAlign: 'left'
	},
	pattern: {
		[theme.breakpoints.down('md')]: {
			display: 'none'
		},
		right: '-40px',
		position: 'absolute'
	}
});

export default processStyle;