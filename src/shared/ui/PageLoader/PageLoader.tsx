import './PageLoader.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface PageLoaderProps {
  className?: string
}

export default function PageLoader ({ className }: PageLoaderProps) {
  return (
    <div className={classNames('pageLoader', {}, [className])}>
      <div className="lds-grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
