import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@/components/ui/icon/icon';
import { Avatar } from '@/components/ui/avatar/avatar';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip/tooltip';

import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { icon: 'home', label: 'Home', href: '/' },
  { icon: 'group', label: 'Employees', href: '/employees' },
  { icon: 'location_on', label: 'Locations', href: '/locations' },
  { icon: 'build', label: 'Tools', href: '/tools' },
  { icon: 'category', label: 'Categories', href: '/categories' },
  { icon: 'check_circle', label: 'Service schemas', href: '/service-schemas' },
  { icon: 'calendar_today', label: 'Service calendar', href: '/service-calendar' },
  { icon: 'settings', label: 'Settings', href: '/settings' },
];

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Check if we're on mobile and handle window resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false); // Close mobile menu when switching to desktop
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle desktop sidebar collapse
  const toggleDesktopSidebar = () => {
    if (!isMobile) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className="relative flex h-screen bg-[var(--background-page)]">
      {/* Mobile Header - only visible on mobile */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#1C2231] border-b border-[#334155] h-16 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img 
            src="/Logo-TT.svg" 
            alt="ToolTracker" 
            className="h-7"
          />
        </div>
        <button
          onClick={toggleMobileMenu}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#334155] transition-colors"
          aria-label="Open menu"
        >
          <Icon className="text-[#94A3B8]" style={{fontSize: '16px', width: '16px', height: '16px'}}>menu</Icon>
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "bg-[#1C2231] transition-all duration-500 z-50",
        // Desktop behavior
        "lg:relative lg:translate-x-0",
        // Mobile behavior - fixed position, slide in/out
        "fixed inset-y-0 left-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        // Width based on collapse state (only on desktop)
        isMobile ? "w-64" : (isCollapsed ? "w-16.5" : "w-64")
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={cn(
            "relative flex items-center border-b border-[#334155] p-4",
            // On mobile, always show full header
            isMobile ? "justify-between" : "justify-between"
          )}>
            <div className={cn(
              "flex items-center gap-3 transition-all duration-500",
              // Animate logo visibility
              (isCollapsed && !isMobile) 
                ? "opacity-0 transform -translate-x-2 pointer-events-none" 
                : "opacity-100 transform translate-x-0"
            )}>
              <img 
                src="/Logo-TT.svg" 
                alt="ToolTracker" 
                className="h-7"
              />
            </div>
            {/* Desktop collapse button */}
            {!isMobile && (
              <button
                onClick={toggleDesktopSidebar}
                className={cn(
                  "flex items-center justify-center rounded hover:bg-[#334155] transition-all duration-500",
                  // Keep consistent 24x24 size
                  "w-6 h-6"
                )}
                style={{
                  // Use transform to smoothly animate position
                  transform: isCollapsed ? 'translateX(-50%)' : 'translateX(0)',
                  marginLeft: isCollapsed ? '50%' : '0',
                  // Ensure consistent size
                  minWidth: '24px',
                  minHeight: '24px',
                  maxWidth: '24px',
                  maxHeight: '24px'
                }}
              >
                <Icon className="text-[#94A3B8]" style={{fontSize: '16px', width: '16px', height: '16px'}}>
                  {isCollapsed ? 'chevron_right' : 'chevron_left'}
                </Icon>
              </button>
            )}
            {/* Mobile close button */}
            {isMobile && (
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#334155] transition-colors"
              >
                <Icon className="text-[#94A3B8]" style={{fontSize: '16px', width: '16px', height: '16px'}}>close</Icon>
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="flex flex-col gap-1">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "relative flex items-center rounded-2xs transition-all duration-500 h-9",
                          isActive 
                            ? "bg-brand hover:bg-brand-hover active:bg-brand text-primary" 
                            : "hover:bg-[#334155] text-white",
                          // Width animation
                          isCollapsed && !isMobile ? "w-9" : "w-full"
                        )}

                      >
                        {/* 36x36 icon container - always centered */}
                        <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                          <Icon 
                            className="relative z-10"
                            style={{
                              fontSize: '16px',
                              width: '16px',
                              height: '16px'
                            }}
                          >
                            {item.icon}
                          </Icon>
                        </div>
                        
                        {/* Animated label */}
                        <span 
                          className={cn(
                            "ui-sm-regular transition-all duration-500 whitespace-nowrap",
                            // Hide on mobile when collapsed, or on desktop when collapsed
                            (isCollapsed && !isMobile) 
                              ? "opacity-0 transform translate-x-2 pointer-events-none w-0" 
                              : "opacity-100 transform translate-x-0",
                            // Always hide on mobile when menu is closed
                            isMobile && !isMobileMenuOpen && "hidden"
                          )}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </TooltipTrigger>
                    {/* Only show tooltip when collapsed on desktop */}
                    {(isCollapsed && !isMobile) && (
                      <TooltipContent side="right" sideOffset={20}>
                        {item.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                );
              })}
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-[#334155]">
            <div className="flex items-center gap-3">
              <Avatar 
                size="sm" 
                initials="KA" 
                className="bg-[#FF5A1F]"
              />
              <div className="relative flex items-center flex-1">
                <p className={cn(
                  "ui-sm-regular absolute text-white transition-all duration-500 whitespace-nowrap",
                  // Animate text visibility
                  (isCollapsed && !isMobile) 
                    ? "opacity-0 transform translate-x-2 pointer-events-none" 
                    : "opacity-100 transform translate-x-0"
                )}>
                  Kasper Andersen
                </p>
                <button className={cn(
                  "w-6 h-6 flex items-center justify-center rounded hover:bg-[#334155] transition-all duration-500 ml-auto",
                  // Animate button visibility
                  (isCollapsed && !isMobile) 
                    ? "opacity-0 transform translate-x-2 pointer-events-none" 
                    : "opacity-100 transform translate-x-0"
                )}>
                  <Icon className="text-[#94A3B8]" style={{fontSize: '16px', width: '16px', height: '16px'}}>chevron_right</Icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn(
        "flex-1 overflow-auto",
        // Add top padding on mobile to account for fixed header
        "lg:pt-0 pt-16"
      )}>
        {children}
      </div>
    </div>
  );
}; 