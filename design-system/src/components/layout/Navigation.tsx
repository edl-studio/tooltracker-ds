import * as React from "react"
import { Link } from "react-router-dom"
import { Icon } from '@/components/ui/icon/icon'
import { cn } from "@/lib/utils"

interface NavigationItemProps {
  icon: 'home' | 'tools' | 'settings';
  label: string;
  href: string;
  isActive?: boolean;
  isCollapsed?: boolean;
}

interface NavigationProps {
  isCollapsed?: boolean;
}

const NavigationItem = ({ icon, label, href, isActive, isCollapsed }: NavigationItemProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        "hover:bg-controls-hover",
        isActive && "bg-controls text-primary",
        !isActive && "text-secondary"
      )}
    >
      {/* Use MUI icons */}
      <Icon>
        {icon === 'home' && 'home'}
        {icon === 'tools' && 'build'}
        {icon === 'settings' && 'settings'}
      </Icon>
      {!isCollapsed && <span className="text-sm">{label}</span>}
    </Link>
  )
}

export const Navigation = ({ isCollapsed = false }: NavigationProps) => {
    return (
    <nav className="flex flex-col gap-1">
      <NavigationItem
        icon="home"
        label="Home"
        href="/"
        isActive={window.location.pathname === '/'}
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        icon="tools"
        label="Tools"
        href="/tools"
        isActive={window.location.pathname === '/tools'}
        isCollapsed={isCollapsed}
      />
            <NavigationItem 
        icon="settings"
        label="Settings"
        href="/settings"
        isActive={window.location.pathname === '/settings'}
              isCollapsed={isCollapsed}
            />
      </nav>
  )
} 