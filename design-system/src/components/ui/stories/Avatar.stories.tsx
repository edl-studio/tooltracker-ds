import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "../avatar/avatar"

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Size of the avatar",
    },
    src: {
      control: { type: "text" },
      description: "Image source URL",
    },
    alt: {
      control: { type: "text" },
      description: "Alt text for the image",
    },
    initials: {
      control: { type: "text" },
      description: "User initials to display",
    },
    icon: {
      control: { type: "text" },
      description: "Icon name to display",
    },
    fallback: {
      control: { type: "text" },
      description: "Fallback content when no image is available",
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <Avatar {...args} />,
  args: {
    initials: "JD",
  },
}

export const WithImage: Story = {
  render: (args: any) => <Avatar {...args} />,
  args: {
    src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    alt: "User avatar",
    fallback: "JD",
  },
}

export const WithIcon: Story = {
  render: (args: any) => <Avatar {...args} />,
  args: {
    icon: "person",
  },
}

export const IconVariants: Story = {
  render: (args: any) => (
    <div className="flex items-center gap-4">
      <Avatar icon="person" size="xs" />
      <Avatar icon="account_circle" size="sm" />
      <Avatar icon="face" size="md" />
      <Avatar icon="group" size="lg" />
    </div>
  ),
}

export const WithInitials: Story = {
  render: (args: any) => <Avatar {...args} />,
  args: {
    initials: "AB",
  },
}

export const Sizes: Story = {
  render: (args: any) => (
    <div className="flex items-center gap-4">
      <Avatar {...args} size="xs" initials="JD" />
      <Avatar {...args} size="sm" initials="JD" />
      <Avatar {...args} size="md" initials="JD" />
      <Avatar {...args} size="lg" initials="JD" />
      <Avatar {...args} size="xl" initials="JD" />
      <Avatar {...args} size="2xl" initials="JD" />
    </div>
  ),
}

export const Variants: Story = {
  render: (args: any) => (
    <div className="flex items-center gap-4">
      <Avatar {...args} initials="JD" />
      <Avatar {...args} icon="person" />
      <Avatar {...args} fallback="?" />
    </div>
  ),
}

export const BrokenImage: Story = {
  render: (args: any) => <Avatar {...args} />,
  args: {
    src: "https://broken-image-url.com/image.jpg",
    alt: "Broken image",
    fallback: "JD",
  },
} 