import { memo, Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router-dom'

import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import PageLoader from 'shared/ui/PageLoader/PageLoader'
import { getUserAuthData } from 'entities/User'

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)

  const filteredRouteConfig = useMemo(() => {
    return routeConfig.filter((route) => !route.authOnly || isAuth)
  }, [isAuth])

  const routes = useRoutes(filteredRouteConfig)

  return (
    <Suspense fallback={<PageLoader />}>
      {routes}
      {/* <Routes> */}
      {/*  {displayRoutes(routeConfig)} */}
      {/* </Routes> */}
    </Suspense>
  )
}

export default memo(AppRouter)
