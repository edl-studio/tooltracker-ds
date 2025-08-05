import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Radio, RadioGroup } from '../radio';
import { Label } from '../label';

const meta: Meta<typeof Radio> = {
  title: 'UI/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A radio button component with support for checked and unchecked states. Follows our design system conventions.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'The value of the radio button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is disabled',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story
export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-2">
        <Radio value="option1" id="option1" />
        <Label htmlFor="option1" styleVariant="default">Option 1</Label>
      </div>
    </RadioGroup>
  ),
};

// All states
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <RadioGroup>
          <div className="flex items-center gap-2">
            <Radio value="unchecked" id="unchecked" />
            <Label htmlFor="unchecked" styleVariant="default">Unchecked</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="flex items-center gap-2">
        <RadioGroup defaultValue="checked">
          <div className="flex items-center gap-2">
            <Radio value="checked" id="checked" />
            <Label htmlFor="checked" styleVariant="default">Checked</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="flex items-center gap-2">
        <RadioGroup>
          <div className="flex items-center gap-2">
            <Radio value="disabled" id="disabled" disabled />
            <Label htmlFor="disabled" styleVariant="default">Disabled</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="flex items-center gap-2">
        <RadioGroup defaultValue="disabled-checked">
          <div className="flex items-center gap-2">
            <Radio value="disabled-checked" id="disabled-checked" disabled />
            <Label htmlFor="disabled-checked" styleVariant="default">Disabled Checked</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different radio button states including unchecked, checked, disabled, and disabled checked.',
      },
    },
  },
};



// With labels (grouped)
export const WithLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="ui-sm-medium">Choose your preference</h3>
      <RadioGroup defaultValue="email">
        <div className="flex items-center gap-2">
          <Radio value="email" id="email" />
          <Label htmlFor="email" styleVariant="default">Email notifications</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio value="sms" id="sms" />
          <Label htmlFor="sms" styleVariant="default">SMS notifications</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio value="push" id="push" />
          <Label htmlFor="push" styleVariant="default">Push notifications</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio value="none" id="none" />
          <Label htmlFor="none" styleVariant="default">No notifications</Label>
        </div>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with descriptive labels for better user experience.',
      },
    },
  },
};

// Form example
export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80 p-6 bg-[var(--background-container)] rounded-[var(--radius-md)] border border-[var(--border-color-weak)]">
      <h2 className="ui-base-semibold">User Preferences</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="ui-sm-medium mb-3">Theme</h3>
          <RadioGroup defaultValue="light">
            <div className="flex items-center gap-2">
              <Radio value="light" id="theme-light" />
              <Label htmlFor="theme-light" styleVariant="default">Light theme</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio value="dark" id="theme-dark" />
              <Label htmlFor="theme-dark" styleVariant="default">Dark theme</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio value="system" id="theme-system" />
              <Label htmlFor="theme-system" styleVariant="default">System preference</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <h3 className="ui-sm-medium mb-3">Language</h3>
          <RadioGroup defaultValue="en">
            <div className="flex items-center gap-2">
              <Radio value="en" id="lang-en" />
              <Label htmlFor="lang-en" styleVariant="default">English</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio value="es" id="lang-es" />
              <Label htmlFor="lang-es" styleVariant="default">Spanish</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio value="fr" id="lang-fr" />
              <Label htmlFor="lang-fr" styleVariant="default">French</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <h3 className="ui-sm-medium mb-3">Communication</h3>
          <RadioGroup defaultValue="weekly">
            <div className="flex items-center gap-2">
              <Radio value="daily" id="comm-daily" />
              <Label htmlFor="comm-daily" styleVariant="default">Daily updates</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio value="weekly" id="comm-weekly" />
              <Label htmlFor="comm-weekly" styleVariant="default">Weekly digest</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio value="monthly" id="comm-monthly" />
              <Label htmlFor="comm-monthly" styleVariant="default">Monthly summary</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio value="never" id="comm-never" />
              <Label htmlFor="comm-never" styleVariant="default">Never</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of radio buttons used in a preferences form.',
      },
    },
  },
};

// Interactive
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState('option1');
    
    return (
      <div className="flex flex-col gap-4">
        <h3 className="ui-sm-medium">Choose an option</h3>
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center gap-2">
            <Radio value="option1" id="interactive-1" />
            <Label htmlFor="interactive-1" styleVariant="default">
              Option 1 (click to select)
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio value="option2" id="interactive-2" />
            <Label htmlFor="interactive-2" styleVariant="default">
              Option 2 (click to select)
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio value="option3" id="interactive-3" />
            <Label htmlFor="interactive-3" styleVariant="default">
              Option 3 (click to select)
            </Label>
          </div>
        </RadioGroup>
        
        <div className="ui-sm-regular text-[var(--content-tertiary)]">
          Selected: {value}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive radio buttons with state management. Use the Actions panel to see the change events.',
      },
    },
  },
}; 