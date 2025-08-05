import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { Icon } from '@/components/ui';

export default function Introduction() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Introduction</h1>
        <p className="text-lg text-secondary">
          A comprehensive design system built with shadcn/ui, Tailwind CSS v4, and Figma MCP integration for seamless design-to-code workflows.
        </p>
      </div>

      {/* Project Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Project Configuration</CardTitle>
          <CardDescription>
            This project is configured with modern tools and frameworks for optimal development experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Core Technologies</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-brand">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </Icon>
                  <span className="font-medium">Vite + React</span>
                  <span className="text-sm text-secondary">with TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-brand">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </Icon>
                  <span className="font-medium">Tailwind CSS v4</span>
                  <span className="text-sm text-secondary">with @theme directive</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-brand">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </Icon>
                  <span className="font-medium">shadcn/ui</span>
                  <span className="text-sm text-secondary">built on Radix UI primitives</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-brand">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </Icon>
                  <span className="font-medium">Storybook</span>
                  <span className="text-sm text-secondary">for component documentation</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Key Features</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-success-base">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </Icon>
                  <span>Automatic utility generation from CSS variables</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-success-base">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </Icon>
                  <span>Scoped color variables (background, text, border)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-success-base">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </Icon>
                  <span>Figma MCP integration for design-to-code</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-success-base">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </Icon>
                  <span>Comprehensive component library with variants</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dependencies */}
      <Card>
        <CardHeader>
          <CardTitle>Dependencies</CardTitle>
          <CardDescription>
            Core dependencies and their purposes in the design system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Core Dependencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">React & TypeScript</h4>
                  <p className="text-sm text-secondary">Modern React with full TypeScript support for type safety</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Vite</h4>
                  <p className="text-sm text-secondary">Fast build tool with hot module replacement</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Tailwind CSS v4</h4>
                  <p className="text-sm text-secondary">Utility-first CSS with @theme directive for automatic class generation</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Radix UI</h4>
                  <p className="text-sm text-secondary">Unstyled, accessible UI primitives</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Design System Dependencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">shadcn/ui</h4>
                  <p className="text-sm text-secondary">Beautifully designed components built on Radix UI</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Storybook</h4>
                  <p className="text-sm text-secondary">Component development and documentation environment</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Figma MCP</h4>
                  <p className="text-sm text-secondary">Model Context Protocol for Figma integration</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">clsx & tailwind-merge</h4>
                  <p className="text-sm text-secondary">Utilities for conditional classes and Tailwind merging</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>
            Get up and running with the design system in minutes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-container rounded-lg border border-weak">
              <h4 className="font-medium text-primary mb-2">1. Install Dependencies</h4>
              <pre className="text-sm bg-flat p-3 rounded-md overflow-x-auto">
                <code>npm install</code>
              </pre>
            </div>
            
            <div className="p-4 bg-container rounded-lg border border-weak">
              <h4 className="font-medium text-primary mb-2">2. Start Development Server</h4>
              <pre className="text-sm bg-flat p-3 rounded-md overflow-x-auto">
                <code>npm run dev</code>
              </pre>
            </div>
            
            <div className="p-4 bg-container rounded-lg border border-weak">
              <h4 className="font-medium text-primary mb-2">3. Open Storybook</h4>
              <pre className="text-sm bg-flat p-3 rounded-md overflow-x-auto">
                <code>npm run storybook</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 