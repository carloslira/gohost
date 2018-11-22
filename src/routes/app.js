import WeSection from '../sections/We';
import HomeSection from '../sections/Home';

const appRoutes = [
	{
		navbarName: 'Inicial',
		sidebarName: 'Inicial',
		section: {
			name: 'home',
			component: HomeSection
		}
	},
	{
		navbarName: 'Nós',
		sidebarName: 'Nós',
		section: {
			name: 'we',
			component: WeSection
		}
	},
	// {
	// 	navbarName: 'Processo',
	// 	sidebarName: 'Processo',
	// 	section: {
	// 		name: 'process',
	// 		component: HomeSection
	// 	}
	// },
	// {
	// 	navbarName: 'Serviços e Pacotes',
	// 	sidebarName: 'Serviços e Pacotes',
	// 	section: {
	// 		name: 'services',
	// 		component: HomeSection
	// 	}
	// },
	// {
	// 	navbarName: 'Contato',
	// 	sidebarName: 'Contato',
	// 	section: {
	// 		name: 'contact',
	// 		component: HomeSection
	// 	}
	// }
];

export default appRoutes;