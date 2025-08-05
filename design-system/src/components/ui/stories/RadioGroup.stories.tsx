import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from '../radio/radio-group'

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const defaultOptions = [
  { id: 'option1', label: 'Option 1', value: 'option1' },
  { id: 'option2', label: 'Option 2', value: 'option2' },
  { id: 'option3', label: 'Option 3', value: 'option3' },
]

export const Default: Story = {
  args: {
    options: defaultOptions,
    defaultValue: 'option1',
  },
}

export const Horizontal: Story = {
  args: {
    options: defaultOptions,
    defaultValue: 'option1',
    orientation: 'horizontal',
  },
}

export const WithDisabledOption: Story = {
  args: {
    options: [
      { id: 'option1', label: 'Option 1', value: 'option1' },
      { id: 'option2', label: 'Option 2 (Disabled)', value: 'option2', disabled: true },
      { id: 'option3', label: 'Option 3', value: 'option3' },
    ],
    defaultValue: 'option1',
  },
}

export const AllDisabled: Story = {
  args: {
    options: [
      { id: 'option1', label: 'Option 1 (Disabled)', value: 'option1', disabled: true },
      { id: 'option2', label: 'Option 2 (Disabled)', value: 'option2', disabled: true },
      { id: 'option3', label: 'Option 3 (Disabled)', value: 'option3', disabled: true },
    ],
    defaultValue: 'option1',
  },
}

 