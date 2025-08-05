# ToolTracker Design System

A comprehensive React-based design system built with modern technologies and best practices. This design system provides a collection of reusable UI components, design tokens, and documentation for building consistent and accessible user interfaces.

## 🚀 Features

- **Modern React Components** - Built with React 19 and TypeScript
- **Accessible by Default** - Built on Radix UI primitives for full accessibility support
- **Design Tokens** - Consistent spacing, colors, typography, and theming
- **Tailwind CSS v4** - Utility-first CSS framework with custom design system integration
- **Storybook Documentation** - Interactive component documentation and testing
- **Developer Experience** - Full TypeScript support, ESLint configuration, and modern tooling

## 📦 Components

Our design system includes the following components:

- **Form Controls**: Button, Icon Button, Input, Textarea, Select, Checkbox, Radio
- **Data Display**: Table, Data Table, Data List, Badge, Avatar, Card
- **Navigation**: Dropdown Menu, Command Menu, Combobox
- **Feedback**: Spinner, Toast, Tooltip
- **Layout**: Sheet, Popover, Dialog
- **Media**: Icon

## 🛠 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/EDL-Studio/tooltracker-ds.git
cd tooltracker-ds/design-system
npm install
```

## 📋 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project and Storybook
- `npm run preview` - Preview the built project
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook development server on port 6006
- `npm run build-storybook` - Build Storybook for production

## 🏗 Development

### Getting Started

1. **Start the development environment:**
   ```bash
   npm run dev
   ```

2. **Launch Storybook for component development:**
   ```bash
   npm run storybook
   ```
   This will open Storybook at `http://localhost:6006`

### Project Structure

```
design-system/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── layout/       # Layout components
│   │   └── tools/        # Tool-specific components
│   ├── lib/
│   │   ├── globals.css   # Global styles and design tokens
│   │   ├── design-tokens.ts
│   │   └── utils.ts
│   ├── pages/            # Documentation pages
│   └── types/            # TypeScript type definitions
├── .storybook/           # Storybook configuration
├── public/               # Static assets
└── package.json
```

## 🎨 Design Tokens

The design system uses a comprehensive set of design tokens including:

- **Colors** - Semantic color palette with light/dark mode support
- **Typography** - Consistent font sizes, weights, and line heights
- **Spacing** - Standardized spacing scale
- **Border Radius** - Consistent corner radius values
- **Shadows** - Elevation system for depth

## 🧪 Testing

The project includes testing setup with:

- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing
- **Storybook** - Component testing and documentation

## 🌟 Technologies

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS with PostCSS
- **Radix UI** - Accessible component primitives
- **Storybook 9** - Component development and documentation
- **Vite** - Fast build tool and development server
- **ESLint** - Code quality and consistency

## 📖 Documentation

Visit our Storybook documentation to explore components, see examples, and understand usage patterns:

```bash
npm run storybook
```

## 🤝 Contributing

1. Create a new branch for your feature or fix
2. Make your changes following the existing code style
3. Add or update Storybook stories for new components
4. Run tests and linting before submitting
5. Create a pull request with a clear description

## 📄 License

This project is private and proprietary to EDL Studio.

## 🔗 Links

- [Repository](https://github.com/EDL-Studio/tooltracker-ds)
- [Storybook Documentation](http://localhost:6006) (when running locally)

---

Built with ❤️ by the EDL Studio team
