import WeSection from '../sections/We';
import HomeSection from '../sections/Home';
import ProcessSection from '../sections/Process';
import ContactSection from '../sections/Contact';
import ServicesAndPacksSection from '../sections/ServicesAndPacks';

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
	{
		navbarName: 'Processo',
		sidebarName: 'Processo',
		section: {
			name: 'process',
			component: ProcessSection
		}
	},
	{
		navbarName: 'Serviços e Pacotes',
		sidebarName: 'Serviços e Pacotes',
		section: {
			name: 'servicesAndPacks',
			component: ServicesAndPacksSection
		}
	},
	{
		navbarName: 'Contato',
		sidebarName: 'Contato',
		section: {
			name: 'contact',
			component: ContactSection
		}
	}
];

export default appRoutes;