import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from '../checkbox';
import { Label } from '../label';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A checkbox component with support for checked, unchecked, and indeterminate states. Follows our design system conventions.',
      },
    },
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is in indeterminate state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },

  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story
export const Default: Story = {
  args: {
    checked: false,
  },
};

// All states
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="unchecked" />
        <Label htmlFor="unchecked" styleVariant="default">Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checked" checked />
        <Label htmlFor="checked" styleVariant="default">Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="indeterminate" indeterminate />
        <Label htmlFor="indeterminate" styleVariant="default">Indeterminate</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled" styleVariant="default">Disabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" checked disabled />
        <Label htmlFor="disabled-checked" styleVariant="default">Disabled Checked</Label>
      </div>

    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All possible checkbox states: unchecked, checked, indeterminate, disabled, and disabled checked.',
      },
    },
  },
};

// With labels
export const WithLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms" checked />
        <Label htmlFor="terms" styleVariant="default">I agree to the terms and conditions</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="newsletter" checked />
        <Label htmlFor="newsletter" styleVariant="default">Subscribe to newsletter</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="notifications" />
        <Label htmlFor="notifications" styleVariant="default">Enable push notifications</Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes with descriptive labels for better user experience.',
      },
    },
  },
};

// Form example
export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80 p-6 bg-[var(--background-container)] rounded-[var(--radius-md)] border border-[var(--border-color-weak)]">
      <h2 className="ui-base-semibold">Preferences</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Checkbox id="email-notifications" checked />
          <Label htmlFor="email-notifications" styleVariant="default">Email notifications</Label>
        </div>
        
        <div className="flex items-center gap-2">
          <Checkbox id="push-notifications" checked />
          <Label htmlFor="push-notifications" styleVariant="default">Push notifications</Label>
        </div>
        
        <div className="flex items-center gap-2">
          <Checkbox id="sms-notifications" checked />
          <Label htmlFor="sms-notifications" styleVariant="default">SMS notifications</Label>
        </div>
        
        <div className="flex items-center gap-2">
          <Checkbox id="marketing-emails" />
          <Label htmlFor="marketing-emails" styleVariant="default">Marketing emails</Label>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of checkboxes used in a preferences form.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const [indeterminate, setIndeterminate] = React.useState(false);
    
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Checkbox 
            id="interactive" 
            checked={checked}
            onCheckedChange={(checked) => setChecked(checked as boolean)}
          />
          <Label htmlFor="interactive" styleVariant="default">
            Interactive checkbox (click to toggle)
          </Label>
        </div>
        
        <div className="flex items-center gap-2">
          <Checkbox 
            id="interactive-indeterminate" 
            indeterminate={indeterminate}
            onCheckedChange={(checked) => {
              if (checked === 'indeterminate') {
                setIndeterminate(true);
              } else {
                setIndeterminate(false);
              }
            }}
          />
          <Label htmlFor="interactive-indeterminate" styleVariant="default">
            Interactive indeterminate checkbox
          </Label>
        </div>
        
        <div className="ui-sm-regular text-[var(--content-tertiary)]">
          Current state: {indeterminate ? 'indeterminate' : checked ? 'checked' : 'unchecked'}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive checkboxes with state management. Use the Actions panel to see the change events.',
      },
    },
  },
};

// Multiple selection
export const MultipleSelection: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
    
    const items = [
      { id: 'item1', label: 'Item 1' },
      { id: 'item2', label: 'Item 2' },
      { id: 'item3', label: 'Item 3' },
      { id: 'item4', label: 'Item 4' },
    ];
    
    const handleItemToggle = (itemId: string) => {
      setSelectedItems(prev => 
        prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    };
    
    const selectAll = () => setSelectedItems(items.map(item => item.id));
    const deselectAll = () => setSelectedItems([]);
    
    return (
      <div className="flex flex-col gap-4 w-80">
        <div className="flex items-center gap-2">
          <Checkbox 
            id="select-all"
            checked={selectedItems.length === items.length}
            indeterminate={selectedItems.length > 0 && selectedItems.length < items.length}
            onCheckedChange={(checked) => {
              if (checked) {
                selectAll();
              } else {
                deselectAll();
              }
            }}
          />
          <Label htmlFor="select-all" styleVariant="default">Select All</Label>
        </div>
        
        <div className="border-t border-[var(--border-color-weak)] pt-4">
          {items.map(item => (
            <div key={item.id} className="flex items-center gap-2 py-1">
              <Checkbox 
                id={item.id}
                checked={selectedItems.includes(item.id)}
                onCheckedChange={() => handleItemToggle(item.id)}
              />
              <Label htmlFor={item.id} styleVariant="default">{item.label}</Label>
            </div>
          ))}
        </div>
        
        <div className="ui-sm-regular text-[var(--content-tertiary)]">
          Selected: {selectedItems.length} of {items.length}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection example with select all functionality and indeterminate state.',
      },
    },
  },
}; 