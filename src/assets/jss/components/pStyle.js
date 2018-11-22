import {
	defaultFont,
	primaryColor,
	secondaryColor
} from '../theme';

const pStyle = theme => ({
    p: {
        ...defaultFont,
        margin: '0'
	},
	black: {
		color: 'black'
	},
	white: {
		color: 'white'
	},
	primary: {
		color: primaryColor
	},
	secondary: {
		color: secondaryColor
	}
});

export default pStyle;