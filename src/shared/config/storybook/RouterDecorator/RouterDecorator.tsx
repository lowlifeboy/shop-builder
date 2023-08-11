import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export default function RouterDecorator (Story: any) {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
}
