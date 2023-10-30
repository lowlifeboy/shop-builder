import cls from './CustomDelimiterRenderer.module.scss'

const delimiter = '\u2726'

const CustomDelimiterRenderer = () => {
  return (
    <div className={cls.customDelimiterRendererWrapper}>
      <div>{delimiter}</div>
      <div>{delimiter}</div>
      <div>{delimiter}</div>
      <div>{delimiter}</div>
      <div>{delimiter}</div>
    </div>
  )
}

export default CustomDelimiterRenderer
