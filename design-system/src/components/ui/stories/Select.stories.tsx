import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator
} from '../select/select';
import { Icon } from '../icon/icon';
import { Label } from '../label/label';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A select component with support for single selection, groups, and custom triggers. Follows our design system conventions.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story
export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

// With groups
export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Citrus</SelectLabel>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="lemon">Lemon</SelectItem>
          <SelectItem value="lime">Lime</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Berries</SelectLabel>
          <SelectItem value="strawberry">Strawberry</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="raspberry">Raspberry</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select with grouped options using SelectGroup and SelectLabel components.',
      },
    },
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Select>
        <SelectTrigger size="sm" className="w-48">
          <SelectValue placeholder="Small select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
      
      <Select>
        <SelectTrigger size="default" className="w-48">
          <SelectValue placeholder="Default select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select components in different sizes: small and default.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Select>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Normal select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
      
      <Select disabled>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Disabled select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select in different states: normal and disabled.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>('');
    
    return (
      <div className="flex flex-col gap-4">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
            <SelectItem value="fr">France</SelectItem>
            <SelectItem value="jp">Japan</SelectItem>
          </SelectContent>
        </Select>
        
        <div className="ui-sm-regular text-[var(--content-tertiary)]">
          Selected: {value || 'None'}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive select with state management. Use the Actions panel to see the change events.',
      },
    },
  },
};

// Form example
export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80 p-6 bg-[var(--background-container)] rounded-[var(--radius-md)] border border-[var(--border-weak)]">
      <h2 className="ui-base-semibold">User Profile</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="country" styleVariant="uppercase">Country</Label>
          <Select>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="mx">Mexico</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="fr">France</SelectItem>
                <SelectItem value="es">Spain</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="language" styleVariant="uppercase">Language</Label>
          <Select>
            <SelectTrigger id="language">
              <SelectValue placeholder="Select your language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
              <SelectItem value="ja">Japanese</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="timezone" styleVariant="uppercase">Timezone</Label>
          <Select>
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select your timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>US Timezones</SelectLabel>
                <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                <SelectItem value="cst">Central Time (CST)</SelectItem>
                <SelectItem value="est">Eastern Time (EST)</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Other</SelectLabel>
                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                <SelectItem value="cet">Central European Time (CET)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of selects used in a user profile form with proper labels and grouping.',
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="design">
          <div className="flex items-center gap-2">
            <Icon className="text-tertiary">build</Icon>
            Design
          </div>
        </SelectItem>
        <SelectItem value="development">
          <div className="flex items-center gap-2">
            <Icon className="text-tertiary">settings</Icon>
            Development
          </div>
        </SelectItem>
        <SelectItem value="marketing">
          <div className="flex items-center gap-2">
            <Icon className="text-tertiary">star</Icon>
            Marketing
          </div>
        </SelectItem>
        <SelectItem value="support">
          <div className="flex items-center gap-2">
            <Icon className="text-tertiary">person</Icon>
            Support
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select with icons in the options for better visual hierarchy.',
      },
    },
  },
}; 