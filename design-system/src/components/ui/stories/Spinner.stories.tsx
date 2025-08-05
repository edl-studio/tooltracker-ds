import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '../spinner/spinner'

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A loading spinner component with multiple size and color variants. Follows our design system conventions.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size variant of the spinner',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'brand', 'success', 'warning', 'destructive'],
      description: 'Color variant of the spinner',
    },
    visible: {
      control: { type: 'boolean' },
      description: 'Whether the spinner is visible',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xs" />
        <span className="text-xs text-secondary">XS</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-secondary">SM</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-xs text-secondary">MD</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-secondary">LG</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-secondary">XL</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available size variants of the spinner component.',
      },
    },
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="default" />
        <span className="text-xs text-secondary">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="brand" />
        <span className="text-xs text-secondary">Brand</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="success" />
        <span className="text-xs text-secondary">Success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="warning" />
        <span className="text-xs text-secondary">Warning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="destructive" />
        <span className="text-xs text-secondary">Destructive</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available color variants of the spinner component.',
      },
    },
  },
}

export const InContext: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Spinner size="sm" />
        <span className="text-sm">Loading data...</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Spinner size="sm" variant="success" />
        <span className="text-sm text-success-base">Processing...</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Spinner size="sm" variant="warning" />
        <span className="text-sm text-warning-base">Validating...</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Spinner size="sm" variant="destructive" />
        <span className="text-sm text-destructive-base">Error occurred...</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Spinner component used in different contexts with appropriate messaging.',
      },
    },
  },
}

export const ButtonSpinner: Story = {
  render: () => (
    <div className="space-y-4">
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-primary-inverse rounded-2xs">
        <Spinner size="sm" variant="brand" />
        Loading...
      </button>
      
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-success-base text-white rounded-2xs">
        <Spinner size="sm" variant="success" />
        Saving...
      </button>
      
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-destructive-base text-white rounded-2xs">
        <Spinner size="sm" variant="destructive" />
        Deleting...
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Spinner component integrated into buttons for loading states.',
      },
    },
  },
}

export const Hidden: Story = {
  args: {
    visible: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Spinner component when visible prop is set to false.',
      },
    },
  },
} 