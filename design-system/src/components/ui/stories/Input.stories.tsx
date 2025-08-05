import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../input/input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with support for labels, different layouts, and interactive states. Follows our design system conventions.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The HTML input type',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text for the input',
    },
    layout: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: 'Layout direction for label and input',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the input should have interactive hover states',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
};

// With label
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

// Different layouts
export const Layouts: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-96">
      <div>
        <h3 className="ui-sm-semibold mb-4">Vertical Layout (Default)</h3>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
        />
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Horizontal Layout</h3>
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          layout="horizontal"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input supports both vertical (default) and horizontal layouts for the label and input field.',
      },
    },
  },
};

// Different input types
export const InputTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input
        label="Text"
        placeholder="Enter text"
        type="text"
      />
      <Input
        label="Email"
        placeholder="Enter email"
        type="email"
      />
      <Input
        label="Password"
        placeholder="Enter password"
        type="password"
      />
      <Input
        label="Number"
        placeholder="Enter number"
        type="number"
      />
      <Input
        label="Phone"
        placeholder="Enter phone number"
        type="tel"
      />
      <Input
        label="URL"
        placeholder="Enter URL"
        type="url"
      />
      <Input
        label="Search"
        placeholder="Search..."
        type="search"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different HTML input types with appropriate placeholders and validation.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input
        label="Normal"
        placeholder="Normal input"
        type="text"
      />
      <Input
        label="Disabled"
        placeholder="Disabled input"
        type="text"
        disabled
      />
      <Input
        label="Required"
        placeholder="Required input"
        type="text"
        required
      />
      <Input
        label="With Value"
        value="Pre-filled value"
        type="text"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input states including normal, disabled, required, and pre-filled.',
      },
    },
  },
};

// Interactive states
export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input
        label="Interactive (Default)"
        placeholder="Hover and focus me"
        type="text"
        interactive={true}
      />
      <Input
        label="Non-Interactive"
        placeholder="No hover effects"
        type="text"
        interactive={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive inputs have hover states and smooth transitions. Non-interactive inputs maintain static styling.',
      },
    },
  },
};

// Form example
export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96 p-6 bg-[var(--background-container)] rounded-[var(--radius-md)] border border-[var(--border-weak)]">
      <h2 className="ui-base-semibold">Contact Form</h2>
      
      <Input
        label="Full Name"
        placeholder="Enter your full name"
        type="text"
        required
      />
      
      <Input
        label="Email Address"
        placeholder="Enter your email"
        type="email"
        required
      />
      
      <Input
        label="Phone Number"
        placeholder="Enter your phone number"
        type="tel"
      />
      
      <Input
        label="Company"
        placeholder="Enter your company name"
        type="text"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of inputs used in a contact form with proper labels and validation.',
      },
    },
  },
};

// Validation states
export const Validation: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input
        label="Valid Email"
        value="user@example.com"
        type="email"
        required
      />
      <Input
        label="Invalid Email"
        value="invalid-email"
        type="email"
        required
        aria-invalid="true"
      />
      <Input
        label="Required Field"
        placeholder="This field is required"
        type="text"
        required
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input validation states. Use aria-invalid for invalid states and required for required fields.',
      },
    },
  },
}; 