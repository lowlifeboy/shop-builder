import { type RouteObject } from 'react-router-dom'

import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { AccountDetailsPage, Dashboard, Orders, Addresses, Wishlist, ProfileLayout } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'

type AppRouteProps = RouteObject & {
  authOnly?: boolean
}

// Route enums
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  BLOG = 'blog',
  ARTICLE = 'article',

  // last
  NOT_FOUND = 'not_found',
}

export enum ProfileRoutes {
  PROFILE_DASHBOARD = 'profile_dashboard',
  PROFILE_ORDERS = 'profile_orders',
  PROFILE_ADDRESSES = 'profile_addresses',
  PROFILE_ACCOUNT_DETAILS = 'profile_accountDetails',
  PROFILE_WISHLIST = 'profile_wishlist',
}

// Route paths
export const ProfileRoutePath: Record<ProfileRoutes, string> = {
  [ProfileRoutes.PROFILE_DASHBOARD]: '/profile/dashboard',
  [ProfileRoutes.PROFILE_ORDERS]: '/profile/orders',
  [ProfileRoutes.PROFILE_ADDRESSES]: '/profile/addresses',
  [ProfileRoutes.PROFILE_ACCOUNT_DETAILS]: '/profile/accountDetails',
  [ProfileRoutes.PROFILE_WISHLIST]: '/profile/wishlist'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.BLOG]: '/blog',
  [AppRoutes.ARTICLE]: '/article/:id',

  // last
  [AppRoutes.NOT_FOUND]: '*'
}

// Route configs
export const profileLayout: AppRouteProps = {
  element: <ProfileLayout />,
  authOnly: true,
  children: [
    {
      path: ProfileRoutePath[ProfileRoutes.PROFILE_DASHBOARD],
      element: <Dashboard />
    },
    {
      path: ProfileRoutePath[ProfileRoutes.PROFILE_ORDERS],
      element: <Orders />
    },
    {
      path: ProfileRoutePath[ProfileRoutes.PROFILE_ADDRESSES],
      element: <Addresses />
    },
    {
      path: ProfileRoutePath[ProfileRoutes.PROFILE_ACCOUNT_DETAILS],
      element: <AccountDetailsPage />
    },
    {
      path: ProfileRoutePath[ProfileRoutes.PROFILE_WISHLIST],
      element: <Wishlist />
    }
    // {
    //   path: 'profile',
    //   element: <Navigate to={ProfileRoutePath[ProfileRoutes.PROFILE_DASHBOARD]} replace />
    // }
  ]
}

export const routeConfig: AppRouteProps[] = [
  {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />
  },
  {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />
  },
  {
    path: RoutePath[AppRoutes.BLOG],
    element: <ArticlesPage />
  },
  {
    path: RoutePath[AppRoutes.ARTICLE],
    element: <ArticleDetailsPage />
  },

  // Profile pages
  profileLayout,

  // last
  {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />
  }
]
