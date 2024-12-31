import React from 'react'
import { cn } from '@/lib/utils'

interface ChromeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

// Light version (original)
export const LightChromeInput: React.FC<ChromeInputProps> = ({ className, label, id, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "h-10 px-3 py-2 bg-white border border-gray-300 rounded-md",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "shadow-inner text-gray-900",
          "placeholder:text-gray-400",
          className
        )}
        {...props}
      />
    </div>
  )
}

// Dark version
export const DarkChromeInput: React.FC<ChromeInputProps> = ({ className, label, id, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-200">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          className={cn(
            "h-10 px-3 py-2 w-full rounded-md",
            "bg-gradient-to-b from-[#2d2d2d] via-[#1f1f1f] to-[#171717]",
            "border border-gray-700",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "shadow-inner text-gray-200",
            "placeholder:text-gray-500",
            "relative z-[1]",
            className
          )}
          {...props}
        />
        <div 
          className="absolute inset-0 bg-[url('/images/noise-light.png')] opacity-[0.08] rounded-md mix-blend-overlay pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

// Default export remains as Light version for backward compatibility
export default LightChromeInput

