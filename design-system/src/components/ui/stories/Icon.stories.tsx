import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../icon/icon';

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Sharp SVG icon component with consistent styling and sizing. Uses our design system colors and supports all standard SVG properties.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'number' },
      description: 'The size of the icon in pixels',
    },
    children: {
      description: 'SVG path elements to render as the icon',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story
export const Default: Story = {
  render: () => (
    <Icon size={24}>check</Icon>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic icon example using MUI icons. This shows a checkmark icon.',
      },
    },
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Icon size={16}>check</Icon>
        <span className="ui-2xs-regular">16px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size={24}>check</Icon>
        <span className="ui-2xs-regular">24px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size={32}>check</Icon>
        <span className="ui-2xs-regular">32px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size={48}>check</Icon>
        <span className="ui-2xs-regular">48px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size={64}>check</Icon>
        <span className="ui-2xs-regular">64px</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons can be sized from 16px to any custom size. Common sizes are 16px, 24px, 32px, and 48px.',
      },
    },
  },
};

// Common icons
export const CommonIcons: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-4 max-w-2xl">
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </Icon>
        <span className="ui-2xs-regular text-center">home</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </Icon>
        <span className="ui-2xs-regular text-center">search</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </Icon>
        <span className="ui-2xs-regular text-center">settings</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </Icon>
        <span className="ui-2xs-regular text-center">person</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </Icon>
        <span className="ui-2xs-regular text-center">notifications</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </Icon>
        <span className="ui-2xs-regular text-center">email</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </Icon>
        <span className="ui-2xs-regular text-center">phone</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </Icon>
        <span className="ui-2xs-regular text-center">location</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </Icon>
        <span className="ui-2xs-regular text-center">calendar</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12,6 12,12 16,14" />
        </Icon>
        <span className="ui-2xs-regular text-center">clock</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </Icon>
        <span className="ui-2xs-regular text-center">edit</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>
          <polyline points="3,6 5,6 21,6" />
          <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </Icon>
        <span className="ui-2xs-regular text-center">delete</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common icons used throughout the application. All icons use sharp SVG styling for consistency.',
      },
    },
  },
};

// Action icons
export const ActionIcons: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-4 max-w-2xl">
      <div className="flex flex-col items-center gap-2">
        <Icon>add</Icon>
        <span className="ui-2xs-regular text-center">add</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>close</Icon>
        <span className="ui-2xs-regular text-center">close</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>check</Icon>
        <span className="ui-2xs-regular text-center">check</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>chevron_right</Icon>
        <span className="ui-2xs-regular text-center">arrow_back</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>chevron_right</Icon>
        <span className="ui-2xs-regular text-center">arrow_forward</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>download</Icon>
        <span className="ui-2xs-regular text-center">download</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>file_download</Icon>
        <span className="ui-2xs-regular text-center">upload</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>share</Icon>
        <span className="ui-2xs-regular text-center">share</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>favorite</Icon>
        <span className="ui-2xs-regular text-center">favorite</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>star</Icon>
        <span className="ui-2xs-regular text-center">star</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>search</Icon>
        <span className="ui-2xs-regular text-center">info</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon>warning</Icon>
        <span className="ui-2xs-regular text-center">warning</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Action icons for common user interactions like add, delete, download, etc.',
      },
    },
  },
};

// Colors
export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Icon className="text-primary">check</Icon>
        <span className="ui-2xs-regular">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon className="text-secondary">check</Icon>
        <span className="ui-2xs-regular">Secondary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon className="text-tertiary">check</Icon>
        <span className="ui-2xs-regular">Tertiary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon className="text-brand">check</Icon>
        <span className="ui-2xs-regular">Brand</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon className="text-destructive-base">check</Icon>
        <span className="ui-2xs-regular">Destructive</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons can use any color from our design system. Use semantic colors for better accessibility.',
      },
    },
  },
};

// Interactive states
export const InteractiveStates: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Icon className="text-primary hover:text-brand transition-colors cursor-pointer">check</Icon>
        <span className="ui-2xs-regular">Hover</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon className="text-tertiary opacity-50">check</Icon>
        <span className="ui-2xs-regular">Disabled</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon className="text-brand animate-pulse">check</Icon>
        <span className="ui-2xs-regular">Loading</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons can have different interactive states like hover, disabled, and loading.',
      },
    },
  },
}; 