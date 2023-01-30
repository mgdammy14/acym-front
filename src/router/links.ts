import Home from '../pages/home/Home';
export interface ILink {
    name: string;
    path: string;
    element: React.ComponentType<any>;
    subElement?: React.ComponentType<any> | any;
    icon?: string;
    iconActive?: string;
    subMenu?: ILink[];
}

const links: ILink[] = [
    {
        name: 'Home',
        path: '/',
        element: Home,
        icon: 'home',
        iconActive: 'home',
    },
];


export default links;