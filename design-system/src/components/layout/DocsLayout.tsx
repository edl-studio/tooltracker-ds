import { DocsSidebar } from './DocsSidebar';

interface DocsLayoutProps {
  children: React.ReactNode;
  currentPath: string;
}

export function DocsLayout({ children, currentPath }: DocsLayoutProps) {
  return (
    <div className="flex h-screen bg-page">
      <DocsSidebar currentPath={currentPath} />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
} 