import type { Meta, StoryObj } from "@storybook/react"
import { DataTableDemo } from "../data-table/data-table-demo"
import { DataTableBulkDemo } from "../data-table/data-table-bulk-demo"

const meta: Meta<typeof DataTableDemo> = {
  title: "UI/DataTable",
  component: DataTableDemo,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithDescription: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "A powerful data table component built with TanStack Table. Features include sorting, filtering, pagination, and column visibility controls.",
      },
    },
  },
}

export const WithBulkActions: Story = {
  render: () => <DataTableBulkDemo />,
  parameters: {
    docs: {
      description: {
        story: "Data table with bulk selection functionality. Users can select multiple rows and perform bulk actions like export or delete.",
      },
    },
  },
} 