import {
    transition,
    defaultFont,
    primaryColor,
    navbarHeight,
	secondaryColor
} from '../theme';

const navbarStyle = theme => ({
    container: {
        width: '100%',
        backgroundColor: 'white',
		height: `${navbarHeight}px`,
		boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.75)'
	},
	logo: {
		top: '0',
		left: '0',
		height: '24px',
		margin: '20px 50px',
		position: 'absolute'
	},
    list: {
		top: '0',
		right: '0',
		margin: '0',
        padding: '0 50px',
		position: 'absolute'
    },
    listItem: {
        display: 'inline-block'
    },
    listItemLink: {
        ...transition,
		...defaultFont,
        display: 'block',
		cursor: 'pointer',
        padding: '0 20px',
        fontWeight: '500',
        color: secondaryColor,
        lineHeight: `${navbarHeight}px`
    },
    listItemActiveLink: {
        color: primaryColor
    }
});

export default navbarStyle;