import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';
import { Icon } from '../';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes. Supports icons, different states, and follows our design system conventions.',
      },
      // Enhanced autodocs configuration
      source: {
        state: 'open',
      },
      // Component usage guidelines
      componentSubtitle: 'Use buttons to trigger actions or navigate to different pages.',
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'ghost', 'link', 'destructive'],
      description: 'The visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
      description: 'The size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Render as a different element using Radix Slot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconLeft: {
      control: { type: 'text' },
      description: 'The icon to display on the left side (MUI icon name or SVG path). Automatically shows the icon when provided.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    iconRight: {
      control: { type: 'text' },
      description: 'The icon to display on the right side (MUI icon name or SVG path). Automatically shows the icon when provided.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    children: {
      description: 'The content to display inside the button',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in a loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    'aria-label': {
      control: { type: 'text' },
      description: 'Accessible label for the button (required for icon-only buttons)',
      table: {
        type: { summary: 'string' },
      },
    },
    'aria-describedby': {
      control: { type: 'text' },
      description: 'ID of element that describes the button',
      table: {
        type: { summary: 'string' },
      },
    },
    'aria-pressed': {
      control: { type: 'select' },
      options: ['true', 'false', 'mixed', undefined],
      description: 'Indicates the current pressed state of a toggle button',
      table: {
        type: { summary: 'boolean | "mixed" | undefined' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'default',
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button variant="primary">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="destructive">Destructive</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants. Each variant has different styling and use cases.',
      },
    },
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different button sizes available for text and icon combinations.',
      },
    },
  },
};

// Icon-only buttons using Button component
export const IconOnlyButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Icon-Only Buttons with Button Component</h3>
        <p className="body-sm-regular text-secondary mb-4">
          For icon-only buttons, use the IconButton component instead. This example shows how Button can be used with icons.
        </p>
        <div className="flex gap-4 items-center">
          <Button variant="ghost" size="sm">
            <Icon>settings</Icon>
          </Button>
          <Button variant="outline" size="sm">
            <Icon>edit</Icon>
          </Button>
          <Button variant="ghost" size="sm">
            <Icon>delete</Icon>
          </Button>
          <Button variant="destructive" size="sm">
            <Icon>close</Icon>
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Loading States</h3>
        <div className="flex gap-4 items-center">
          <Button loading variant="ghost" size="sm">
            <Icon>save</Icon>
          </Button>
          <Button loading variant="outline" size="sm">
            <Icon>refresh</Icon>
          </Button>
          <Button loading variant="ghost" size="sm">
            <Icon>download</Icon>
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons using the Button component. For better semantics and accessibility, use the IconButton component for icon-only interactions.',
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button iconLeft="add">
          Add Item
        </Button>
        <Button variant="outline" iconRight="file_download">
          Download
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Icon>
            settings
          </Icon>
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can include icons from our Material Symbols icon set. Icons automatically size and align properly. Follows the Icon + Label Padding Principle.',
      },
    },
  },
};

// Utility variants
export const UtilityVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button variant="destructive">Delete Account</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="destructive" disabled>Delete Account</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Destructive variant for dangerous actions that require caution.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="outline">Normal</Button>
        <Button variant="outline" disabled>Disabled</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button states including normal and disabled. Disabled buttons are non-interactive and have reduced opacity.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button onClick={() => alert('Button clicked!')}>
          Click Me
        </Button>
        <Button variant="outline" onClick={() => console.log('Outline button clicked')}>
          Log to Console
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive buttons with click handlers. Use the Actions panel to see the click events.',
      },
    },
  },
};

// Design system showcase
export const DesignSystem: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Primary Actions</h3>
        <div className="flex gap-4 items-center">
          <Button>Save Changes</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Form Actions</h3>
        <div className="flex gap-4 items-center">
          <Button iconLeft="check">
            Submit
          </Button>
          <Button variant="outline" iconRight="close">
            Cancel
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Toolbar Actions</h3>
        <div className="flex gap-2 items-center">
          <Button size="sm" variant="ghost">
            <Icon>
              folder
            </Icon>
          </Button>
          <Button size="sm" variant="ghost">
            <Icon>
              edit
            </Icon>
          </Button>
          <Button size="sm" variant="ghost">
            <Icon>
              settings
            </Icon>
          </Button>
          <Button size="sm" variant="ghost">
            <Icon>
              more_vert
            </Icon>
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of how buttons are used in different contexts within our design system.',
      },
    },
  },
};

// Icon management with boolean props
export const IconManagement: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Icon Management - Simple API</h3>
        <div className="flex gap-4 items-center">
          <Button iconLeft="add">
            Add Item
          </Button>
          <Button 
            variant="outline"
            iconRight="file_download"
          >
            Download
          </Button>
          <Button 
            variant="ghost"
            iconLeft="settings"
            iconRight="chevron_right"
          >
            Configure
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Single Icons</h3>
        <div className="flex gap-4 items-center">
          <Button>
            No Icons
          </Button>
          <Button iconLeft="check">
            Left Icon Only
          </Button>
          <Button iconRight="close">
            Right Icon Only
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Different Variants with Icons</h3>
        <div className="flex gap-4 items-center">
          <Button 
            variant="primary"
            iconLeft="star"
          >
            Favorite
          </Button>
          <Button 
            variant="destructive"
            iconRight="delete"
          >
            Delete
          </Button>
          <Button 
            variant="link"
            iconRight="chevron_right"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple icon management: just provide iconLeft or iconRight props with the icon name. The component automatically applies the correct padding and shows the icon.',
      },
    },
  },
};

// Loading states with spinner
export const Loading: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Loading States</h3>
        <p className="body-sm-regular text-secondary mb-4">
          Use the <code>loading</code> prop to display a loading spinner in place of button content, preserving the original size of the button in its normal state. The button will be disabled while loading.
        </p>
        <div className="flex gap-4 items-center">
          <Button loading variant="primary">
            Bookmark
          </Button>
          <Button loading variant="outline">
            Bookmark
          </Button>
          <Button loading variant="ghost">
            Bookmark
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Different Sizes</h3>
        <p className="body-sm-regular text-secondary mb-4">
          Loading state preserves the original button size across all size variants.
        </p>
        <div className="flex gap-4 items-center">
          <Button size="sm" loading>
            Small
          </Button>
          <Button loading>
            Default
          </Button>
          <Button size="lg" loading>
            Large
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button loading states using the new Spinner component. The spinner automatically adapts to the button variant and size, replacing all content while preserving the original button dimensions.',
      },
    },
  },
};

export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Icon-Only Buttons with ARIA Labels</h3>
        <div className="flex gap-4 items-center">
          <Button 
            size="sm" 
            variant="ghost"
            aria-label="Settings"
          >
            <Icon>settings</Icon>
          </Button>
          <Button 
            size="sm" 
            variant="ghost"
            aria-label="Edit document"
          >
            <Icon>edit</Icon>
          </Button>
          <Button 
            size="sm" 
            variant="ghost"
            aria-label="Delete item"
          >
            <Icon>delete</Icon>
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Loading States</h3>
        <div className="flex gap-4 items-center">
          <Button loading>
            Loading...
          </Button>
          <Button variant="outline" loading>
            Processing
          </Button>
          <Button 
            size="sm" 
            variant="ghost"
            loading
            aria-label="Loading settings"
          >
            <Icon>settings</Icon>
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Toggle Buttons</h3>
        <div className="flex gap-4 items-center">
          <Button 
            variant="ghost"
            aria-pressed="false"
            aria-label="Toggle notifications"
          >
            <Icon>notifications</Icon>
            Notifications
          </Button>
          <Button 
            variant="ghost"
            aria-pressed="true"
            aria-label="Toggle notifications"
          >
            <Icon>notifications</Icon>
            Notifications
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Buttons with Descriptions</h3>
        <div className="flex gap-4 items-center">
          <Button 
            aria-describedby="delete-description"
            variant="destructive"
          >
            Delete Account
          </Button>
          <p id="delete-description" className="text-sm text-gray-600">
            This action cannot be undone. All your data will be permanently deleted.
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility examples showing proper ARIA usage, loading states, and screen reader support. Icon-only buttons automatically get aria-labels, and loading states include aria-busy.',
      },
    },
  },
}; 