import 'app/styles/index.scss'

export default function BorderedStoryDecorator (Story: any) {
  return (
    <div style={{ padding: 20 }}>
      <Story />
    </div>
  )
}
