# Toast Component

A toast notification component built on top of [Sonner](https://sonner.emilkowal.ski/), adapted to our design system.

## Features

- **Multiple toast types**: Default, success, warning, error
- **Customizable positioning**: 6 different positions (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right)
- **Rich descriptions**: Support for detailed messages
- **Custom duration**: Configurable auto-dismiss timing
- **Accessible**: Built-in ARIA support and keyboard navigation
- **Design system integration**: Uses our color tokens and styling

## Usage

### Basic Setup

Add the `Toaster` component to your app root:

```tsx
import { Toaster } from '@/components/ui/toast'

function App() {
  return (
    <div>
      {/* Your app content */}
      <Toaster />
    </div>
  )
}
```

### Showing Toasts

```tsx
import { toast } from 'sonner'

// Basic toast
toast('Your message here')

// Success toast
toast.success('Success! Your action was completed.')

// Warning toast
toast.warning('Warning! Please review your input.')

// Error toast
toast.error('Error! Something went wrong.')

// Toast with description
toast('User Profile Updated', {
  description: 'Your profile information has been successfully updated.'
})

// Custom duration (in milliseconds)
toast('Quick message', { duration: 2000 })

// Persistent toast (won't auto-dismiss)
toast('Important message', { duration: Infinity })
```

### Toaster Configuration

```tsx
<Toaster
  position="top-right"        // Position of toasts
  duration={4000}            // Auto-dismiss duration
  expand={false}             // Expand when multiple toasts
  richColors={true}          // Use rich colors for different types
  closeButton={true}         // Show close button
/>
```

## Design System Integration

The toast component uses our design system tokens:

- **Background colors**: Uses `--background-color-*` variables
- **Text colors**: Uses `--text-color-*` variables  
- **Border colors**: Uses `--border-color-*` variables
- **Border radius**: Uses `--radius-*` variables
- **Typography**: Inherits font family and sizing

### Toast Types and Colors

- **Default**: Container background with primary text
- **Success**: Success light background with success strong text
- **Warning**: Warning light background with warning strong text
- **Error**: Destructive light background with destructive strong text

## Accessibility

- Screen reader announcements for new toasts
- Keyboard navigation support
- Focus management
- ARIA labels and descriptions
- High contrast support

## API Reference

### Toaster Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'top-right'` | Position of toast notifications |
| `duration` | `number` | `4000` | Duration in milliseconds before auto-dismiss |
| `expand` | `boolean` | `false` | Whether to expand when there are multiple toasts |
| `richColors` | `boolean` | `true` | Whether to use rich colors for different toast types |
| `closeButton` | `boolean` | `true` | Whether to show the close button |

### Toast Function

```tsx
toast(message: string, options?: ToastOptions)
toast.success(message: string, options?: ToastOptions)
toast.warning(message: string, options?: ToastOptions)
toast.error(message: string, options?: ToastOptions)
```

### ToastOptions

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `description` | `string` | - | Additional description text |
| `duration` | `number` | Inherited from Toaster | Custom duration for this toast |
| `position` | `string` | Inherited from Toaster | Custom position for this toast |
| `action` | `{ label: string, onClick: () => void }` | - | Action button |
| `cancel` | `{ label: string, onClick: () => void }` | - | Cancel button |

## Examples

See the Storybook stories for comprehensive examples of all features and configurations. 