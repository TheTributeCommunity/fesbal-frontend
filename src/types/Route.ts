import { LazyExoticComponent } from 'react';

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<() => JSX.Element> | JSX.Element;
    name: string;
}

export default Route;
