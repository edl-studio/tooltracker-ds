import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../button/button"
import { Popover, PopoverContent, PopoverTrigger } from "../popover/popover"

const meta = {
  title: "UI/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4">
          <h4 className="body-sm-medium mb-2">Popover Content</h4>
          <p className="body-sm-regular text-secondary">This is a basic popover example.</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const WithCustomWidth: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Custom Width</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="p-4">
          <h4 className="body-sm-medium mb-2">Wide Popover</h4>
          <p className="body-sm-regular text-secondary">This popover has a custom width of 24rem (w-96).</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const WithAlignment: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button>Start Aligned</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <div className="p-4">
            <p className="body-sm-regular text-secondary">Aligned to the start.</p>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Center Aligned</Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <div className="p-4">
            <p className="body-sm-regular text-secondary">Aligned to the center.</p>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button>End Aligned</Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <div className="p-4">
            <p className="body-sm-regular text-secondary">Aligned to the end.</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Custom Styling</Button>
      </PopoverTrigger>
      <PopoverContent className="bg-brand text-primary-inverse">
        <div className="p-4">
          <h4 className="body-sm-medium mb-2">Custom Background</h4>
          <p className="body-sm-regular opacity-80">This popover has a custom background color.</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
} 