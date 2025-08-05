/**
 * Utility functions for Avatar component
 */

/**
 * Generates initials from a full name
 * @param name - Full name (e.g., "John Doe", "Mary Jane Smith")
 * @param maxInitials - Maximum number of initials to return (default: 2)
 * @returns Uppercase initials (e.g., "JD", "MJS")
 */
export function getInitials(name: string, maxInitials: number = 2): string {
  if (!name || typeof name !== 'string') {
    return ''
  }

  const words = name.trim().split(/\s+/)
  const initials = words
    .map(word => word.charAt(0))
    .filter(char => char.length > 0)
    .slice(0, maxInitials)
    .join('')
    .toUpperCase()

  return initials
}

/**
 * Validates if a string contains valid initials
 * @param initials - String to validate
 * @returns True if valid initials (1-3 uppercase letters)
 */
export function isValidInitials(initials: string): boolean {
  if (!initials || typeof initials !== 'string') {
    return false
  }
  
  return /^[A-Z]{1,3}$/.test(initials)
}

/**
 * Formats initials for display
 * @param initials - Raw initials string
 * @returns Formatted initials (uppercase, trimmed)
 */
export function formatInitials(initials: string): string {
  if (!initials || typeof initials !== 'string') {
    return ''
  }
  
  return initials.trim().toUpperCase()
} 