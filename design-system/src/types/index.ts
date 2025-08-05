// Design System Types

/**
 * Design Token Types for Figma Integration
 */
export interface DesignTokens {
  colors: ColorTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
  shadows: ShadowTokens;
  borderRadius: BorderRadiusTokens;
  zIndex: ZIndexTokens;
}

export interface ColorTokens {
  background: string;
  foreground: string;
  primary: string;
  'primary-foreground': string;
  secondary: string;
  'secondary-foreground': string;
  muted: string;
  'muted-foreground': string;
  accent: string;
  'accent-foreground': string;
  destructive: string;
  border: string;
  input: string;
  ring: string;
  card: string;
  'card-foreground': string;
  popover: string;
  'popover-foreground': string;
}

export interface SpacingTokens {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
}

export interface TypographyTokens {
  sizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  lineHeights: {
    tight: number;
    normal: number;
    relaxed: number;
  };
  fontWeights: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
}

export interface ShadowTokens {
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface BorderRadiusTokens {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface ZIndexTokens {
  dropdown: number;
  sticky: number;
  fixed: number;
  'modal-backdrop': number;
  modal: number;
  popover: number;
  tooltip: number;
  toast: number;
}

/**
 * Component Props Types
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface VariantProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

/**
 * Figma Integration Types
 */
export interface FigmaVariable {
  id: string;
  name: string;
  type: 'COLOR' | 'FLOAT' | 'STRING' | 'BOOLEAN';
  value: string | number | boolean;
  scopes: string[];
  codeSyntax?: {
    WEB?: string;
  };
}

export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  fills?: unknown[];
  strokes?: unknown[];
  effects?: unknown[];
  layoutMode?: string;
  counterAxisSizingMode?: string;
  primaryAxisSizingMode?: string;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  itemSpacing?: number;
}

export interface FigmaComponentMapping {
  figmaNodeId: string;
  componentName: string;
  componentPath: string;
  props: Record<string, unknown>;
  variants?: Record<string, unknown>;
}

/**
 * MCP Integration Types
 */
export interface MCPImageResponse {
  nodeId: string;
  imageUrl: string;
  width: number;
  height: number;
}

export interface MCPCodeResponse {
  nodeId: string;
  code: string;
  language: string;
  framework: string;
}

export interface MCPVariableResponse {
  [variableName: string]: string | number;
}

/**
 * Design System Composition Types
 */
export interface LayoutProps extends BaseComponentProps {
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  gap?: keyof SpacingTokens;
  padding?: keyof SpacingTokens;
  margin?: keyof SpacingTokens;
}

export interface CompositionProps extends BaseComponentProps {
  spacing?: keyof SpacingTokens;
  radius?: keyof BorderRadiusTokens;
  shadow?: keyof ShadowTokens;
  background?: string;
  border?: boolean;
}

/**
 * Utility Types
 */
export type ResponsiveValue<T> = T | { sm?: T; md?: T; lg?: T; xl?: T };
export type ColorMode = 'light' | 'dark' | 'system';

/**
 * Theme Context Types
 */
export interface ThemeContextType {
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
  tokens: DesignTokens;
} 