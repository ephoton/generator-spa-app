
import { ComponentClass } from 'react';
import { RouteProps } from 'react-router-dom';

export interface IPageRoute {
  title: string;
  path?: string;
  component?: ComponentClass;
  menus?: IPageRoute[];
}

export const PageRoutes: IPageRoute[] = [];
