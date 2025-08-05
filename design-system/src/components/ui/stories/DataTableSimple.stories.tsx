import type { Meta, StoryObj } from "@storybook/react"
import { DataTableSimple } from "../data-table/data-table-simple"
import { columns, data } from "../data-table/data-table-demo"

function DataTableSimpleDemo() {
  return (
    <div className="w-full">
      <DataTableSimple
        columns={columns}
        data={data}
        searchKey="name"
        searchPlaceholder="Filter names..."
      />
    </div>
  )
}

const meta: Meta<typeof DataTableSimpleDemo> = {
  title: "UI/DataTableSimple",
  component: DataTableSimpleDemo,
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