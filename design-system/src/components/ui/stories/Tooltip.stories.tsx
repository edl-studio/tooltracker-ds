import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip"
import { Button } from "../button/button"

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    delayDuration: {
      control: { type: "number", min: 0, max: 5000, step: 100 },
      description: "Delay before showing the tooltip (in milliseconds)",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithIconButton: Story = {
  render: (args: any) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button size="icon-sm" iconLeft="help">
          <span className="sr-only">Help</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Click for help information</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const LongContent: Story = {
  render: (args: any) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Long tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a longer tooltip with more content that demonstrates how the tooltip handles multiple lines of text.</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const DifferentPositions: Story = {
  render: (args: any) => (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const WithDelay: Story = {
  render: () => (
    <Tooltip delayDuration={500}>
      <TooltipTrigger asChild>
        <Button variant="ghost">Delayed tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip appears after 500ms delay</p>
      </TooltipContent>
    </Tooltip>
  ),
} 