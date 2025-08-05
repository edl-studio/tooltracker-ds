import type { Meta, StoryObj } from '@storybook/react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter, 
  CardAction 
} from '../';
import { Button } from '../';
import { Icon } from '../';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component with header, content, footer, and action areas. Supports interactive states and follows our design system conventions.',
      },
    },
  },
  argTypes: {
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the card should have interactive hover states',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story
export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a basic card with title and description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="body-sm-regular">
          This is the main content area of the card. You can put any content here.
        </p>
      </CardContent>
    </Card>
  ),
};

// Interactive card
export const Interactive: Story = {
  render: () => (
    <Card interactive className="w-80 cursor-pointer">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>This card has hover effects and is clickable.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="body-sm-regular">
          Hover over this card to see the interactive effects.
        </p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive cards have hover states and smooth transitions. Perfect for clickable content areas.',
      },
    },
  },
};

// Card with action
export const WithAction: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>This card has an action button in the header.</CardDescription>
        <CardAction>
          <Button size="sm" variant="outline">
            <Icon>
              more_vert
            </Icon>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="body-sm-regular">
          The action button is positioned in the top-right corner of the header.
        </p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards can include action buttons in the header using the CardAction component.',
      },
    },
  },
};

// Card with footer
export const WithFooter: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card has action buttons in the footer.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="body-sm-regular">
          The footer is perfect for placing action buttons or additional information.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'CardFooter is ideal for placing action buttons or additional content at the bottom of the card.',
      },
    },
  },
};

// Product card example
export const ProductCard: Story = {
  render: () => (
    <Card interactive className="w-72">
      <CardContent className="p-0">
        <div className="h-48 bg-[var(--background-flat)] flex items-center justify-center">
          <Icon size={48}>
            settings
          </Icon>
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>Product Name</CardTitle>
        <CardDescription>Product description goes here</CardDescription>
        <CardAction>
          <Button size="sm" variant="ghost">
            <Icon>
            favorite
            </Icon>
          </Button>
        </CardAction>
      </CardHeader>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <span className="ui-sm-semibold">$29.99</span>
          <Button size="sm">Add to Cart</Button>
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of a product card with image placeholder, pricing, and action buttons.',
      },
    },
  },
};

// User profile card
export const UserProfile: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[var(--background-brand)] rounded-full flex items-center justify-center">
            <Icon size={24}>
            person
            </Icon>
          </div>
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
          <CardAction>
            <Button size="sm" variant="outline">
              <Icon>
            edit
              </Icon>
            </Button>
          </CardAction>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Icon size={16}>
              email
            </Icon>
            <span className="body-sm-regular">john.doe@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon size={16}>
              phone
            </Icon>
            <span className="body-sm-regular">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon size={16}>
              location_on
            </Icon>
            <span className="body-sm-regular">San Francisco, CA</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'User profile card example with avatar, contact information, and action buttons.',
      },
    },
  },
};

// Settings card
export const SettingsCard: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Manage your notification preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="ui-sm-medium">Email Notifications</p>
              <p className="body-sm-regular text-[var(--content-tertiary)]">
                Receive notifications via email
              </p>
            </div>
            <Button size="sm" variant="outline">Configure</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="ui-sm-medium">Push Notifications</p>
              <p className="body-sm-regular text-[var(--content-tertiary)]">
                Receive push notifications
              </p>
            </div>
            <Button size="sm" variant="outline">Configure</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="ui-sm-medium">SMS Notifications</p>
              <p className="body-sm-regular text-[var(--content-tertiary)]">
                Receive SMS notifications
              </p>
            </div>
            <Button size="sm" variant="outline">Configure</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">Reset to Default</Button>
        <Button size="sm">Save Changes</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Settings card example with multiple configuration options and action buttons.',
      },
    },
  },
};

// Card grid
export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      <Card interactive>
        <CardHeader>
          <CardTitle>Feature 1</CardTitle>
          <CardDescription>Description for feature 1</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="body-sm-regular">
            This is a feature card that can be used in a grid layout.
          </p>
        </CardContent>
      </Card>
      
      <Card interactive>
        <CardHeader>
          <CardTitle>Feature 2</CardTitle>
          <CardDescription>Description for feature 2</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="body-sm-regular">
            Another feature card with different content.
          </p>
        </CardContent>
      </Card>
      
      <Card interactive>
        <CardHeader>
          <CardTitle>Feature 3</CardTitle>
          <CardDescription>Description for feature 3</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="body-sm-regular">
            A third feature card to complete the grid.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards work well in grid layouts for showcasing features, products, or other content.',
      },
    },
  },
}; 