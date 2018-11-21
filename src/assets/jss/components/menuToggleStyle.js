import {
	primaryColor
} from '../theme';

const menuToggleStyle = theme => ({
	wrapper: {
		zIndex: '3',
		top: '20px',
		right: '20px',
		position: 'absolute'
	},
	bar: {
		width: '35px',
		height: '5px',
		margin: '6px 0',
		borderRadius: '3px'
	},
	primary: {
		backgroundColor: primaryColor
	},
	white: {
		backgroundColor: 'white'
	}
});

export default menuToggleStyle;