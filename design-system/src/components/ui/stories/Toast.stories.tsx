import type { Meta, StoryObj } from '@storybook/react'
import { Toaster } from '../toast'
import { Button } from '../button/button'
import { toast } from 'sonner'

const meta: Meta<typeof Toaster> = {
  title: 'UI/Toast',
  component: Toaster,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: 'Position of the toast notifications',
    },
    duration: {
      control: { type: 'number' },
      description: 'Duration in milliseconds before auto-dismiss',
    },
    expand: {
      control: { type: 'boolean' },
      description: 'Whether to expand the toast when there are multiple',
    },
    richColors: {
      control: { type: 'boolean' },
      description: 'Whether to use rich colors for different toast types',
    },
    closeButton: {
      control: { type: 'boolean' },
      description: 'Whether to show the close button',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    position: 'top-right',
    duration: 4000,
    expand: false,
    richColors: true,
    closeButton: true,
  },
  render: (args) => (
    <div style={{ padding: '24px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <Button 
          onClick={() => toast('This is a default toast message')}
          variant="primary"
        >
          Default Toast
        </Button>
        <Button 
          onClick={() => toast.success('Success! Your action was completed successfully.')}
          variant="primary"
        >
          Success Toast
        </Button>
        <Button 
          onClick={() => toast.warning('Warning! Please review your input.')}
          variant="primary"
        >
          Warning Toast
        </Button>
        <Button 
          onClick={() => toast.error('Error! Something went wrong.')}
          variant="destructive"
        >
          Error Toast
        </Button>
      </div>
      <Toaster {...args} />
    </div>
  ),
}

export const WithDescription: Story = {
  args: {
    position: 'top-right',
    duration: 6000,
    expand: true,
    richColors: true,
    closeButton: true,
  },
  render: (args) => (
    <div style={{ padding: '24px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <Button 
          onClick={() => toast('User Profile Updated', {
            description: 'Your profile information has been successfully updated and saved to our database.',
          })}
          variant="primary"
        >
          Toast with Description
        </Button>
        <Button 
          onClick={() => toast.success('File Uploaded', {
            description: 'document.pdf has been successfully uploaded to your workspace.',
          })}
          variant="primary"
        >
          Success with Description
        </Button>
        <Button 
          onClick={() => toast.warning('Storage Warning', {
            description: 'You are approaching your storage limit. Consider upgrading your plan.',
          })}
          variant="primary"
        >
          Warning with Description
        </Button>
        <Button 
          onClick={() => toast.error('Connection Failed', {
            description: 'Unable to connect to the server. Please check your internet connection and try again.',
          })}
          variant="destructive"
        >
          Error with Description
        </Button>
      </div>
      <Toaster {...args} />
    </div>
  ),
}

export const DifferentPositions: Story = {
  args: {
    duration: 4000,
    expand: false,
    richColors: true,
    closeButton: true,
  },
  render: (args) => (
    <div style={{ padding: '24px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
        <Button 
          onClick={() => toast('Top Left Toast', { position: 'top-left' })}
          variant="outline"
          size="sm"
        >
          Top Left
        </Button>
        <Button 
          onClick={() => toast('Top Center Toast', { position: 'top-center' })}
          variant="outline"
          size="sm"
        >
          Top Center
        </Button>
        <Button 
          onClick={() => toast('Top Right Toast', { position: 'top-right' })}
          variant="outline"
          size="sm"
        >
          Top Right
        </Button>
        <Button 
          onClick={() => toast('Bottom Left Toast', { position: 'bottom-left' })}
          variant="outline"
          size="sm"
        >
          Bottom Left
        </Button>
        <Button 
          onClick={() => toast('Bottom Center Toast', { position: 'bottom-center' })}
          variant="outline"
          size="sm"
        >
          Bottom Center
        </Button>
        <Button 
          onClick={() => toast('Bottom Right Toast', { position: 'bottom-right' })}
          variant="outline"
          size="sm"
        >
          Bottom Right
        </Button>
      </div>
      <Toaster {...args} />
    </div>
  ),
}

export const CustomDuration: Story = {
  args: {
    position: 'top-right',
    expand: false,
    richColors: true,
    closeButton: true,
  },
  render: (args) => (
    <div style={{ padding: '24px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <Button 
          onClick={() => toast('Quick Toast (1s)', { duration: 1000 })}
          variant="outline"
          size="sm"
        >
          1 Second
        </Button>
        <Button 
          onClick={() => toast('Standard Toast (4s)', { duration: 4000 })}
          variant="outline"
          size="sm"
        >
          4 Seconds
        </Button>
        <Button 
          onClick={() => toast('Long Toast (10s)', { duration: 10000 })}
          variant="outline"
          size="sm"
        >
          10 Seconds
        </Button>
        <Button 
          onClick={() => toast('Persistent Toast', { duration: Infinity })}
          variant="outline"
          size="sm"
        >
          Persistent
        </Button>
      </div>
      <Toaster {...args} />
    </div>
  ),
}

export const MultipleToasts: Story = {
  args: {
    position: 'top-right',
    duration: 4000,
    expand: true,
    richColors: true,
    closeButton: true,
  },
  render: (args) => (
    <div style={{ padding: '24px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <Button 
          onClick={() => {
            toast('First notification')
            toast('Second notification')
            toast('Third notification')
            toast.success('Success notification')
            toast.warning('Warning notification')
            toast.error('Error notification')
          }}
          variant="primary"
        >
          Show Multiple Toasts
        </Button>
        <Button 
          onClick={() => toast.dismiss()}
          variant="outline"
        >
          Dismiss All
        </Button>
      </div>
      <Toaster {...args} />
    </div>
  ),
} 

export const WithActionButton: Story = {
  args: {
    position: 'top-right',
    duration: 6000,
    expand: true,
    richColors: true,
    closeButton: true,
  },
  render: (args) => (
    <div style={{ padding: '24px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <Button 
          onClick={() => toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo clicked')
            }
          })}
          variant="primary"
        >
          Toast with Action
        </Button>
        <Button 
          onClick={() => toast.success('File uploaded successfully', {
            description: 'document.pdf has been uploaded to your workspace',
            action: {
              label: 'View',
              onClick: () => console.log('View clicked')
            }
          })}
          variant="primary"
        >
          Success with Action
        </Button>
        <Button 
          onClick={() => toast.warning('Storage limit approaching', {
            description: 'You are approaching your storage limit',
            action: {
              label: 'Upgrade',
              onClick: () => console.log('Upgrade clicked')
            }
          })}
          variant="primary"
        >
          Warning with Action
        </Button>
        <Button 
          onClick={() => toast.error('Connection failed', {
            description: 'Unable to connect to the server',
            action: {
              label: 'Retry',
              onClick: () => console.log('Retry clicked')
            }
          })}
          variant="destructive"
        >
          Error with Action
        </Button>
      </div>
      <Toaster {...args} />
    </div>
  ),
} 