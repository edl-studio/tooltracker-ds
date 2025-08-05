import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile badge component with multiple variants including outline and dataviz color options. Supports label + icon variants with a fixed SquareIcon. Badges are read-only by default with no hover or click effects. Use the interactive prop to enable hover and click states.',
      },
      source: {
        state: 'open',
      },
      componentSubtitle: 'Use badges to highlight status, categories, or important information. Read-only by default, interactive when needed.',
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'tealDark', 'tealDarkIcon',
        'teal', 'tealIcon',
        'green', 'greenIcon',
        'olive', 'oliveIcon',
        'yellow', 'yellowIcon',
        'orange', 'orangeIcon',
        'redOrange', 'redOrangeIcon',
        'red', 'redIcon'
      ],
      description: 'The visual style variant of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Enable hover and click effects for interactive badges',
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
    children: {
      description: 'The content to display inside the badge',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default outline variant
export const Default: Story = {
  args: {
    children: 'Badge',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default read-only badge with white background and border. No hover or click effects.',
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Default Variant</h3>
        <div className="flex gap-2 items-center">
          <Badge variant="default">Default Badge</Badge>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Dataviz Color Variants</h3>
        <div className="flex gap-2 items-center flex-wrap">
          <Badge variant="tealDark">Teal Dark</Badge>
          <Badge variant="teal">Teal</Badge>
          <Badge variant="green">Green</Badge>
          <Badge variant="olive">Olive</Badge>
          <Badge variant="yellow">Yellow</Badge>
          <Badge variant="orange">Orange</Badge>
          <Badge variant="redOrange">Red Orange</Badge>
          <Badge variant="red">Red</Badge>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Dataviz Color Variants with Icons</h3>
        <div className="flex gap-2 items-center flex-wrap">
          <Badge variant="tealDarkIcon">Teal Dark</Badge>
          <Badge variant="tealIcon">Teal</Badge>
          <Badge variant="greenIcon">Green</Badge>
          <Badge variant="oliveIcon">Olive</Badge>
          <Badge variant="yellowIcon">Yellow</Badge>
          <Badge variant="orangeIcon">Orange</Badge>
          <Badge variant="redOrangeIcon">Red Orange</Badge>
          <Badge variant="redIcon">Red</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All badge variants using dataviz colors with and without icons.',
      },
    },
  },
};

// Icon variants showcase
export const IconVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Tool Categories</h3>
        <div className="flex gap-2 items-center flex-wrap">
          <Badge variant="tealDarkIcon">Power tools</Badge>
          <Badge variant="tealIcon">Hand tools</Badge>
          <Badge variant="greenIcon">Fastening tools</Badge>
          <Badge variant="oliveIcon">Measuring tools</Badge>
          <Badge variant="yellowIcon">Safety tools</Badge>
          <Badge variant="orangeIcon">Cutting tools</Badge>
          <Badge variant="redOrangeIcon">Specialty tools</Badge>
          <Badge variant="redIcon">None</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge variants with the fixed SquareIcon showing tool categories. The icon color uses dataviz colors to distinguish different tool types.',
      },
    },
  },
};

// Read-only vs Interactive comparison
export const ReadOnlyVsInteractive: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Read-Only Badges (Default)</h3>
        <p className="text-secondary mb-4">These badges have no hover or click effects. Perfect for status indicators and labels.</p>
        <div className="flex gap-2 items-center">
          <Badge variant="default">Default</Badge>
          <Badge variant="greenIcon">Success</Badge>
          <Badge variant="redIcon">Error</Badge>
          <Badge variant="tealIcon">Info</Badge>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Interactive Badges</h3>
        <p className="text-secondary mb-4">These badges have hover effects and cursor pointer. Use for clickable elements.</p>
        <div className="flex gap-2 items-center">
          <Badge variant="default" interactive>Clickable</Badge>
          <Badge variant="greenIcon" interactive>Interactive</Badge>
          <Badge variant="redIcon" interactive>Button</Badge>
          <Badge variant="tealIcon" interactive>Link</Badge>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Interactive with asChild</h3>
        <p className="text-secondary mb-4">Using asChild prop with interactive badges for proper semantic elements.</p>
        <div className="flex gap-2 items-center">
          <Badge variant="default" interactive asChild>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Link Badge
            </a>
          </Badge>
          <Badge variant="tealIcon" interactive asChild>
            <button type="button" onClick={() => alert('Badge clicked!')}>
              Button Badge
            </button>
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison between read-only and interactive badges. Read-only badges are perfect for status indicators, while interactive badges are suitable for clickable elements.',
      },
    },
  },
};

// Interactive examples
export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Interactive Badges</h3>
        <div className="flex gap-2 items-center">
          <Badge variant="default" interactive asChild>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Clickable Badge
            </a>
          </Badge>
          <Badge variant="tealIcon" interactive asChild>
            <button type="button" onClick={() => alert('Badge clicked!')}>
              Button Badge
            </button>
          </Badge>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Status Indicators (Read-Only)</h3>
        <div className="flex gap-2 items-center">
          <Badge variant="greenIcon">Online</Badge>
          <Badge variant="yellowIcon">Away</Badge>
          <Badge variant="redIcon">Offline</Badge>
          <Badge variant="oliveIcon">Busy</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive badges using asChild prop and read-only status indicator examples.',
      },
    },
  },
};

// Accessibility examples
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <div>
        <h3 className="ui-sm-semibold mb-4">Accessible Badges</h3>
        <div className="flex gap-2 items-center">
          <Badge variant="greenIcon" role="status" aria-label="Status: Active">
            Active
          </Badge>
          <Badge variant="redIcon" role="status" aria-label="Status: Error">
            Error
          </Badge>
          <Badge variant="default" role="status" aria-label="Category: Development">
            Development
          </Badge>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Screen Reader Support</h3>
        <div className="flex gap-2 items-center">
          <Badge variant="yellowIcon" aria-describedby="warning-desc">
            Warning
          </Badge>
          <span id="warning-desc" className="sr-only">
            This item requires attention
          </span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility examples showing proper ARIA usage and screen reader support.',
      },
    },
  },
}; 