import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandLoading,
} from "../command/command"

const meta: Meta<typeof Command> = {
  title: "UI/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="rounded-2xs border border-weak min-w-[400px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem icon="search">
            <span>Search...</span>
          </CommandItem>
          <CommandItem icon="calendar_today">
            <span>Calendar</span>
          </CommandItem>
          <CommandItem icon="calculate">
            <span>Calculator</span>
          </CommandItem>
          <CommandItem icon="settings">
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Tools">
          <CommandItem icon="terminal">
            <span>Terminal</span>
            <CommandShortcut>⌘T</CommandShortcut>
          </CommandItem>
          <CommandItem icon="code">
            <span>VSCode</span>
            <CommandShortcut>⌘V</CommandShortcut>
          </CommandItem>
          <CommandItem icon="edit">
            <span>Notepad</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Files">
          <CommandItem icon="folder">
            <span>Documents</span>
          </CommandItem>
          <CommandItem icon="folder">
            <span>Downloads</span>
          </CommandItem>
          <CommandItem icon="folder">
            <span>Desktop</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithDialog: Story = {
  render: () => (
    <CommandDialog>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem icon="search">
            <span>Search...</span>
          </CommandItem>
          <CommandItem icon="calendar_today">
            <span>Calendar</span>
          </CommandItem>
          <CommandItem icon="calculate">
            <span>Calculator</span>
          </CommandItem>
          <CommandItem icon="settings">
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Tools">
          <CommandItem icon="terminal">
            <span>Terminal</span>
            <CommandShortcut>⌘T</CommandShortcut>
          </CommandItem>
          <CommandItem icon="code">
            <span>VSCode</span>
            <CommandShortcut>⌘V</CommandShortcut>
          </CommandItem>
          <CommandItem icon="edit">
            <span>Notepad</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Files">
          <CommandItem icon="folder">
            <span>Documents</span>
          </CommandItem>
          <CommandItem icon="folder">
            <span>Downloads</span>
          </CommandItem>
          <CommandItem icon="folder">
            <span>Desktop</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
}

export const Loading: Story = {
  render: () => (
    <Command className="rounded-2xs border border-weak min-w-[400px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandLoading>Fetching results...</CommandLoading>
      </CommandList>
    </Command>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Command className="rounded-2xs border border-weak min-w-[400px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Categories">
          <CommandItem icon="person">
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem icon="credit_card">
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem icon="settings">
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem icon="logout">
            <span>Logout</span>
            <CommandShortcut>⌘L</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
} 