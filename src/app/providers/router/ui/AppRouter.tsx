import { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import PageLoader from 'shared/ui/PageLoader/PageLoader'

const AppRouter = memo(() => {
  // const isAuth = useSelector(getUserAuthData)

  // const filteredRouteConfig = useMemo(() => {
  //   return routeConfig.filter((route) => !route.authOnly || isAuth)
  // }, [isAuth])

  const routes = useRoutes(routeConfig)

  return (
    <Suspense fallback={<PageLoader />}>
      {routes}
    </Suspense>
  )
})

export default memo(AppRouter)
