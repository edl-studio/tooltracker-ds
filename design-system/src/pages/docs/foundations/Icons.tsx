import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { Icon } from '@/components/ui';

export default function Icons() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Icons</h1>
        <p className="text-lg text-secondary">
          A centralized icon system using Material Symbols Sharp with consistent styling and validation states.
        </p>
      </div>

      {/* Icon Component */}
      <Card>
        <CardHeader>
          <CardTitle>Icon Component</CardTitle>
          <CardDescription>
            The Icon component provides consistent styling and validation states for all icons
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Basic Usage</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-container rounded-lg border border-weak text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-primary">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </Icon>
                  <p className="text-sm text-secondary">Default</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-success-base">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </Icon>
                  <p className="text-sm text-secondary">Success</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-warning-base">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </Icon>
                  <p className="text-sm text-secondary">Warning</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-destructive-base">
                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </Icon>
                  <p className="text-sm text-secondary">Destructive</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Common Icons</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  { name: 'home', path: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                  { name: 'settings', path: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                  { name: 'user', path: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                  { name: 'search', path: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
                  { name: 'plus', path: 'M12 4v16m8-8H4' },
                  { name: 'edit', path: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
                ].map((icon) => (
                  <div key={icon.name} className="p-4 bg-container rounded-lg border border-weak text-center">
                    <Icon className="w-6 h-6 mx-auto mb-2 text-primary">
                      <path d={icon.path} />
                    </Icon>
                    <p className="text-sm text-secondary capitalize">{icon.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Guidelines</CardTitle>
          <CardDescription>
            Best practices for using icons in the design system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Icon Sizing</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-container rounded-lg border border-weak text-center">
                  <Icon className="w-4 h-4 mx-auto mb-2 text-primary">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </Icon>
                  <p className="text-sm text-secondary">16px (w-4 h-4)</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak text-center">
                  <Icon className="w-5 h-5 mx-auto mb-2 text-primary">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </Icon>
                  <p className="text-sm text-secondary">20px (w-5 h-5)</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-primary">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </Icon>
                  <p className="text-sm text-secondary">24px (w-6 h-6)</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak text-center">
                  <Icon className="w-8 h-8 mx-auto mb-2 text-primary">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </Icon>
                  <p className="text-sm text-secondary">32px (w-8 h-8)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Icon + Label Padding</h3>
              <div className="space-y-4">
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Asymmetric Padding Principle</h4>
                  <p className="text-sm text-secondary mb-3">
                    When UI elements contain both an icon and label, use asymmetric padding to maintain optical balance:
                  </p>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• <strong>Text next to edge:</strong> 16px padding</li>
                    <li>• <strong>Icon next to edge:</strong> 12px padding</li>
                    <li>• <strong>Text + Icon combination:</strong> 16px on text side, 12px on icon side</li>
                  </ul>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Examples</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-secondary">Button with icon + label:</span>
                      <code className="text-xs bg-flat px-1 rounded">pl-4 pr-3</code>
                      <span className="text-sm text-secondary">(16px left, 12px right)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-secondary">Button with icon only:</span>
                      <code className="text-xs bg-flat px-1 rounded">p-3</code>
                      <span className="text-sm text-secondary">(12px all around)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-secondary">Button with label only:</span>
                      <code className="text-xs bg-flat px-1 rounded">px-4</code>
                      <span className="text-sm text-secondary">(16px left and right)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Icon Sources</h3>
              <div className="p-4 bg-container rounded-lg border border-weak">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Material Symbols Sharp</h4>
                    <p className="text-sm text-secondary">Primary icon set from Google Fonts</p>
                    <a href="https://fonts.google.com/icons?icon.style=Sharp" target="_blank" rel="noopener noreferrer" className="text-sm text-brand hover:text-brand-hover">
                      Browse icons →
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Custom Icons</h4>
                    <p className="text-sm text-secondary">SVG icons can be added as custom paths</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Code Examples</CardTitle>
          <CardDescription>
            How to use icons in your components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-flat rounded-lg">
              <h4 className="font-medium text-primary mb-2">✅ Basic Usage</h4>
              <pre className="text-sm overflow-x-auto">
                <code>{`import { Icon } from '@/components/ui/icon';

<Icon className="w-6 h-6 text-primary">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
</Icon>`}</code>
              </pre>
            </div>
            <div className="p-4 bg-flat rounded-lg">
              <h4 className="font-medium text-primary mb-2">✅ With Validation States</h4>
              <pre className="text-sm overflow-x-auto">
                <code>{`<Icon className="w-6 h-6 text-success-base">
  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</Icon>

<Icon className="w-6 h-6 text-warning-base">
  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
</Icon>`}</code>
              </pre>
            </div>
            <div className="p-4 bg-flat rounded-lg">
              <h4 className="font-medium text-primary mb-2">✅ Icon + Label Button</h4>
              <pre className="text-sm overflow-x-auto">
                <code>{`<button className="pl-4 pr-3 py-2 bg-brand hover:bg-brand-hover text-white rounded-md flex items-center gap-2">
  <Icon className="w-5 h-5">
    <path d="M12 4v16m8-8H4" />
  </Icon>
  <span className="ui-sm-medium">Add Item</span>
</button>`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 