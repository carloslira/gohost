import WeSection from './We';
import HomeSection from './Home';
import ProcessSection from './Process';
import ContactSection from './Contact';
import ServicesAndPacksSection from './ServicesAndPacks';

const sections = [
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

export default sections;