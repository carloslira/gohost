import {
	primaryColor,
	secondaryColor
} from '../theme';

import image_1 from '../../img/nos/image_1.jpg';
import image_2 from '../../img/nos/image_2.jpg';
import image_3 from '../../img/nos/image_3.jpg';

const nosStyle = theme => ({
	wrapper: {
		height: '100vh'
	},
	descriptionContainer: {
		display: 'flex',
		minHeight: '50vh',
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
	imagesWrapper: {
		minHeight: '50vh',
	},
	image: {
		float: 'left',
		width: '33.3%',
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