import loadable from './Loadable/Loadable'

export const Button = loadable(() => import("./Button/Button"))
export const Header = loadable(() => import("./Header/Header"))
export const Table = loadable(() => import("./Table/Table"))
export const Categories = loadable(() => import("./Categories/Categories"))