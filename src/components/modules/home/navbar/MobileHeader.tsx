
import { MenuIcon, SearchIcon } from 'lucide-react'
import { IconButton } from './IconButton'
import WhiteLogo from '@/components/shared/logo/WhiteLogo'
type MobileHeaderProps = {
  onMenuOpen: () => void
}
export function MobileHeader({ onMenuOpen }: MobileHeaderProps) {
  return (
    <div className="flex h-16 items-center justify-between px-5 ">
     <WhiteLogo/>
      <div className="flex items-center gap-1">
        <IconButton icon={MenuIcon} label="Open menu" onClick={onMenuOpen} />
      </div>
    </div>
  )
}
