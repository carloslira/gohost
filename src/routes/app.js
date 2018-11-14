import Nos from '../views/Nos';
import Inicial from '../views/Inicial';
import Contato from '../views/Contato';
import Processo from '../views/Processo';
import Servicos from '../views/Servicos';

const appRoutes = [
    {
        path: '/inicial',
        component: Inicial,
        sidebarName: 'Inicial'
    },
    {
        path: '/nos',
        component: Nos,
        sidebarName: 'Nós'
    },
    {
        path: '/processo',
        component: Processo,
        sidebarName: 'Processo'
    },
    {
        path: '/servicos',
        component: Servicos,
        sidebarName: 'Serviços e Pacotes'
    },
    {
        path: '/contato',
        component: Contato,
        sidebarName: 'Contato'
    },
    {
        path: '/',
        redirect: true,
        to: '/inicial'
    }
];

export default appRoutes;