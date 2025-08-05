import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../label/label';
import { Input } from '../input/input';
import { Checkbox } from '../checkbox/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select/select';
import { Textarea } from '../textarea/textarea';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A label component for form elements with proper accessibility support. Follows our design system conventions.',
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'The label text content',
    },
    styleVariant: {
      control: { type: 'select' },
      options: ['default', 'uppercase'],
      description: 'The style variant of the label',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'destructive'],
      description: 'The color variant of the label',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story
export const Default: Story = {
  args: {
    children: 'Label Text',
  },
};

// With input
export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label properly associated with an input field using the htmlFor attribute.',
      },
    },
  },
};

// With checkbox
export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" styleVariant="default">I agree to the terms and conditions</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label associated with a checkbox using the default style variant (body-sm-regular with text-primary).',
      },
    },
  },
};

// Multiple form elements
export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80 p-6 bg-[var(--background-container)] rounded-[var(--radius-md)] border border-[var(--border-weak)]">
      <h2 className="ui-base-semibold">Contact Form</h2>
      
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" styleVariant="uppercase">Full Name</Label>
        <Input id="name" type="text" placeholder="Enter your full name" />
      </div>
      
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" styleVariant="uppercase">Email Address</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone" styleVariant="uppercase">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="Enter your phone number" />
      </div>
      
      <div className="flex items-center gap-2">
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter" styleVariant="default">Subscribe to newsletter</Label>
      </div>
      
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" styleVariant="default">I agree to the terms and conditions</Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of labels used in a contact form with various form elements.',
      },
    },
  },
};

// Required fields
export const RequiredFields: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex flex-col gap-2">
        <Label htmlFor="required-name" styleVariant="uppercase">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input id="required-name" type="text" required />
      </div>
      
      <div className="flex flex-col gap-2">
        <Label htmlFor="required-email" styleVariant="uppercase">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <Input id="required-email" type="email" required />
      </div>
      
      <div className="flex flex-col gap-2">
        <Label htmlFor="optional-phone" styleVariant="uppercase">Phone Number (Optional)</Label>
        <Input id="optional-phone" type="tel" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Labels with required field indicators and optional field clarifications.',
      },
    },
  },
};

// Style variants
export const StyleVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-80">
      <div className="flex flex-col gap-4">
        <h3 className="ui-sm-semibold">Usage Rules</h3>
        <div className="ui-sm-regular text-secondary bg-[var(--background-container)] p-4 rounded-[var(--radius-xs)] border border-[var(--border-weak)]">
          <p className="mb-2"><strong>Uppercase labels</strong> are used for:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Input fields (text, email, password, etc.)</li>
            <li>Select dropdowns</li>
            <li>Textarea fields</li>
          </ul>
          <p className="mt-3 mb-2"><strong>Default labels</strong> are used for:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Checkboxes</li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <h3 className="ui-sm-semibold">Input Fields (Uppercase)</h3>
        
        <div className="flex flex-col gap-2">
          <Label htmlFor="text-input" styleVariant="uppercase">
            Text Input
          </Label>
          <Input id="text-input" placeholder="Enter text" />
        </div>
        
        <div className="flex flex-col gap-2">
          <Label htmlFor="email-input" styleVariant="uppercase">
            Email Address
          </Label>
          <Input id="email-input" type="email" placeholder="Enter email" />
        </div>
        
        <div className="flex flex-col gap-2">
          <Label htmlFor="select-input" styleVariant="uppercase">
            Select Option
          </Label>
          <Select>
            <SelectTrigger id="select-input" className="w-full">
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex flex-col gap-2">
          <Label htmlFor="textarea-input" styleVariant="uppercase">
            Description
          </Label>
          <Textarea id="textarea-input" placeholder="Enter your description" />
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <h3 className="ui-sm-semibold">Interactive Elements (Default)</h3>
        
        <div className="flex items-center gap-2">
          <Checkbox id="checkbox1" />
          <Label htmlFor="checkbox1" styleVariant="default">
            I agree to the terms and conditions
          </Label>
        </div>
        
        <div className="flex items-center gap-2">
          <Checkbox id="checkbox2" />
          <Label htmlFor="checkbox2" styleVariant="default">
            Subscribe to newsletter
          </Label>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Labels with different style variants following our usage rules: uppercase for inputs/selects, default for checkboxes/radio buttons.',
      },
    },
  },
};

// Accessibility example
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <div>
        <h3 className="ui-sm-semibold mb-4">Proper Label Association</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="accessible-input" styleVariant="uppercase">Accessible Input</Label>
            <Input id="accessible-input" aria-describedby="input-help" />
            <div id="input-help" className="ui-2xs-regular text-[var(--content-tertiary)]">
              This input has proper label association and help text.
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Checkbox id="accessible-checkbox" aria-describedby="checkbox-help" />
            <Label htmlFor="accessible-checkbox" styleVariant="default">Accessible Checkbox</Label>
            <div id="checkbox-help" className="ui-2xs-regular text-[var(--content-tertiary)]">
              This checkbox has proper label association and help text.
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="ui-sm-semibold mb-4">Screen Reader Support</h3>
        <div className="flex flex-col gap-2">
          <Label htmlFor="sr-input" aria-label="Screen reader only label">
            <span className="sr-only">Screen reader only label</span>
            Visible Label
          </Label>
          <Input id="sr-input" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of proper accessibility practices including label association, help text, and screen reader support.',
      },
    },
  },
}; 