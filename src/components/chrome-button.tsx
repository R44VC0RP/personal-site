import React from 'react'
import { cn } from '@/lib/utils'
import { type LucideIcon } from 'lucide-react'

interface ChromeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
  fullWidth?: boolean;
}

// Light version (original)
export const LightChromeButton: React.FC<ChromeButtonProps> = ({
  children,
  className,
  icon: Icon,
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        "rounded-full bg-gray-300 h-10 p-0.5 text-gray-800 border-[0.5px] border-b-0 border-black",
        "duration-200 ease-in-out relative inline-flex items-center justify-center",
        "active:scale-95 active:shadow-lg",
        "before:absolute before:inset-0 before:rounded-full",
        "before:bg-gradient-to-b before:from-[#fbfbfb] before:via-[#636464] before:to-[#fbfbfb]",
        "before:shadow-[rgba(0,_0,_0,_0.9)_0px_0px_1px_0px_inset,_rgba(0,_0,_0,_0.4)_0px_3px_6px_0px]",
        "before:active:shadow-[rgba(0,_0,_0,_0.9)_0px_0px_1px_0px_inset,_rgba(0,_0,_0,_0.4)_0px_3px_6px_0px]",
        "after:rounded-full after:flex after:items-center after:justify-center after:z-0",
        "after:bg-gradient-to-b after:from-[#bebebe] after:to-[#818181] after:absolute after:inset-0 after:m-[2px]",
        "after:bg-[url('/images/noise-light.png')] after:bg-repeat after:opacity-[0.08] after:mix-blend-overlay",
        fullWidth ? "w-48" : "min-w-[2.5rem] px-4",
        className
      )}
      {...props}
    >
      <span className="z-10 relative flex items-center justify-center gap-2 px-1 text-sm">
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </span>
    </button>
  )
}

// Dark version
export const DarkChromeButton: React.FC<ChromeButtonProps> = ({
  children,
  className,
  icon: Icon,
  fullWidth = false,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button internal click");
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "rounded-full bg-gray-900 h-10 p-0.5 text-gray-200 border-[0.5px] border-b-0 border-gray-700",
        "duration-200 ease-in-out relative inline-flex items-center justify-center",
        "active:scale-95 active:shadow-lg",
        "before:absolute before:inset-0 before:rounded-full",
        "before:bg-gradient-to-b before:from-[#2d2d2d] before:via-[#1a1a1a] before:to-[#2d2d2d]",
        "before:shadow-[rgba(0,_0,_0,_0.9)_0px_0px_1px_0px_inset,_rgba(255,_255,_255,_0.1)_0px_3px_6px_0px]",
        "before:active:shadow-[rgba(0,_0,_0,_0.9)_0px_0px_1px_0px_inset,_rgba(255,_255,_255,_0.1)_0px_3px_6px_0px]",
        "after:rounded-full after:flex after:items-center after:justify-center after:z-0",
        "after:bg-gradient-to-b after:from-[#363636] after:to-[#1f1f1f] after:absolute after:inset-0 after:m-[2px]",
        fullWidth ? "w-48" : "min-w-[2.5rem] px-4",
        className
      )}
      {...props}
    >
      <span className="z-10 relative flex items-center justify-center gap-2 px-1 text-sm">
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </span>
    </button>
  )
}

// Default export remains as Light version for backward compatibility
export default LightChromeButton

