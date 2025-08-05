import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../button/icon-button';

const meta: Meta<typeof IconButton> = {
  title: 'UI/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A specialized button component designed specifically for icon-only interactions. Provides better semantics and accessibility for icon buttons.',
      },
      source: {
        state: 'open',
      },
      componentSubtitle: 'Use IconButton for icon-only actions like settings, edit, delete, etc.',
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'ghost', 'destructive'],
      description: 'The visual style variant of the icon button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outline' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm'],
      description: 'The size of the icon button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the icon button is disabled',
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
    icon: {
      control: { type: 'text' },
      description: 'The icon to display (MUI icon name or React element)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the icon button is in a loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    'aria-label': {
      control: { type: 'text' },
      description: 'Accessible label for the icon button (required for accessibility)',
      table: {
        type: { summary: 'string' },
      },
    },
    'aria-describedby': {
      control: { type: 'text' },
      description: 'ID of element that describes the icon button',
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
    icon: 'settings',
    'aria-label': 'Settings',
    variant: 'outline',
    size: 'sm',
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <IconButton icon="star" variant="primary" aria-label="Favorite" />
        <IconButton icon="edit" variant="outline" aria-label="Edit" />
        <IconButton icon="more_vert" variant="ghost" aria-label="More options" />
        <IconButton icon="delete" variant="destructive" aria-label="Delete" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available IconButton variants. Each variant has different styling and use cases.',
      },
    },
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <IconButton icon="settings" size="xs" aria-label="Settings" />
        <IconButton icon="settings" size="sm" aria-label="Settings" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different IconButton sizes available. xs is 24px, sm is 32px.',
      },
    },
  },
};

// Loading states
export const Loading: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Loading States</h3>
        <p className="body-sm-regular text-secondary mb-4">
          Use the <code>loading</code> prop to display a loading spinner. The button will be disabled while loading.
        </p>
        <div className="flex gap-4 items-center">
          <IconButton icon="save" loading aria-label="Saving" />
          <IconButton icon="refresh" variant="outline" loading aria-label="Refreshing" />
          <IconButton icon="download" variant="ghost" loading aria-label="Downloading" />
          <IconButton icon="close" variant="destructive" loading aria-label="Closing" />
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Different Sizes</h3>
        <div className="flex gap-4 items-center">
          <IconButton icon="settings" size="xs" loading aria-label="Loading settings" />
          <IconButton icon="settings" size="sm" loading aria-label="Loading settings" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'IconButton loading states using the Spinner component. The spinner automatically adapts to the button variant and size.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <IconButton icon="settings" aria-label="Settings" />
        <IconButton icon="settings" disabled aria-label="Settings" />
      </div>
      <div className="flex gap-4 items-center">
        <IconButton icon="edit" variant="outline" aria-label="Edit" />
        <IconButton icon="edit" variant="outline" disabled aria-label="Edit" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'IconButton states including normal and disabled. Disabled buttons are non-interactive and have reduced opacity.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <IconButton 
          icon="settings" 
          onClick={() => alert('Settings clicked!')}
          aria-label="Settings"
        />
        <IconButton 
          icon="edit" 
          variant="outline" 
          onClick={() => console.log('Edit clicked')}
          aria-label="Edit"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive IconButtons with click handlers. Use the Actions panel to see the click events.',
      },
    },
  },
};

// Design system showcase
export const DesignSystem: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Toolbar Actions</h3>
        <div className="flex gap-2 items-center">
          <IconButton icon="folder" variant="ghost" aria-label="Open folder" />
          <IconButton icon="edit" variant="ghost" aria-label="Edit" />
          <IconButton icon="settings" variant="ghost" aria-label="Settings" />
          <IconButton icon="more_vert" variant="ghost" aria-label="More options" />
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Data Table Actions</h3>
        <div className="flex gap-2 items-center">
          <IconButton icon="visibility" variant="ghost" size="xs" aria-label="View details" />
          <IconButton icon="edit" variant="ghost" size="xs" aria-label="Edit" />
          <IconButton icon="delete" variant="ghost" size="xs" aria-label="Delete" />
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Form Actions</h3>
        <div className="flex gap-2 items-center">
          <IconButton icon="check" variant="primary" aria-label="Save" />
          <IconButton icon="close" variant="outline" aria-label="Cancel" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of how IconButtons are used in different contexts within our design system.',
      },
    },
  },
};

// Accessibility
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Proper ARIA Labels</h3>
        <div className="flex gap-4 items-center">
          <IconButton 
            icon="settings" 
            aria-label="Settings"
          />
          <IconButton 
            icon="edit" 
            aria-label="Edit document"
          />
          <IconButton 
            icon="delete" 
            aria-label="Delete item"
          />
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Toggle Buttons</h3>
        <div className="flex gap-4 items-center">
          <IconButton 
            icon="notifications" 
            variant="ghost"
            aria-pressed="false"
            aria-label="Toggle notifications"
          />
          <IconButton 
            icon="notifications" 
            variant="ghost"
            aria-pressed="true"
            aria-label="Toggle notifications"
          />
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Buttons with Descriptions</h3>
        <div className="flex gap-4 items-center">
          <IconButton 
            icon="delete" 
            variant="destructive"
            aria-describedby="delete-description"
            aria-label="Delete account"
          />
          <p id="delete-description" className="text-sm text-gray-600">
            This action cannot be undone.
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility examples showing proper ARIA usage, toggle states, and screen reader support. All IconButtons require aria-label for accessibility.',
      },
    },
  },
}; 