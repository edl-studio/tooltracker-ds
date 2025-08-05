import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { Button } from "../button/button"
import { IconButton } from "../button/icon-button"
import { Icon } from "../icon/icon"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "../dropdown-menu"
import { DropdownItem } from "../dropdown-menu/dropdown-item"

const meta: Meta<typeof DropdownMenu> = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" iconLeft="menu">
          Open Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
                <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon className="size-4">person</Icon>
            <span className="ml-2">Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon className="size-4">payment</Icon>
            <span className="ml-2">Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon className="size-4">settings</Icon>
            <span className="ml-2">Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon className="size-4">keyboard_shortcut</Icon>
            <span className="ml-2">Keyboard shortcuts</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon className="size-4">support_agent</Icon>
          <span className="ml-2">Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Icon className="size-4">api</Icon>
          <span className="ml-2">API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon className="size-4">logout</Icon>
          <span className="ml-2">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithSubMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" iconLeft="more_vert">
          More Options
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon className="size-4">add</Icon>
          <span className="ml-2">New Tab</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Icon className="size-4">build</Icon>
            <span className="ml-2">More Tools</span>
            <Icon className="ml-auto size-4">chevron_right</Icon>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Icon className="size-4">save</Icon>
                <span className="ml-2">Save Page As...</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon className="size-4">open_in_new</Icon>
                <span className="ml-2">Create New Window</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Icon className="size-4">code</Icon>
                <span className="ml-2">Developer Tools</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon className="size-4">print</Icon>
          <span className="ml-2">Print</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const MultiSelect: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState(true)
    const [showActivityBar, setShowActivityBar] = React.useState(false)
    const [showPanel, setShowPanel] = React.useState(false)
    const [open, setOpen] = React.useState(false)

    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" iconLeft="visibility">
            View Options
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
            onSelect={(e) => e.preventDefault()}
          >
            <Icon className="size-4">horizontal_rule</Icon>
            <span className="ml-2">Show Status Bar</span>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            onSelect={(e) => e.preventDefault()}
          >
            <Icon className="size-4">view_column</Icon>
            <span className="ml-2">Show Activity Bar</span>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
            onSelect={(e) => e.preventDefault()}
          >
            <Icon className="size-4">view_sidebar</Icon>
            <span className="ml-2">Show Panel</span>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const SingleSelect: Story = {
  render: () => {
    const [person, setPerson] = React.useState("pedro")

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" iconLeft="person">
            Select Person
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>People</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem value="pedro">
              <Icon className="size-4">person</Icon>
              <span className="ml-2">Pedro Duarte</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="colm">
              <Icon className="size-4">person</Icon>
              <span className="ml-2">Colm Tuite</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="steve">
              <Icon className="size-4">person</Icon>
              <span className="ml-2">Steve Jobs</span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const SimpleMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton variant="outline" icon="more_vert" aria-label="Open menu" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem>
          <Icon className="size-4">edit</Icon>
          <span className="ml-2">Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon className="size-4">content_copy</Icon>
          <span className="ml-2">Copy</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon className="size-4">delete</Icon>
          <span className="ml-2">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithDropdownItem: Story = {
  render: () => (
    <DropdownMenu>
              <DropdownMenuTrigger asChild>
          <Button variant="outline" iconLeft="menu">
            Actions
          </Button>
        </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownItem icon="person">View Profile</DropdownItem>
        <DropdownItem icon="edit">Edit Profile</DropdownItem>
        <DropdownItem icon="settings">Settings</DropdownItem>
        <DropdownMenuSeparator />
        <DropdownItem icon="logout" disabled>Logout</DropdownItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
} 