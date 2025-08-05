import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';

export default function Typography() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Typography</h1>
        <p className="text-lg text-secondary">
          A comprehensive typography system with predefined classes for consistent text styling across the application.
        </p>
      </div>

      {/* Typography Classes */}
      <Card>
        <CardHeader>
          <CardTitle>Typography Classes</CardTitle>
          <CardDescription>
            Predefined typography classes that should be used instead of utility classes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Labels */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Labels (Uppercase)</h3>
              <div className="space-y-4">
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="flex items-center justify-between mb-2">
                    <span className="label-3xs-medium">FIELD LABEL</span>
                    <code className="text-xs text-tertiary">.label-3xs-medium</code>
                  </div>
                  <p className="text-sm text-secondary">11px, Medium weight, Uppercase, Tight line height</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="flex items-center justify-between mb-2">
                    <span className="label-2xs-medium">SECTION HEADER</span>
                    <code className="text-xs text-tertiary">.label-2xs-medium</code>
                  </div>
                  <p className="text-sm text-secondary">12px, Medium weight, Uppercase, Tight line height</p>
                </div>
              </div>
            </div>

            {/* UI Text */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">UI Text (Tight Line Height)</h3>
              <div className="space-y-4">
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="flex items-center justify-between mb-2">
                    <span className="ui-2xs-regular">Regular UI text</span>
                    <code className="text-xs text-tertiary">.ui-2xs-regular</code>
                  </div>
                  <p className="text-sm text-secondary">12px, Regular weight, Tight line height</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="flex items-center justify-between mb-2">
                    <span className="ui-2xs-medium">Medium UI text</span>
                    <code className="text-xs text-tertiary">.ui-2xs-medium</code>
                  </div>
                  <p className="text-sm text-secondary">12px, Medium weight, Tight line height</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="flex items-center justify-between mb-2">
                    <span className="ui-xs-medium">Medium UI text</span>
                    <code className="text-xs text-tertiary">.ui-xs-medium</code>
                  </div>
                  <p className="text-sm text-secondary">13px, Medium weight, Tight line height</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="flex items-center justify-between mb-2">
                    <span className="ui-sm-regular">Regular UI text</span>
                    <code className="text-xs text-tertiary">.ui-sm-regular</code>
                  </div>
                  <p className="text-sm text-secondary">14px, Regular weight, Tight line height</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="flex items-center justify-between mb-2">
                    <span className="ui-sm-medium">Medium UI text</span>
                    <code className="text-xs text-tertiary">.ui-sm-medium</code>
                  </div>
                  <p className="text-sm text-secondary">14px, Medium weight, Tight line height</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="flex items-center justify-between mb-2">
                    <span className="ui-base-medium">Medium UI text</span>
                    <code className="text-xs text-tertiary">.ui-base-medium</code>
                  </div>
                  <p className="text-sm text-secondary">16px, Medium weight, Tight line height</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="flex items-center justify-between mb-2">
                    <span className="ui-base-semibold">Semibold UI text</span>
                    <code className="text-xs text-tertiary">.ui-base-semibold</code>
                  </div>
                  <p className="text-sm text-secondary">16px, Semibold weight, Tight line height</p>
                </div>
              </div>
            </div>

            {/* Body Text */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Body Text (Readable Line Height)</h3>
              <div className="space-y-4">
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="mb-2">
                    <code className="text-xs text-tertiary">.body-2xs-regular</code>
                  </div>
                  <p className="body-2xs-regular text-secondary">
                    This is body text in regular weight. Perfect for longer content that needs to be easy to read with comfortable line spacing.
                  </p>
                  <p className="text-sm text-secondary mt-2">12px, Regular weight, Readable line height</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="mb-2">
                    <code className="text-xs text-tertiary">.body-xs-regular</code>
                  </div>
                  <p className="body-xs-regular text-secondary">
                    This is body text in regular weight. Perfect for longer content that needs to be easy to read.
                  </p>
                  <p className="text-sm text-secondary mt-2">13px, Regular weight, Readable line height</p>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <div className="mb-2">
                    <code className="text-xs text-tertiary">.body-sm-regular</code>
                  </div>
                  <p className="body-sm-regular text-secondary">
                    This is body text in regular weight. Ideal for main content areas with proper line spacing for readability.
                  </p>
                  <p className="text-sm text-secondary mt-2">14px, Regular weight, Readable line height</p>
                </div>
              </div>
            </div>

            {/* Display Text */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Display Text</h3>
              <div className="p-4 bg-container rounded-lg border border-weak">
                <div className="mb-2">
                  <code className="text-xs text-tertiary">.display-lg</code>
                </div>
                <h1 className="display-lg text-primary">Display Heading</h1>
                <p className="text-sm text-secondary mt-2">18px, Semibold weight, Poppins font, Tight line height</p>
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
            Best practices for using the typography system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">When to Use Each Class</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-success-light rounded-lg border border-weak">
                  <h4 className="font-medium text-success-strong mb-2">✅ Do</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Use <code className="text-xs bg-flat px-1 rounded">.label-*</code> for table headers, form labels</li>
                    <li>• Use <code className="text-xs bg-flat px-1 rounded">.ui-*</code> for buttons, navigation, interface text</li>
                    <li>• Use <code className="text-xs bg-flat px-1 rounded">.body-*</code> for readable content</li>
                    <li>• Use <code className="text-xs bg-flat px-1 rounded">.display-*</code> for headings</li>
                  </ul>
                </div>
                <div className="p-4 bg-destructive-light rounded-lg border border-weak">
                  <h4 className="font-medium text-destructive-strong mb-2">❌ Don't</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Recreate typography with utility classes</li>
                    <li>• Mix different typography systems</li>
                    <li>• Override typography class properties</li>
                    <li>• Use inline styles for text styling</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Examples</h3>
              <div className="space-y-4">
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Table Headers</h4>
                  <div className="flex items-center gap-4">
                    <span className="label-2xs-medium">NAME</span>
                    <span className="label-2xs-medium">STATUS</span>
                    <span className="label-2xs-medium">ACTIONS</span>
                  </div>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Button Text</h4>
                  <div className="flex items-center gap-4">
                    <span className="ui-sm-medium">Save Changes</span>
                    <span className="ui-sm-medium">Cancel</span>
                  </div>
                </div>
                <div className="p-4 bg-container rounded-lg border border-weak">
                  <h4 className="font-medium text-primary mb-2">Content Text</h4>
                  <p className="body-sm-regular text-secondary">
                    This is the main content area using body text with proper line height for optimal readability.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Font Stack</h3>
              <div className="p-4 bg-container rounded-lg border border-weak">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Primary Font</h4>
                    <p className="text-sm text-secondary">Satoshi Regular for all UI elements</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Display Font</h4>
                    <p className="text-sm text-secondary">Poppins for headings and display text</p>
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
            How to use typography classes in your components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-flat rounded-lg">
              <h4 className="font-medium text-primary mb-2">✅ Correct Usage</h4>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Use predefined typography classes
<span className="label-2xs-medium">CATEGORY</span>
<span className="ui-sm-medium">Button Text</span>
<p className="body-sm-regular">Readable content</p>
<h1 className="display-lg">Page Title</h1>`}</code>
              </pre>
            </div>
            <div className="p-4 bg-flat rounded-lg">
              <h4 className="font-medium text-primary mb-2">❌ Avoid This</h4>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Don't recreate typography with utilities
<span className="text-xs font-medium text-[var(--tertiary)] uppercase tracking-[0.24px] leading-none">
  CATEGORY
</span>
<span className="text-sm font-medium">Button Text</span>
<p className="text-sm leading-[1.4]">Readable content</p>`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 