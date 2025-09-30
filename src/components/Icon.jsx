import React from 'react';
import * as LucideIcons from 'lucide-react';

const Icon = ({ name, ...props }) => {
  /**
   * Converts kebab-case icon names (e.g., "bar-chart-2") 
   * to the PascalCase format used by the lucide-react library (e.g., "BarChart2").
   */
  const kebabToPascal = (kebabCase) => {
    if (!kebabCase) return 'HelpCircle'; // Return a default if name is missing
    return kebabCase
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  };

  const iconName = kebabToPascal(name);
  
  // Dynamically find the icon component from the imported library.
  // If an icon name is invalid, it defaults to a 'HelpCircle' icon to prevent errors.
  const LucideIcon = LucideIcons[iconName] || LucideIcons['HelpCircle'];

  return <LucideIcon {...props} />;
};

export default Icon;