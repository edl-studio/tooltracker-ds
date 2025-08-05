import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { NavigationItemProps } from './Navigation';

interface NavigationLayoutProps {
  navigationItems: NavigationItemProps[];
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}

export const NavigationLayout = ({ 
  navigationItems, 
  children, 
  defaultCollapsed = false 
}: NavigationLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  useEffect(() => {
    const handleNavigationToggle = (event: CustomEvent<{ collapsed: boolean }>) => {
      setIsCollapsed(event.detail.collapsed);
    };

    window.addEventListener('navigation-toggle', handleNavigationToggle as EventListener);

    return () => {
      window.removeEventListener('navigation-toggle', handleNavigationToggle as EventListener);
    };
  }, []);

  return (
    <>
      <Navigation 
        items={navigationItems} 
        defaultCollapsed={defaultCollapsed}
        onToggle={setIsCollapsed}
      />
      <main 
        className={`transition-all duration-300 ${
          isCollapsed ? 'ml-16' : 'ml-[240px]'
        }`}
        id="main-content"
      >
        {children}
      </main>
    </>
  );
}; 