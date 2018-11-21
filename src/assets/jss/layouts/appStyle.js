import {
	sidebarWidth
} from '../theme';

let githubPrefix = '';
if (process.env.NODE_ENV === 'production') {
    githubPrefix = '/gohost';
}

const appStyle = theme => ({
	'@font-face': [
		{
			fontWeight: '300',
			fontFamily: 'Pluto',
			src: `url("${githubPrefix}/fonts/Pluto/HVD Fonts - PlutoLight.otf") format("opentype")`
		},
		{
			fontFamily: 'Pluto',
			src: `url("${githubPrefix}/fonts/Pluto/HVD Fonts - PlutoRegular.otf") format("opentype")`
		},
		{
			fontWeight: '500',
			fontFamily: 'Pluto',
			src: `url("${githubPrefix}/fonts/Pluto/HVD Fonts - PlutoMedium.otf") format("opentype")`
		},
		{
			fontWeight: 'bold',
			fontFamily: 'Pluto',
			src: `url("${githubPrefix}/fonts/Pluto/HVD Fonts - PlutoBold.otf") format("opentype")`
		}
	],
	wrapper: {
		height: '100vh'
	},
	sidebar: {
		zIndex: '5 !important',
		backgroundColor: 'white',
		width: `${sidebarWidth}px`
	},
	sidebarOverlay: {
		zIndex: '4 !important'
	},
	content: {
		overflowX: 'hidden'
	}
});

export default appStyle;