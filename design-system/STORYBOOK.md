# Storybook Design System

This Storybook instance showcases our UI components with comprehensive documentation, interactive examples, and design system guidelines.

## 🚀 Getting Started

### Running Storybook

```bash
# Start Storybook in development mode
npm run storybook

# Build Storybook for production
npm run build-storybook
```

Storybook will be available at `http://localhost:6006`

### Storybook Structure

Our Storybook is organized into the following sections:

#### UI Components (`/ui`)
- **Button** - Interactive buttons with variants, sizes, and states
- **Input** - Form inputs with labels, validation, and layouts
- **Card** - Content containers with headers, actions, and interactive states
- **Icon** - Material Symbols icons with different sizes and weights
- **Checkbox** - Selection controls with states and accessibility
- **Select** - Dropdown selections with groups and custom triggers
- **Label** - Form labels with accessibility support
- **Textarea** - Multi-line text inputs with validation

## 📚 Component Documentation

Each component includes:

### Automatic Documentation (Autodocs)
- **Auto-generated Docs** - Comprehensive documentation automatically generated from component metadata
- **Props Table** - Complete list of all component props with types, defaults, and descriptions
- **Usage Examples** - Interactive examples with live code editing
- **Component Description** - Detailed explanations of component purpose and usage

### Interactive Controls
- **Args Table** - Live editing of component props
- **Controls Panel** - Real-time property adjustments
- **Actions Panel** - Event logging and debugging

### Story Examples
- **Default** - Basic component usage
- **Variants** - Different visual styles
- **States** - Interactive and disabled states
- **Sizes** - Various size options
- **Real-world Examples** - Practical usage scenarios

### Accessibility
- **A11y Panel** - Accessibility testing and guidelines
- **Keyboard Navigation** - Focus management testing
- **Screen Reader Support** - ARIA attributes and labels

## 🎨 Design System Integration

### Typography Classes
All components use our design system typography classes:
- `ui-sm-medium` - Interface text
- `body-sm-regular` - Readable content
- `label-3xs-medium` - Small labels
- `ui-base-semibold` - Headers

### Color Variables
Components use semantic color variables:
- `--background-brand` - Primary actions
- `--background-controls` - Form elements
- `--content-primary` - Main text
- `--border-weak` - Borders and dividers

### Spacing & Layout
Consistent spacing using design system variables:
- `--radius-2xs` - Small radius
- `--radius-md` - Medium radius
- `gap-4` - Standard spacing

## 🔧 Development

### Adding New Components

1. **Create the component** in `src/components/ui/`
2. **Create stories** in `src/components/ui/stories/`
3. **Add documentation** with component descriptions
4. **Include examples** for all variants and states
5. **Test accessibility** with the A11y panel

### Story Structure

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from '../component';

const meta: Meta<typeof Component> = {
  title: 'UI/ComponentName',
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Component description...',
      },
      // Enhanced autodocs configuration
      source: {
        state: 'open',
      },
      componentSubtitle: 'Brief usage guideline...',
    },
  },
  argTypes: {
    // Enhanced prop documentation
    propName: {
      control: { type: 'select' },
      options: ['option1', 'option2'],
      description: 'Detailed prop description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
  },
  tags: ['autodocs'], // Enables automatic documentation
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};

export const Variants: Story = {
  render: () => (
    // Multiple variants example
  ),
  parameters: {
    docs: {
      description: {
        story: 'Description of this story...',
      },
    },
  },
};
```

### Autodocs Configuration

Our Storybook is configured with automatic documentation generation:

```tsx
// .storybook/preview.ts
const preview: Preview = {
  // ... other config
  tags: ['autodocs'], // Enables autodocs for all stories
  parameters: {
    docs: {
      toc: true, // Table of contents
      source: {
        state: 'open', // Show source code by default
      },
    },
  },
};
```

```tsx
// .storybook/main.ts
const config: StorybookConfig = {
  // ... other config
  docs: {
    defaultName: 'Documentation', // Custom name for docs pages
  },
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        csfPluginOptions: null,
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [],
          },
        },
      },
    },
  ],
};
```

### Best Practices

1. **Use Design System Classes** - Always use predefined typography and spacing classes
2. **Include Real Examples** - Show practical usage scenarios
3. **Test Accessibility** - Ensure components work with screen readers
4. **Document Props** - Provide clear descriptions for all props
5. **Show States** - Demonstrate all possible states (normal, disabled, error, etc.)

## 🎯 Usage Guidelines

### Component Selection
- **Buttons** - Use for actions and navigation
- **Inputs** - Use for single-line text input
- **Textareas** - Use for multi-line text input
- **Cards** - Use for content containers and layouts
- **Icons** - Use for visual indicators and actions

### Accessibility
- Always associate labels with form controls
- Use proper ARIA attributes
- Ensure keyboard navigation works
- Test with screen readers

### Responsive Design
- Components adapt to different screen sizes
- Use appropriate spacing and sizing
- Test on various viewport sizes

## 🚀 Deployment

### Building for Production

```bash
# Build Storybook
npm run build-storybook

# The built files will be in the storybook-static directory
```

### Hosting Options
- **Netlify** - Drag and drop the `storybook-static` folder
- **Vercel** - Connect your repository and set build command
- **GitHub Pages** - Push the built files to a gh-pages branch

## 📖 Additional Resources

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [Design System Guidelines](/.cursor/rules/usage-guidelines.mdc)
- [Component API Reference](./src/components/ui/)
- [Design Tokens](./src/lib/globals.css)

## 🤝 Contributing

1. **Follow the existing patterns** in component stories
2. **Test all variants and states** before submitting
3. **Update documentation** when adding new features
4. **Ensure accessibility** compliance
5. **Use design system tokens** consistently

---

For questions or issues, please refer to our design system documentation or create an issue in the repository. 