import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { Icon } from '@/components/ui';

export default function DesignPrinciples() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Design Principles</h1>
        <p className="text-lg text-secondary">
          Core principles that guide the design system and ensure consistency across all components and interfaces.
        </p>
      </div>

      {/* Core Principles */}
      <Card>
        <CardHeader>
          <CardTitle>Core Principles</CardTitle>
          <CardDescription>
            Fundamental principles that shape every decision in the design system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-container rounded-lg border border-weak">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-brand">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </Icon>
                  <h3 className="text-lg font-semibold text-primary">Consistency</h3>
                </div>
                <p className="text-secondary">
                  Every component follows the same design patterns, ensuring a cohesive user experience across the entire application.
                </p>
              </div>

              <div className="p-6 bg-container rounded-lg border border-weak">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-brand">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </Icon>
                  <h3 className="text-lg font-semibold text-primary">Efficiency</h3>
                </div>
                <p className="text-secondary">
                  Components are designed to be reusable and composable, reducing development time and maintaining consistency.
                </p>
              </div>

              <div className="p-6 bg-container rounded-lg border border-weak">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-brand">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </Icon>
                  <h3 className="text-lg font-semibold text-primary">Accessibility</h3>
                </div>
                <p className="text-secondary">
                  All components are built with accessibility in mind, ensuring they work for users with diverse abilities and needs.
                </p>
              </div>

              <div className="p-6 bg-container rounded-lg border border-weak">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-brand">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </Icon>
                  <h3 className="text-lg font-semibold text-primary">User-Centered</h3>
                </div>
                <p className="text-secondary">
                  Design decisions prioritize user needs and goals, creating intuitive and delightful experiences.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design System Philosophy */}
      <Card>
        <CardHeader>
          <CardTitle>Design System Philosophy</CardTitle>
          <CardDescription>
            The underlying philosophy that guides our approach to design and development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Component-First Approach</h3>
              <p className="text-secondary mb-4">
                We believe in building interfaces from a library of well-designed, reusable components rather than creating custom solutions for each use case.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-success-light rounded-lg">
                  <h4 className="font-medium text-success-strong mb-2">Reusability</h4>
                  <p className="text-sm text-secondary">Components are designed to work in multiple contexts</p>
                </div>
                <div className="p-4 bg-success-light rounded-lg">
                  <h4 className="font-medium text-success-strong mb-2">Composability</h4>
                  <p className="text-sm text-secondary">Components can be combined to create complex interfaces</p>
                </div>
                <div className="p-4 bg-success-light rounded-lg">
                  <h4 className="font-medium text-success-strong mb-2">Maintainability</h4>
                  <p className="text-sm text-secondary">Changes to components propagate across the entire system</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Design Token System</h3>
              <p className="text-secondary mb-4">
                Our design system uses a comprehensive token system that ensures consistency and enables easy theming and customization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Scoped Variables</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Background colors for backgrounds only</li>
                    <li>• Text colors for text and icons only</li>
                    <li>• Border colors for borders only</li>
                    <li>• Multi-purpose colors for any use</li>
                  </ul>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Automatic Generation</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Tailwind CSS v4 @theme directive</li>
                    <li>• Automatic utility class generation</li>
                    <li>• Type-safe design tokens</li>
                    <li>• No configuration files needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Guidelines</CardTitle>
          <CardDescription>
            Key guidelines for implementing the design system effectively
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Component Usage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-success-light rounded-lg border border-weak">
                  <h4 className="font-medium text-success-strong mb-2">✅ Do</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Use existing components first</li>
                    <li>• Compose components together</li>
                    <li>• Follow established patterns</li>
                    <li>• Use design system tokens</li>
                    <li>• Respect component defaults</li>
                  </ul>
                </div>
                <div className="p-4 bg-destructive-light rounded-lg border border-weak">
                  <h4 className="font-medium text-destructive-strong mb-2">❌ Don't</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Create new components without checking existing ones</li>
                    <li>• Override component styling with utilities</li>
                    <li>• Use custom colors or spacing</li>
                    <li>• Ignore accessibility features</li>
                    <li>• Break established patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Typography Guidelines</h3>
              <div className="p-4 bg-container rounded-lg border border-weak">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Use Predefined Classes</h4>
                    <ul className="text-sm text-secondary space-y-1">
                      <li>• <code className="text-xs bg-flat px-1 rounded">.label-*</code> for headers and labels</li>
                      <li>• <code className="text-xs bg-flat px-1 rounded">.ui-*</code> for interface text</li>
                      <li>• <code className="text-xs bg-flat px-1 rounded">.body-*</code> for readable content</li>
                      <li>• <code className="text-xs bg-flat px-1 rounded">.display-*</code> for headings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Avoid Utility Classes</h4>
                    <ul className="text-sm text-secondary space-y-1">
                      <li>• Don't recreate typography with utilities</li>
                      <li>• Don't override typography properties</li>
                      <li>• Don't use inline styles for text</li>
                      <li>• Don't mix different typography systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Interactive Elements</h3>
              <div className="p-4 bg-container rounded-lg border border-weak">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Hover States</h4>
                    <ul className="text-sm text-secondary space-y-1">
                      <li>• All interactive elements have hover states</li>
                      <li>• Use <code className="text-xs bg-flat px-1 rounded">-hover</code> variables</li>
                      <li>• Smooth transitions (0.2s ease)</li>
                      <li>• Consistent behavior across components</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Icon + Label Padding</h4>
                    <ul className="text-sm text-secondary space-y-1">
                      <li>• Text next to edge: 16px padding</li>
                      <li>• Icon next to edge: 12px padding</li>
                      <li>• Text + Icon: 16px text, 12px icon</li>
                      <li>• Maintains optical balance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
          <CardDescription>
            Proven practices for working effectively with the design system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Development Workflow</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-container rounded-lg border border-weak">
                    <h4 className="font-medium text-primary mb-1">1. Check Existing Components</h4>
                    <p className="text-sm text-secondary">Always look for existing components before creating new ones</p>
                  </div>
                  <div className="p-3 bg-container rounded-lg border border-weak">
                    <h4 className="font-medium text-primary mb-1">2. Use Design Tokens</h4>
                    <p className="text-sm text-secondary">Use predefined colors, spacing, and typography classes</p>
                  </div>
                  <div className="p-3 bg-container rounded-lg border border-weak">
                    <h4 className="font-medium text-primary mb-1">3. Follow Patterns</h4>
                    <p className="text-sm text-secondary">Maintain consistency with established design patterns</p>
                  </div>
                  <div className="p-3 bg-container rounded-lg border border-weak">
                    <h4 className="font-medium text-primary mb-1">4. Test Accessibility</h4>
                    <p className="text-sm text-secondary">Ensure components work with screen readers and keyboard navigation</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Quality Assurance</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-container rounded-lg border border-weak">
                    <h4 className="font-medium text-primary mb-1">Visual Consistency</h4>
                    <p className="text-sm text-secondary">Check that components match the design system specifications</p>
                  </div>
                  <div className="p-3 bg-container rounded-lg border border-weak">
                    <h4 className="font-medium text-primary mb-1">Code Quality</h4>
                    <p className="text-sm text-secondary">Follow TypeScript best practices and component patterns</p>
                  </div>
                  <div className="p-3 bg-container rounded-lg border border-weak">
                    <h4 className="font-medium text-primary mb-1">Performance</h4>
                    <p className="text-sm text-secondary">Ensure components are optimized and don't impact performance</p>
                  </div>
                  <div className="p-3 bg-container rounded-lg border border-weak">
                    <h4 className="font-medium text-primary mb-1">Documentation</h4>
                    <p className="text-sm text-secondary">Update Storybook stories and documentation as needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 