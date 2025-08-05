import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Textarea } from '../textarea/textarea';
import { Label } from '../label/label';
import { Input } from '../input/input';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A textarea component for multi-line text input with support for different states and sizes. Follows our design system conventions.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the textarea',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the textarea should have interactive hover states',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text for the textarea',
    },
    layout: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: 'Layout direction for label and textarea',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'destructive'],
      description: 'Visual variant of the textarea',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible rows',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story
export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
  },
};

// With label
export const WithLabel: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with a built-in label for better accessibility.',
      },
    },
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
        <Textarea
        label="Small (2 rows)"
          placeholder="Small textarea..."
          rows={2}
        />
      
        <Textarea
        label="Medium (4 rows)"
          placeholder="Medium textarea..."
          rows={4}
        />
      
        <Textarea
        label="Large (8 rows)"
          placeholder="Large textarea..."
          rows={8}
        />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textareas in different sizes using the rows attribute.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
        <Textarea
        label="Normal"
          placeholder="Normal textarea..."
        />
      
        <Textarea
        label="Disabled"
          placeholder="Disabled textarea..."
          disabled
        />
      
        <Textarea
        label="With Value"
          value="This textarea has a pre-filled value that demonstrates how it looks with content."
          rows={3}
        />
      
        <Textarea
        label="Non-Interactive"
          placeholder="No hover effects..."
          interactive={false}
        />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different textarea states including normal, disabled, with value, and non-interactive.',
      },
    },
  },
};

// Form example
export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96 p-6 bg-[var(--background-container)] rounded-[var(--radius-md)] border border-[var(--border-weak)]">
      <h2 className="ui-base-semibold">Contact Form</h2>
      
      <div className="flex flex-col gap-4">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
          />
        
          <Textarea
            label="Message"
            placeholder="Enter your message here..."
            rows={5}
          />
        
          <Textarea
            label="Additional Information (Optional)"
            placeholder="Any additional information you'd like to share..."
            rows={3}
          />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of textareas used in a contact form with other form elements.',
      },
    },
  },
};

// Character count
export const CharacterCount: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const maxLength = 500;
    
    return (
      <div className="flex flex-col gap-2 w-80">
        <Textarea
          label="Bio"
          placeholder="Tell us about yourself..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={4}
          maxLength={maxLength}
        />
        <div className="ui-2xs-regular text-[var(--content-tertiary)] text-right">
          {value.length} / {maxLength} characters
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with character count and maxLength validation.',
      },
    },
  },
};

// Validation states
export const Validation: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
        <Textarea
        label="Valid Input"
          value="This is a valid input"
          rows={3}
        />
      
      <div className="flex flex-col gap-2">
        <Textarea
          label="Invalid Input"
          value="This input has validation errors"
          rows={3}
          variant="destructive"
        />
        <div className="ui-2xs-regular text-red-500">
          This field is required and must be at least 10 characters.
        </div>
      </div>
      
        <Textarea
        label="Required Field"
          placeholder="This field is required..."
          rows={3}
          required
        />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textarea validation states including valid, invalid, and required fields.',
      },
    },
  },
};

// Layout and variants
export const LayoutAndVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <div className="flex flex-col gap-4">
        <h3 className="ui-sm-medium">Vertical Layout (Default)</h3>
        <Textarea
          label="Description"
          placeholder="Vertical layout with label above..."
          rows={3}
        />
      </div>
      
      <div className="flex flex-col gap-4">
        <h3 className="ui-sm-medium">Horizontal Layout</h3>
        <Textarea
          label="Comments"
          layout="horizontal"
          placeholder="Horizontal layout with label on the left..."
          rows={3}
        />
      </div>
      
      <div className="flex flex-col gap-4">
        <h3 className="ui-sm-medium">Variants</h3>
        <Textarea
          label="Success"
          variant="success"
          value="This is a success state"
          rows={2}
        />
        <Textarea
          label="Warning"
          variant="warning"
          value="This is a warning state"
          rows={2}
        />
        <Textarea
          label="Destructive"
          variant="destructive"
          value="This is an error state"
          rows={2}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textarea with different layouts and visual variants.',
      },
    },
  },
}; 