import {
	navbarHeight,
	primaryColor,
	secondaryColor
} from '../theme';

import image_1 from '../../img/we/image_1.jpg';
import image_2 from '../../img/we/image_2.jpg';
import image_3 from '../../img/we/image_3.jpg';

const nosStyle = theme => ({
	wrapper: {
		[theme.breakpoints.up('md')]: {
			height: `calc(100vh - ${navbarHeight}px)`
		},
		height: '100vh'
	},
	descriptionContainer: {
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
	descriptionWrapper: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		},
		width: '855px',
		maxWidth: '100%',
		margin: '60px 20px'
	},
	description: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		},
		fontSize: '30px',
		lineHeight: '50px',
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
		zIndex: '3',
		right: '-40px',
		position: 'absolute'
	},
	imagesWrapper: {
		[theme.breakpoints.up('md')]: {
			minHeight: `calc(50vh - ${navbarHeight / 2}px)`
		},
		minHeight: '50vh'
	},
	image: {
		[theme.breakpoints.up('md')]: {
			minHeight: `calc(50vh - ${navbarHeight / 2}px)`
		},
		float: 'left',
		width: '33.33%',
		minHeight: '50vh',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'bottom left'
	},
	image_1: {
		backgroundImage: `url(${image_1})`
	},
	image_2: {
		backgroundImage: `url(${image_2})`
	},
	image_3: {
		backgroundImage: `url(${image_3})`
	}
});

export default nosStyle;