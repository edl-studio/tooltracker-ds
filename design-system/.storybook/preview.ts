import type { Preview } from '@storybook/react-vite'
import '../src/lib/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    // Design system parameters
    docs: {
      toc: true,
      // Enhanced documentation settings
      source: {
        state: 'open',
      },
    },
    
    // Backgrounds for testing components on different backgrounds
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1c2231',
        },
        {
          name: 'gray',
          value: '#f8fafc',
        },
      ],
    },
  },
  // 👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
};

export default preview;