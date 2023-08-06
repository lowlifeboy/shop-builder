import { Link } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames'
import { ProfileIcon } from 'shared/assets/icons'
import { useTheme } from 'app/providers/ThemeProvider'
import { getIconColorByTheme } from 'shared/lib/getMainColorByTheme/getIconColorByTheme'

interface ProfileIconLinkProps {
  className?: string
}

export default function ProfileIconLink ({ className }: ProfileIconLinkProps) {
  const { theme } = useTheme()

  return (
    <Link to={'/profile'} className={classNames('', {}, [className ?? ''])}>
      <ProfileIcon color={getIconColorByTheme(theme)} />
    </Link>
  )
}
