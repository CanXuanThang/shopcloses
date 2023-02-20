import config from '../config';
import PayCart from '../layouts/Pay/PayCart';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.detali, component: Detail },
    { path: config.routes.men, component: Home },
    { path: config.routes.woman, component: Home },
    { path: config.routes.jacket, component: Home },
    { path: config.routes.accessory, component: Home },
    { path: config.routes.paycart, component: PayCart },
];

const priviateRoutes = [];

export { publicRoutes, priviateRoutes };
