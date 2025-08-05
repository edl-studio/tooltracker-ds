import { Link } from 'react-router-dom';

interface DocsSidebarProps {
  currentPath: string;
}

interface SidebarItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

const sidebarItems: SidebarItem[] = [
  {
    label: 'Introduction',
    href: '/docs'
  },
  {
    label: 'Design principles',
    href: '/docs/principles'
  },
  {
    label: 'Colors',
    href: '/docs/foundations/colors'
  },
  {
    label: 'Typography',
    href: '/docs/foundations/typography'
  },
  {
    label: 'Icons',
    href: '/docs/foundations/icons'
  },
  {
    label: 'Radius',
    href: '/docs/foundations/radius'
  },
  {
    label: 'Storybook',
    href: 'http://localhost:6006',
    isExternal: true
  }
];

// Define where dividers should appear
const dividerAfterIndices = [1, 5]; // After "Design principles" and "Radius"

export function DocsSidebar({ currentPath }: DocsSidebarProps) {
  const isActive = (href: string) => currentPath === href;

  return (
    <div className="w-64 bg-page h-screen overflow-y-auto">
      <div className="flex flex-col gap-1 p-16">
                 {/* Header */}
         <div className="flex flex-col gap-2 px-4 py-2.5">
           <h1 className="text-base font-semibold text-[#1c2231] leading-none">
             Design System
           </h1>
           <p className="text-xs text-[#738297] leading-none">
             Documentation & Guidelines
           </p>
         </div>

                 {/* Divider */}
         <div className="h-6 flex items-center">
           <div className="w-full h-px bg-[#dbe4eb] mx-4"></div>
         </div>

                 {/* Navigation Items */}
         <nav className="space-y-1">
           {sidebarItems.map((item, index) => (
             <div key={item.href}>
               {item.isExternal ? (
                 <a
                   href={item.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`
                     flex items-center justify-between h-9 px-4 py-0 text-sm font-medium transition-colors
                     ${isActive(item.href)
                       ? 'bg-[#1c2231] text-white'
                       : 'text-[#1c2231] hover:bg-[rgba(255,255,255,0.05)]'
                     }
                   `}
                 >
                   <span className="leading-none">{item.label}</span>
                   <svg
                     className="w-4 h-4"
                     fill="none"
                     viewBox="0 0 16 16"
                   >
                     <path
                       d="M1.9 14.1V1.9H7.65V3.03333H3.03333V12.9667H12.9667V8.35H14.1V14.1H1.9ZM6.46667 10.35L5.66667 9.53333L12.1667 3.03333H8.65V1.9H14.1V7.35H12.9667V3.85L6.46667 10.35Z"
                       fill="currentColor"
                     />
                   </svg>
                 </a>
               ) : (
                 <Link
                   to={item.href}
                   className={`
                     flex items-center h-9 px-4 py-0 text-sm font-medium transition-colors
                     ${isActive(item.href)
                       ? 'bg-[#1c2231] text-white'
                       : 'text-[#1c2231] hover:bg-[rgba(255,255,255,0.05)]'
                     }
                   `}
                 >
                   <span className="leading-none">{item.label}</span>
                 </Link>
               )}
               
               {/* Add divider after specific items */}
               {dividerAfterIndices.includes(index) && (
                 <div className="h-6 flex items-center">
                   <div className="w-full h-px bg-[#dbe4eb] mx-4"></div>
                 </div>
               )}
             </div>
           ))}
         </nav>

                 {/* Final Divider */}
         <div className="h-6 flex items-center">
           <div className="w-full h-px bg-[#dbe4eb] mx-4"></div>
         </div>
      </div>
    </div>
  );
} 