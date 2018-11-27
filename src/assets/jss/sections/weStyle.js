import {
	navbarHeight,
	primaryColor,
	secondaryColor
} from '../theme';

import claim_1 from '../../img/we/claim_1.jpg';
import claim_2 from '../../img/we/claim_2.jpg';
import claim_3 from '../../img/we/claim_3.jpg';
import image_1 from '../../img/we/image_1.jpg';
import image_2 from '../../img/we/image_2.jpg';
import image_3 from '../../img/we/image_3.jpg';

const nosStyle = theme => ({
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
		lineHeight: '50px'
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
	imagesContainer: {
		padding: '0'
	},
	image: {
		[theme.breakpoints.up('md')]: {
			minHeight: `calc(50vh - ${navbarHeight / 2}px)`
		},
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
	},
	claim: {
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		},
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top right',
		minHeight: `calc(50vh - ${navbarHeight / 2}px)`
	},
	claim_1: {
		backgroundImage: `url(${claim_1})`
	},
	claim_2: {
		backgroundImage: `url(${claim_2})`
	},
	claim_3: {
		backgroundImage: `url(${claim_3})`
	},
	claimDescriptionContainer: {
		[theme.breakpoints.up('md')]: {
			minHeight: `calc(50vh - ${navbarHeight / 2}px)`
		},
		minHeight: '50vh'
	},
	claimDescriptionWrapper: {
		height: '100%'
	},
	claimDescriptionTitleContainer: {
		display: 'flex'
	},
	claimDescriptionTitle:{
		[theme.breakpoints.down('md')]: {
			fontSize: '35px',
			lineHeight: '55px'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '7vw',
			lineHeight: '12vw'
		},
		width: '100%',
		padding: '10px',
		margin: '0 auto',
		fontSize: '45px',
		maxWidth: '300px',
		lineHeight: '70px',
		textAlign: 'right',
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	primary: {
		backgroundColor: secondaryColor
	},
	white: {
		backgroundColor: 'white'
	},
	claimDescriptionAssetContainer: {
		[theme.breakpoints.up('md')]: {
			minHeight: `calc(25vh - ${navbarHeight / 4}px)`
		},
		display: 'flex',
		minHeight: '25vh'
	},
	claimDescriptionText: {
		[theme.breakpoints.down('md')]: {
			fontSize: '25px',
			lineHeight: '35px',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '3vw',
			lineHeight: '5vw',
		},
		width: '100%',
		padding: '10px',
		margin: '0 auto',
		fontSize: '20px',
		maxWidth: '300px',
		lineHeight: '30px',
		alignSelf: 'flex-end'
	},
	claimDescriptionIcon: {
		[theme.breakpoints.down('sm')]: {
			maxWidth: '30vw'
		},
		width: '100%',
		maxWidth: '200px',
		margin: '20px auto',
		alignSelf: 'flex-start'
	}
});

export default nosStyle;