

/**
 * Get CSS custom property value from design tokens
 */
export function getTokenValue(tokenPath: string): string {
  return `var(--${tokenPath})`;
}

/**
 * Design token constants that can be imported and used throughout the app
 */
export const designTokens = {
  'colors': {
    'page': getTokenValue('page'),
    'container': getTokenValue('container'),
    'container-hover': getTokenValue('container-hover'),
    'controls': getTokenValue('controls'),
    'controls-hover': getTokenValue('controls-hover'),
    'controls-inverse': getTokenValue('controls-inverse'),
    'flat': getTokenValue('flat'),
    'flat-hover': getTokenValue('flat-hover'),
    'brand': getTokenValue('brand'),
    'brand-hover': getTokenValue('brand-hover'),
    'disabled': getTokenValue('disabled'),
    'disabled-inverse': getTokenValue('disabled-inverse'),
    'overlay': getTokenValue('overlay'),
    
    'primary': getTokenValue('primary'),
    'primary-inverse': getTokenValue('primary-inverse'),
    'secondary': getTokenValue('secondary'),
    'tertiary': getTokenValue('tertiary'),
    'active': getTokenValue('active'),
    
    'weak': getTokenValue('weak'),
    'strong': getTokenValue('strong'),
    'focused': getTokenValue('focused'),
  },
  'spacing': {
    '0': getTokenValue('spacing-0'),
    '4': getTokenValue('spacing-4'),
    '8': getTokenValue('spacing-8'),
    '12': getTokenValue('spacing-12'),
    '16': getTokenValue('spacing-16'),
    '20': getTokenValue('spacing-20'),
    '24': getTokenValue('spacing-24'),
    '28': getTokenValue('spacing-28'),
    '32': getTokenValue('spacing-32'),
    '36': getTokenValue('spacing-36'),
    '40': getTokenValue('spacing-40'),
    '48': getTokenValue('spacing-48'),
    '64': getTokenValue('spacing-64'),
    '80': getTokenValue('spacing-80'),
    '96': getTokenValue('spacing-96'),
    '128': getTokenValue('spacing-128'),
  },
  'typography': {
    'sizes': {
      '3xs': getTokenValue('text-3xs'),
      '2xs': getTokenValue('text-2xs'),
      'xs': getTokenValue('text-xs'),
      'sm': getTokenValue('text-sm'),
      'base': getTokenValue('text-base'),
      'lg': getTokenValue('text-lg'),
      'xl': getTokenValue('text-xl'),
      '2xl': getTokenValue('text-2xl'),
      '3xl': getTokenValue('text-3xl'),
      '4xl': getTokenValue('text-4xl'),
      '5xl': getTokenValue('text-5xl'),
    },
    'weights': {
      'regular': getTokenValue('font-weight-regular'),
      'medium': getTokenValue('font-weight-medium'),
      'semibold': getTokenValue('font-weight-semi-bold'),
    },
    'families': {
      'system': getTokenValue('font-system'),
      'display': getTokenValue('font-display'),
    }
  },
  'radius': {
    'none': getTokenValue('radius-none'),
    '2xs': getTokenValue('radius-2xs'),
    'xs': getTokenValue('radius-xs'),
    'sm': getTokenValue('radius-sm'),
    'md': getTokenValue('radius-md'),
    'lg': getTokenValue('radius-lg'),
    'xl': getTokenValue('radius-xl'),
    '2xl': getTokenValue('radius-2xl'),
    '3xl': getTokenValue('radius-3xl'),
    'round': getTokenValue('radius-round'),
  },
  'borderWidth': {
    '1': getTokenValue('border-width-1'),
    '2': getTokenValue('border-width-2'),
  },
  'opacity': {
    '15': getTokenValue('opacity-15'),
    '25': getTokenValue('opacity-25'),
    '60': getTokenValue('opacity-60'),
    '75': getTokenValue('opacity-75'),
  },
  'iconStroke': {
    'regular': getTokenValue('icon-stroke-width-regular'),
    'medium': getTokenValue('icon-stroke-width-medium'),
    'semibold': getTokenValue('icon-stroke-width-semibold'),
  }
};

/**
 * Utility to convert spacing values to rem
 */
export function spacingToRem(spacingValue: number): string {
  return `${spacingValue / 16}rem`;
}

/**
 * Get semantic color
 */
export function getSemanticColor(colorName: keyof typeof designTokens.colors): string {
  return designTokens.colors[colorName];
}

/**
 * Get spacing value
 */
export function getSpacing(size: keyof typeof designTokens.spacing): string {
  return designTokens.spacing[size];
}

/**
 * Get typography size
 */
export function getTypographySize(size: keyof typeof designTokens.typography.sizes): string {
  return designTokens.typography.sizes[size];
} 