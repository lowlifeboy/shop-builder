import { type RouteProps } from 'react-router-dom'

import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  PROFILE_ORDERS = 'orders',
  PROFILE_ADDRESSES = 'addresses',
  PROFILE_ACCOUNT_DETAILS = 'accountDetails',
  PROFILE_WISHLIST = 'wishlist',

  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.PROFILE_ORDERS]: '/profile/orders',
  [AppRoutes.PROFILE_ADDRESSES]: '/profile/addresses',
  [AppRoutes.PROFILE_ACCOUNT_DETAILS]: '/profile/accountDetails',
  [AppRoutes.PROFILE_WISHLIST]: '/profile/wishlist',

  // last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath[AppRoutes.PROFILE],
    element: <ProfilePage />
  },
  [AppRoutes.PROFILE_ORDERS]: {
    path: RoutePath[AppRoutes.PROFILE_ORDERS],
    element: <ProfilePage />
  },
  [AppRoutes.PROFILE_ADDRESSES]: {
    path: RoutePath[AppRoutes.PROFILE_ADDRESSES],
    element: <ProfilePage />
  },
  [AppRoutes.PROFILE_ACCOUNT_DETAILS]: {
    path: RoutePath[AppRoutes.PROFILE_ACCOUNT_DETAILS],
    element: <ProfilePage />
  },
  [AppRoutes.PROFILE_WISHLIST]: {
    path: RoutePath[AppRoutes.PROFILE_WISHLIST],
    element: <ProfilePage />
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />
  }
}
