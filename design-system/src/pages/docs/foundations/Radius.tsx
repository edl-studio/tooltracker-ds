import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';

export default function Radius() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Radius</h1>
        <p className="text-lg text-secondary">
          A consistent border radius system for creating rounded corners across all components.
        </p>
      </div>

      {/* Border Radius Scale */}
      <Card>
        <CardHeader>
          <CardTitle>Border Radius Scale</CardTitle>
          <CardDescription>
            Consistent border radius values from the design system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'none', value: 'radius-none', size: '0px', description: 'No border radius' },
              { name: '2xs', value: 'radius-2xs', size: '2px', description: 'Very subtle rounding' },
              { name: 'xs', value: 'radius-xs', size: '4px', description: 'Subtle rounding' },
              { name: 'sm', value: 'radius-sm', size: '6px', description: 'Small rounding' },
              { name: 'md', value: 'radius-md', size: '8px', description: 'Medium rounding' },
              { name: 'lg', value: 'radius-lg', size: '12px', description: 'Large rounding' },
              { name: 'xl', value: 'radius-xl', size: '16px', description: 'Extra large rounding' },
              { name: '2xl', value: 'radius-2xl', size: '24px', description: 'Very large rounding' },
              { name: 'round', value: 'radius-round', size: '50%', description: 'Fully rounded (circle)' },
            ].map((radius) => (
              <div key={radius.name} className="space-y-3">
                <div 
                  className="h-20 w-20 bg-brand mx-auto"
                  style={{ 
                    borderRadius: `var(--radius-${radius.name})` 
                  }}
                ></div>
                <div className="text-center">
                  <h3 className="font-medium text-primary">{radius.name}</h3>
                  <p className="text-sm text-secondary">{radius.size}</p>
                  <code className="text-xs text-tertiary mt-1 block">rounded-{radius.name}</code>
                  <p className="text-xs text-secondary mt-1">{radius.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Examples</CardTitle>
          <CardDescription>
            Common use cases for different border radius values
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Buttons</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-8 bg-brand rounded-md"></div>
                      <span className="text-sm text-secondary">rounded-md (8px)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-brand rounded-full"></div>
                      <span className="text-sm text-secondary">rounded-full (50%)</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Cards & Containers</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-12 bg-container border border-weak rounded-lg"></div>
                      <span className="text-sm text-secondary">rounded-lg (12px)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-12 bg-container border border-weak rounded-xl"></div>
                      <span className="text-sm text-secondary">rounded-xl (16px)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Form Elements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Inputs & Controls</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-8 bg-controls border border-weak rounded-md"></div>
                      <span className="text-sm text-secondary">rounded-md (8px)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-controls border border-weak rounded-sm"></div>
                      <span className="text-sm text-secondary">rounded-sm (6px)</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Badges & Tags</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 bg-success-light text-success-strong rounded-sm text-xs">Success</div>
                      <span className="text-sm text-secondary">rounded-sm (6px)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 bg-warning-light text-warning-strong rounded-xs text-xs">Warning</div>
                      <span className="text-sm text-secondary">rounded-xs (4px)</span>
                    </div>
                  </div>
                </div>
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
            Best practices for using border radius in the design system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">When to Use Each Radius</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-success-light rounded-lg border border-weak">
                  <h4 className="font-medium text-success-strong mb-2">✅ Recommended Usage</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• <code className="text-xs bg-flat px-1 rounded">rounded-none</code> - Sharp edges, no rounding</li>
                    <li>• <code className="text-xs bg-flat px-1 rounded">rounded-xs</code> - Subtle elements, badges</li>
                    <li>• <code className="text-xs bg-flat px-1 rounded">rounded-sm</code> - Small elements, checkboxes</li>
                    <li>• <code className="text-xs bg-flat px-1 rounded">rounded-md</code> - Buttons, inputs, controls</li>
                    <li>• <code className="text-xs bg-flat px-1 rounded">rounded-lg</code> - Cards, containers, modals</li>
                    <li>• <code className="text-xs bg-flat px-1 rounded">rounded-xl</code> - Large containers, hero sections</li>
                    <li>• <code className="text-xs bg-flat px-1 rounded">rounded-2xl</code> - Very large elements</li>
                    <li>• <code className="text-xs bg-flat px-1 rounded">rounded-full</code> - Avatars, circular buttons</li>
                  </ul>
                </div>
                <div className="p-4 bg-destructive-light rounded-lg border border-weak">
                  <h4 className="font-medium text-destructive-strong mb-2">❌ Avoid</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Mixing inconsistent radius values</li>
                    <li>• Using custom pixel values</li>
                    <li>• Overriding component radius defaults</li>
                    <li>• Using radius for non-visual purposes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Consistency Rules</h3>
              <div className="p-4 bg-container rounded-lg border border-weak">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Interactive Elements</h4>
                    <ul className="text-sm text-secondary space-y-1">
                      <li>• Buttons: <code className="text-xs bg-flat px-1 rounded">rounded-md</code></li>
                      <li>• Inputs: <code className="text-xs bg-flat px-1 rounded">rounded-md</code></li>
                      <li>• Checkboxes: <code className="text-xs bg-flat px-1 rounded">rounded-sm</code></li>
                      <li>• Icon buttons: <code className="text-xs bg-flat px-1 rounded">rounded-md</code></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Containers</h4>
                    <ul className="text-sm text-secondary space-y-1">
                      <li>• Cards: <code className="text-xs bg-flat px-1 rounded">rounded-lg</code></li>
                      <li>• Modals: <code className="text-xs bg-flat px-1 rounded">rounded-lg</code></li>
                      <li>• Dropdowns: <code className="text-xs bg-flat px-1 rounded">rounded-md</code></li>
                      <li>• Tooltips: <code className="text-xs bg-flat px-1 rounded">rounded-sm</code></li>
                    </ul>
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
            How to use border radius in your components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-flat rounded-lg">
              <h4 className="font-medium text-primary mb-2">✅ Correct Usage</h4>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Use predefined radius classes
<button className="bg-brand text-white rounded-md px-4 py-2">
  Primary Button
</button>

<div className="bg-container border border-weak rounded-lg p-4">
  Card Container
</div>

<input className="bg-controls border border-weak rounded-md px-3 py-2" />

<div className="w-8 h-8 bg-brand rounded-full"></div>`}</code>
              </pre>
            </div>
            <div className="p-4 bg-flat rounded-lg">
              <h4 className="font-medium text-primary mb-2">❌ Avoid This</h4>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Don't use custom pixel values
<button className="bg-brand text-white rounded-[8px] px-4 py-2">
  Custom Radius
</button>

// Don't override component defaults
<Card className="rounded-[12px]">
  Overridden Card
</Card>`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 