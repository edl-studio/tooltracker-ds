import type { Meta, StoryObj } from '@storybook/react';
import { Combobox, type ComboboxOption } from '../combobox/combobox';
import { useState } from 'react';

const meta: Meta<typeof Combobox> = {
  title: 'UI/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A combobox (autocomplete) component that allows users to select from a list of options with search functionality. Built using Popover and Command components.',
      },
      source: {
        state: 'open',
      },
      componentSubtitle: 'Use combobox when you need searchable select functionality with many options.',
    },
  },
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'Array of options to choose from',
      table: {
        type: { summary: 'ComboboxOption[]' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Currently selected value',
      table: {
        type: { summary: 'string' },
      },
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback when selection changes',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when no option is selected',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Select option...' },
      },
    },
    searchPlaceholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the search input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Search...' },
      },
    },
    emptyMessage: {
      control: { type: 'text' },
      description: 'Message shown when no options match the search',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'No option found.' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the combobox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the combobox',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'w-[200px]' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const frameworks: ComboboxOption[] = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
  { value: "angular", label: "Angular" },
];

const languages: ComboboxOption[] = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "es", label: "Spanish" },
  { value: "pt", label: "Portuguese" },
  { value: "ru", label: "Russian" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "zh", label: "Chinese" },
];

const tools: ComboboxOption[] = [
  { value: "drill", label: "Cordless Drill" },
  { value: "saw", label: "Circular Saw" },
  { value: "hammer", label: "Hammer" },
  { value: "screwdriver", label: "Screwdriver Set" },
  { value: "level", label: "Spirit Level" },
  { value: "wrench", label: "Adjustable Wrench" },
  { value: "pliers", label: "Needle-nose Pliers" },
  { value: "tape", label: "Measuring Tape" },
  { value: "sander", label: "Orbital Sander" },
  { value: "router", label: "Wood Router" },
];

// Base story
export const Default: Story = {
  args: {
    options: frameworks,
    placeholder: "Select framework...",
    searchPlaceholder: "Search frameworks...",
  },
  render: (args) => {
    const [value, setValue] = useState<string>("")
    return (
      <Combobox
        {...args}
        value={value}
        onValueChange={setValue}
      />
    )
  },
};

// Different widths
export const Widths: Story = {
  render: () => {
    const [value1, setValue1] = useState<string>("")
    const [value2, setValue2] = useState<string>("")
    const [value3, setValue3] = useState<string>("")
    
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Combobox
            options={frameworks}
            value={value1}
            onValueChange={setValue1}
            placeholder="Small (150px)"
            width="w-[150px]"
          />
          <Combobox
            options={frameworks}
            value={value2}
            onValueChange={setValue2}
            placeholder="Default (200px)"
            width="w-[200px]"
          />
          <Combobox
            options={frameworks}
            value={value3}
            onValueChange={setValue3}
            placeholder="Large (300px)"
            width="w-[300px]"
          />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Different width options for the combobox component.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => {
    const [value1, setValue1] = useState<string>("next.js")
    const [value2, setValue2] = useState<string>("")
    
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Combobox
            options={frameworks}
            value={value1}
            onValueChange={setValue1}
            placeholder="With selection"
          />
          <Combobox
            options={frameworks}
            value={value2}
            onValueChange={setValue2}
            placeholder="Empty"
          />
          <Combobox
            options={frameworks}
            value=""
            placeholder="Disabled"
            disabled
          />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Different states of the combobox: with selection, empty, and disabled.',
      },
    },
  },
};

// Custom messages
export const CustomMessages: Story = {
  render: () => {
    const [value, setValue] = useState<string>("")
    
    return (
      <div className="flex flex-col gap-4">
        <Combobox
          options={languages}
          value={value}
          onValueChange={setValue}
          placeholder="Choose your language..."
          searchPlaceholder="Type to search languages..."
          emptyMessage="No language found matching your search."
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Customized placeholder and empty state messages.',
      },
    },
  },
};

// With disabled options
export const DisabledOptions: Story = {
  render: () => {
    const [value, setValue] = useState<string>("")
    
    const optionsWithDisabled: ComboboxOption[] = [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue.js", disabled: true },
      { value: "angular", label: "Angular" },
      { value: "svelte", label: "Svelte", disabled: true },
      { value: "solid", label: "SolidJS" },
    ]
    
    return (
      <Combobox
        options={optionsWithDisabled}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework..."
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Some options can be disabled to prevent selection.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState<string>("")
    
    return (
      <div className="flex flex-col gap-4">
        <div>
          <label className="block ui-sm-medium text-primary mb-2">
            Select Tool
          </label>
          <Combobox
            options={tools}
            value={value}
            onValueChange={setValue}
            placeholder="Choose a tool..."
            searchPlaceholder="Search tools..."
            emptyMessage="No tools found."
          />
        </div>
        {value && (
          <div className="p-4 bg-flat rounded-2xs">
            <p className="ui-sm-regular text-secondary">
              Selected: <span className="ui-sm-medium text-primary">{tools.find(t => t.value === value)?.label}</span>
            </p>
          </div>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing selection feedback.',
      },
    },
  },
};

// Design system showcase
export const DesignSystem: Story = {
  render: () => {
    const [framework, setFramework] = useState<string>("")
    const [language, setLanguage] = useState<string>("")
    const [tool, setTool] = useState<string>("")
    
    return (
      <div className="flex flex-col gap-8 p-8">
        <div>
          <h3 className="ui-sm-semibold mb-4">Form Fields</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block label-2xs-medium mb-2">Framework</label>
              <Combobox
                options={frameworks}
                value={framework}
                onValueChange={setFramework}
                placeholder="Select framework..."
              />
            </div>
            <div>
              <label className="block label-2xs-medium mb-2">Language</label>
              <Combobox
                options={languages}
                value={language}
                onValueChange={setLanguage}
                placeholder="Select language..."
              />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="ui-sm-semibold mb-4">Tool Selection</h3>
          <div className="max-w-md">
            <Combobox
              options={tools}
              value={tool}
              onValueChange={setTool}
              placeholder="Choose a tool..."
              searchPlaceholder="Search tools..."
              width="w-full"
            />
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of how comboboxes are used in forms and interfaces.',
      },
    },
  },
};

// Performance example with many options
export const ManyOptions: Story = {
  render: () => {
    const [value, setValue] = useState<string>("")
    
    // Generate many options for performance testing
    const manyOptions: ComboboxOption[] = Array.from({ length: 100 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option ${i + 1}`,
    }))
    
    return (
      <div className="flex flex-col gap-4">
        <Combobox
          options={manyOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Search through 100 options..."
          searchPlaceholder="Type to filter options..."
        />
        {value && (
          <p className="ui-sm-regular text-secondary">
            Selected: {manyOptions.find(o => o.value === value)?.label}
          </p>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Performance test with many options. Search functionality helps users find items quickly.',
      },
    },
  },
}; 