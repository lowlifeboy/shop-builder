import 'app/styles/index.scss'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

export default function MemoryRouterDecorator (url: string, routePath: string) {
  return function (Story: any) {
    return (
      <MemoryRouter initialEntries={[url]}>
        <Routes>
          <Route path={routePath} element={<Story />} />
        </Routes>
      </MemoryRouter>
    )
  }
}
