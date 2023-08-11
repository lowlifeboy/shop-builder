import { Link } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames'
import { ProfileIcon } from 'shared/assets/icons'
import { Theme } from 'app/providers/ThemeProvider'
import { getIconColorByTheme } from 'shared/lib/getMainColorByTheme/getIconColorByTheme'

interface ProfileIconLinkProps {
  theme?: Theme
  className?: string
}

export default function ProfileIconLink ({ theme = Theme.LIGHT, className }: ProfileIconLinkProps) {
  return (
    <Link to={'/profile'} className={classNames('', {}, [className ?? ''])}>
      <ProfileIcon color={getIconColorByTheme(theme)} />
    </Link>
  )
}
