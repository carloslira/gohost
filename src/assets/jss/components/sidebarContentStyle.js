import {
	transition,
    primaryColor,
    secondaryColor
} from '../theme';

const sidebarContentStyle = theme => ({
	container: {
    },
    logoContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        marginTop: '130px'
    },
    listContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    list: {
        margin: '0',
        listStyle: 'none',
        padding: '60px 80px'
    },
    listItem: {
        margin: '20px 0',
		fontSize: '18px',
		lineHeight: '18px',
		fontWeight: 'bold',
		fontFamily: '"Pluto"'
    },
    listItemLink: {
		...transition,
		cursor: 'pointer',
        color: secondaryColor,
        textDecoration: 'none'
    },
    activeListItemLink: {
        color: primaryColor
    }
});

export default sidebarContentStyle;