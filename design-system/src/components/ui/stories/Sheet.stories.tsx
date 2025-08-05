import type { Meta, StoryObj } from '@storybook/react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '../sheet'
import { Button } from '../button/button'
import { IconButton } from '../button/icon-button'
import { Input } from '../input/input'
import { Label } from '../label'
import { Icon } from '../icon/icon'

const meta: Meta<typeof Sheet> = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
            <div className="flex gap-2">
            <Button iconLeft="check">
                Save
              </Button>
              <Button variant="outline">
                Cancel
              </Button>
            </div>
          <SheetClose asChild>
            <IconButton
              icon="close"
              variant="outline"
              className="opacity-70 hover:opacity-100"
              aria-label="Close"
            />
          </SheetClose>
        </SheetHeader>
        <div className="grid gap-4 py-4 px-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue="pedro@example.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company">
              Company
            </Label>
            <Input
              id="company"
              defaultValue="Acme Corp"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="position">
              Position
            </Label>
            <Input
              id="position"
              defaultValue="Senior Developer"
              className="col-span-3"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic sheet with form content, header, and footer.',
      },
    },
  },
}

export const DifferentSides: Story = {
  render: () => (
    <div className="flex gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Right Side</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Side Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the right side.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="body-sm-regular">
              Content for the right side sheet goes here.
            </p>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Left Side</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Side Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the left side.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="body-sm-regular">
              Content for the left side sheet goes here.
            </p>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Top Side</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Side Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the top.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="body-sm-regular">
              Content for the top side sheet goes here.
            </p>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Bottom Side</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Side Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the bottom.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="body-sm-regular">
              Content for the bottom side sheet goes here.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Sheets can slide in from different sides: right, left, top, and bottom.',
      },
    },
  },
}

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Create Account</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
            <div className="flex gap-2">
            <Button iconLeft="check">
                Create Account
              </Button>
              <Button variant="outline">
                Cancel
              </Button>
            </div>
          <SheetClose asChild>
            <IconButton
              icon="close"
              variant="outline"
              className="opacity-70 hover:opacity-100"
              aria-label="Close"
            />
          </SheetClose>
        </SheetHeader>
        <div className="grid gap-4 py-4 px-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="first-name">
              First Name
            </Label>
            <Input id="first-name" placeholder="Enter your first name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="last-name">
              Last Name
            </Label>
            <Input id="last-name" placeholder="Enter your last name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email">
              Email
            </Label>
            <Input id="email" type="email" placeholder="Enter your email" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password">
              Password
            </Label>
            <Input id="password" type="password" placeholder="Enter your password" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="confirm-password">
              Confirm Password
            </Label>
            <Input id="confirm-password" type="password" placeholder="Confirm your password" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone">
              Phone Number
            </Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company">
              Company
            </Label>
            <Input id="company" placeholder="Enter your company name" className="col-span-3" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A sheet with a complete form including inputs, labels, and a submit button.',
      },
    },
  },
}

export const WithoutHeader: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Simple Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <div className="py-4 px-4">
          <h2 className="ui-base-semibold mb-2">Simple Content</h2>
          <p className="body-sm-regular text-secondary mb-4">
            This sheet doesn't use the header and footer components, just simple content.
          </p>
          <div className="space-y-2">
            <p className="body-sm-regular">• Simple list item 1</p>
            <p className="body-sm-regular">• Simple list item 2</p>
            <p className="body-sm-regular">• Simple list item 3</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A sheet without header and footer components, showing simple content.',
      },
    },
  },
}

export const WithCustomStyling: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="destructive">Custom Styled Sheet</Button>
      </SheetTrigger>
      <SheetContent className="bg-destructive-light">
        <SheetHeader>
            <div className="flex gap-2">
            <Button variant="destructive" iconLeft="delete">
                Delete Account
              </Button>
              <Button variant="outline">
                Cancel
              </Button>
            </div>
          <SheetClose asChild>
            <IconButton
              icon="close"
              variant="outline"
              className="opacity-70 hover:opacity-100"
              aria-label="Close"
            />
          </SheetClose>
        </SheetHeader>
        <div className="py-4 px-4">
          <p className="body-sm-regular text-destructive-strong">
            Are you sure you want to delete your account? This action cannot be undone.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A sheet with custom styling using our design system colors.',
      },
    },
  },
} 