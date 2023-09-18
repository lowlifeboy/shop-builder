import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import PageLoader from 'shared/ui/PageLoader/PageLoader'

export default function AppRouter () {
  const routes = useRoutes(routeConfig)

  return (
    <Suspense fallback={<PageLoader />}>
      {routes}
      {/* <Routes> */}
      {/*  {displayRoutes(routeConfig)} */}
      {/* </Routes> */}
    </Suspense>
  )
}
