import type { Meta, StoryObj } from '@storybook/react'
import { DataList, DataListItem, DataListLabel, DataListValue } from '../data-list/data-list'
import { Badge } from '../badge/badge'
import { Button } from '../button/button'
import { Icon } from '../icon/icon'

const meta: Meta<typeof DataList> = {
  title: 'UI/DataList',
  component: DataList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['1', '2', '3'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    orientation: 'vertical',
    size: '2',
  },
  render: (args) => (
    <DataList {...args}>
      <DataListItem>
        <DataListLabel>Status</DataListLabel>
        <DataListValue>
          <Badge variant="green">Available</Badge>
        </DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>ID</DataListLabel>
        <DataListValue>TOOL-001</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Name</DataListLabel>
        <DataListValue>Rotary Hammer</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Category</DataListLabel>
        <DataListValue>Power Tools</DataListValue>
      </DataListItem>
    </DataList>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    size: '2',
  },
  render: (args) => (
    <DataList {...args}>
      <DataListItem>
        <DataListLabel>Status</DataListLabel>
        <DataListValue>
          <Badge variant="yellow">In Use</Badge>
        </DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>ID</DataListLabel>
        <DataListValue>TOOL-002</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Name</DataListLabel>
        <DataListValue>Impact Driver</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Category</DataListLabel>
        <DataListValue>Power Tools</DataListValue>
      </DataListItem>
    </DataList>
  ),
}



export const ColoredLabels: Story = {
  render: () => (
    <DataList orientation="vertical">
      <DataListItem>
        <DataListLabel color="default">Default</DataListLabel>
        <DataListValue>Default color label</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel color="brand">Brand</DataListLabel>
        <DataListValue>Brand color label</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel color="success">Success</DataListLabel>
        <DataListValue>Success color label</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel color="warning">Warning</DataListLabel>
        <DataListValue>Warning color label</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel color="destructive">Destructive</DataListLabel>
        <DataListValue>Destructive color label</DataListValue>
      </DataListItem>
    </DataList>
  ),
}

export const HighContrast: Story = {
  render: () => (
    <DataList orientation="vertical">
      <DataListItem>
        <DataListLabel color="brand" highContrast>Brand</DataListLabel>
        <DataListValue>High contrast brand label</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel color="success" highContrast>Success</DataListLabel>
        <DataListValue>High contrast success label</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel color="warning" highContrast>Warning</DataListLabel>
        <DataListValue>High contrast warning label</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel color="destructive" highContrast>Destructive</DataListLabel>
        <DataListValue>High contrast destructive label</DataListValue>
      </DataListItem>
    </DataList>
  ),
}

export const WithActions: Story = {
  render: () => (
    <DataList orientation="vertical">
      <DataListItem>
        <DataListLabel>Status</DataListLabel>
        <DataListValue>
          <div className="flex items-center gap-2">
            <Badge variant="green">Available</Badge>
            <Button variant="outline" size="xs" iconLeft="edit">
              Edit
            </Button>
          </div>
        </DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>ID</DataListLabel>
        <DataListValue>
          <div className="flex items-center gap-2">
            <span>TOOL-003</span>
            <Button variant="ghost" size="xs" iconLeft="content_copy">
              Copy
            </Button>
          </div>
        </DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Name</DataListLabel>
        <DataListValue>Circular Saw</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Category</DataListLabel>
        <DataListValue>Power Tools</DataListValue>
      </DataListItem>
    </DataList>
  ),
}

export const ToolDetails: Story = {
  render: () => (
    <DataList orientation="vertical">
      <DataListItem>
        <DataListLabel>Tool Name</DataListLabel>
        <DataListValue>Rotary Hammer</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Serial Number</DataListLabel>
        <DataListValue>23hf230m12084sx</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Manufacturer</DataListLabel>
        <DataListValue>Bosch</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Category</DataListLabel>
        <DataListValue>
          <Badge variant="green">Power Tools</Badge>
        </DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Status</DataListLabel>
        <DataListValue>
          <Badge variant="yellow">In Use</Badge>
        </DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Location</DataListLabel>
        <DataListValue>Site B</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Last Updated</DataListLabel>
        <DataListValue>2024-01-14</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>Assigned To</DataListLabel>
        <DataListValue>Kasper Andersen</DataListValue>
      </DataListItem>
    </DataList>
  ),
} 