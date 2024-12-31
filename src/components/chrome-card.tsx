import React from 'react'
import { cn } from '@/lib/utils'

interface ChromeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

// Light version (original)
export const LightChromeCard: React.FC<ChromeCardProps> = ({ children, className, title, ...props }) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-b from-[#fbfbfb] via-[#e8e8e8] to-[#d4d4d4]",
        "border border-gray-300 rounded-lg shadow-md",
        "p-4",
        className
      )}
      {...props}
    >
      {title && (
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      )}
      {children}
    </div>
  )
}

// Dark version
export const DarkChromeCard: React.FC<ChromeCardProps> = ({ children, className, title, ...props }) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-b from-[#2d2d2d] via-[#1f1f1f] to-[#171717]",
        "border border-gray-700 rounded-lg shadow-md",
        "p-4 relative",
        "before:absolute before:inset-0 before:bg-[url('/images/noise-light.png')] before:opacity-[0.08] before:rounded-lg before:mix-blend-overlay",
        className
      )}
      {...props}
    >
      {title && (
        <h3 className="text-lg font-semibold mb-2 text-gray-100 relative z-[1]">{title}</h3>
      )}
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}

// Default export remains as Light version for backward compatibility
export default LightChromeCard

