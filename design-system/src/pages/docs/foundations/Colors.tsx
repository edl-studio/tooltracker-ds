import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';

export default function Colors() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Colors</h1>
        <p className="text-lg text-secondary">
          A comprehensive color system with scoped variables for backgrounds, text, borders, and multi-purpose colors.
        </p>
      </div>

      {/* Background Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Background Colors</CardTitle>
          <CardDescription>
            Scoped background colors that can only be used as backgrounds
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'brand', class: 'bg-brand', description: 'Primary brand color' },
              { name: 'brand-hover', class: 'bg-brand-hover', description: 'Brand color on hover' },
              { name: 'page', class: 'bg-page', description: 'Main page background' },
              { name: 'container', class: 'bg-container', description: 'Container backgrounds' },
              { name: 'container-hover', class: 'bg-container-hover', description: 'Container hover state' },
              { name: 'controls', class: 'bg-controls', description: 'Form control backgrounds' },
              { name: 'controls-hover', class: 'bg-controls-hover', description: 'Controls hover state' },
              { name: 'flat', class: 'bg-flat', description: 'Flat surface backgrounds' },
              { name: 'flat-hover', class: 'bg-flat-hover', description: 'Flat surface hover' },
              { name: 'disabled', class: 'bg-disabled', description: 'Disabled state background' },
              { name: 'disabled-inverse', class: 'bg-disabled-inverse', description: 'Disabled inverse background' },
            ].map((color) => (
              <div key={color.name} className="space-y-3">
                <div className={`h-20 rounded-lg border border-weak ${color.class}`}></div>
                <div>
                  <h3 className="font-medium text-primary">{color.name}</h3>
                  <p className="text-sm text-secondary">{color.description}</p>
                  <code className="text-xs text-tertiary mt-1 block">bg-{color.name}</code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Text Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Text Colors</CardTitle>
          <CardDescription>
            Scoped text colors that can only be used for text and icons
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'primary', class: 'text-primary', description: 'Primary text color' },
              { name: 'secondary', class: 'text-secondary', description: 'Secondary text color' },
              { name: 'tertiary', class: 'text-tertiary', description: 'Tertiary text color' },
              { name: 'primary-inverse', class: 'text-primary-inverse', description: 'Primary text on dark backgrounds' },
              { name: 'disabled', class: 'text-disabled', description: 'Disabled text color' },
              { name: 'disabled-inverse', class: 'text-disabled-inverse', description: 'Disabled text on dark backgrounds' },
            ].map((color) => (
              <div key={color.name} className="space-y-3">
                <div className="h-20 rounded-lg border border-weak bg-container flex items-center justify-center">
                  <span className={`text-lg font-medium ${color.class}`}>
                    {color.name}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-primary">{color.name}</h3>
                  <p className="text-sm text-secondary">{color.description}</p>
                  <code className="text-xs text-tertiary mt-1 block">text-{color.name}</code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Border Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Border Colors</CardTitle>
          <CardDescription>
            Scoped border colors that can only be used for borders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'weak', class: 'border-weak', description: 'Subtle borders' },
              { name: 'strong', class: 'border-strong', description: 'Emphasized borders' },
              { name: 'focus', class: 'border-focus', description: 'Focus state borders' },
            ].map((color) => (
              <div key={color.name} className="space-y-3">
                <div className={`h-20 rounded-lg border-2 bg-container ${color.class}`}></div>
                <div>
                  <h3 className="font-medium text-primary">{color.name}</h3>
                  <p className="text-sm text-secondary">{color.description}</p>
                  <code className="text-xs text-tertiary mt-1 block">border-{color.name}</code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Success Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Success Colors</CardTitle>
          <CardDescription>
            Multi-purpose success colors with intensity variants and hover states
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { intensity: 'strong', description: 'Darkest variant for high contrast text' },
              { intensity: 'base', description: 'Standard variant for primary actions' },
              { intensity: 'weak', description: 'Light variant for subtle backgrounds' },
              { intensity: 'light', description: 'Lightest variant for very subtle backgrounds' },
            ].map((variant) => (
              <div key={variant.intensity} className="space-y-4">
                <h3 className="text-lg font-semibold text-primary capitalize">{variant.intensity}</h3>
                <p className="text-sm text-secondary">{variant.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className={`h-16 rounded-lg border border-weak bg-success-${variant.intensity}`}></div>
                    <div className="text-center">
                      <code className="text-xs text-tertiary">bg-success-{variant.intensity}</code>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className={`h-16 rounded-lg border border-weak bg-success-${variant.intensity}-hover`}></div>
                    <div className="text-center">
                      <code className="text-xs text-tertiary">bg-success-{variant.intensity}-hover</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Warning Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Warning Colors</CardTitle>
          <CardDescription>
            Multi-purpose warning colors with intensity variants and hover states
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { intensity: 'strong', description: 'Darkest variant for high contrast text' },
              { intensity: 'base', description: 'Standard variant for primary actions' },
              { intensity: 'weak', description: 'Light variant for subtle backgrounds' },
              { intensity: 'light', description: 'Lightest variant for very subtle backgrounds' },
            ].map((variant) => (
              <div key={variant.intensity} className="space-y-4">
                <h3 className="text-lg font-semibold text-primary capitalize">{variant.intensity}</h3>
                <p className="text-sm text-secondary">{variant.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className={`h-16 rounded-lg border border-weak bg-warning-${variant.intensity}`}></div>
                    <div className="text-center">
                      <code className="text-xs text-tertiary">bg-warning-{variant.intensity}</code>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className={`h-16 rounded-lg border border-weak bg-warning-${variant.intensity}-hover`}></div>
                    <div className="text-center">
                      <code className="text-xs text-tertiary">bg-warning-{variant.intensity}-hover</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Destructive Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Destructive Colors</CardTitle>
          <CardDescription>
            Multi-purpose destructive colors with intensity variants and hover states
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { intensity: 'strong', description: 'Darkest variant for high contrast text' },
              { intensity: 'base', description: 'Standard variant for primary actions' },
              { intensity: 'weak', description: 'Light variant for subtle backgrounds' },
              { intensity: 'light', description: 'Lightest variant for very subtle backgrounds' },
            ].map((variant) => (
              <div key={variant.intensity} className="space-y-4">
                <h3 className="text-lg font-semibold text-primary capitalize">{variant.intensity}</h3>
                <p className="text-sm text-secondary">{variant.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className={`h-16 rounded-lg border border-weak bg-destructive-${variant.intensity}`}></div>
                    <div className="text-center">
                      <code className="text-xs text-tertiary">bg-destructive-{variant.intensity}</code>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className={`h-16 rounded-lg border border-weak bg-destructive-${variant.intensity}-hover`}></div>
                    <div className="text-center">
                      <code className="text-xs text-tertiary">bg-destructive-{variant.intensity}-hover</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Visualization Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Data Visualization Colors</CardTitle>
          <CardDescription>
            Multi-purpose colors for charts, graphs, and data visualization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'red', class: 'bg-dataviz-red' },
              { name: 'orange', class: 'bg-dataviz-orange' },
              { name: 'yellow', class: 'bg-dataviz-yellow' },
              { name: 'green', class: 'bg-dataviz-green' },
              { name: 'blue', class: 'bg-dataviz-blue' },
              { name: 'purple', class: 'bg-dataviz-purple' },
            ].map((color) => (
              <div key={color.name} className="space-y-3">
                <div className={`h-20 rounded-lg border border-weak ${color.class}`}></div>
                <div>
                  <h3 className="font-medium text-primary capitalize">{color.name}</h3>
                  <code className="text-xs text-tertiary mt-1 block">bg-dataviz-{color.name}</code>
                  <code className="text-xs text-tertiary block">text-dataviz-{color.name}</code>
                  <code className="text-xs text-tertiary block">border-dataviz-{color.name}</code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Guidelines</CardTitle>
          <CardDescription>
            Best practices for using the color system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Scoped Variables</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-success-light rounded-lg border border-weak">
                  <h4 className="font-medium text-success-strong mb-2">✅ Do</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Use background colors only as backgrounds</li>
                    <li>• Use text colors only for text and icons</li>
                    <li>• Use border colors only for borders</li>
                    <li>• Use multi-purpose colors anywhere</li>
                  </ul>
                </div>
                <div className="p-4 bg-destructive-light rounded-lg border border-weak">
                  <h4 className="font-medium text-destructive-strong mb-2">❌ Don't</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Use background colors as text</li>
                    <li>• Use text colors as backgrounds</li>
                    <li>• Use border colors as backgrounds</li>
                    <li>• Mix scoped variables incorrectly</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Interactive Elements</h3>
              <div className="p-4 bg-container rounded-lg border border-weak">
                <p className="text-sm text-secondary mb-3">
                  All interactive elements automatically apply hover colors using variables ending with <code className="text-xs bg-flat px-1 rounded">-hover</code>:
                </p>
                <ul className="text-sm text-secondary space-y-1">
                  <li>• <code className="text-xs bg-flat px-1 rounded">bg-brand</code> → <code className="text-xs bg-flat px-1 rounded">bg-brand-hover</code></li>
                  <li>• <code className="text-xs bg-flat px-1 rounded">bg-controls</code> → <code className="text-xs bg-flat px-1 rounded">bg-controls-hover</code></li>
                  <li>• <code className="text-xs bg-flat px-1 rounded">bg-container</code> → <code className="text-xs bg-flat px-1 rounded">bg-container-hover</code></li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Intensity Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Usage by Intensity</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li><strong>Strong:</strong> High contrast text on light backgrounds</li>
                    <li><strong>Base:</strong> Primary actions and important elements</li>
                    <li><strong>Weak:</strong> Subtle backgrounds and secondary elements</li>
                    <li><strong>Light:</strong> Very subtle backgrounds and tertiary elements</li>
                  </ul>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Examples</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Buttons: Use <code className="text-xs bg-flat px-1 rounded">-base</code> variants</li>
                    <li>• Backgrounds: Use <code className="text-xs bg-flat px-1 rounded">-light</code> or <code className="text-xs bg-flat px-1 rounded">-weak</code></li>
                    <li>• Text: Use <code className="text-xs bg-flat px-1 rounded">-strong</code> for contrast</li>
                    <li>• Borders: Use <code className="text-xs bg-flat px-1 rounded">-base</code> or <code className="text-xs bg-flat px-1 rounded">-weak</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 