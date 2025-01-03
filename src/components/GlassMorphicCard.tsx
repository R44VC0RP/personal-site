import React from 'react'
import { cn } from '@/lib/utils'

interface GlassMorphicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  highlight?: boolean;
}

export const GlassMorphicCard: React.FC<GlassMorphicCardProps> = ({ 
  children, 
  className, 
  title,
  highlight = false,
  ...props 
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "backdrop-blur-xl backdrop-saturate-150",
        "border border-white/10",
        "rounded-xl shadow-xl",
        "bg-gradient-to-br from-white/10 to-white/5",
        "p-6",
        highlight && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/10 before:to-purple-500/10",
        "after:absolute after:inset-0 after:bg-[url('/images/noise-light.png')] after:opacity-[0.15] after:mix-blend-soft-light",
        // Hover effects
        "group transition-all duration-300",
        "hover:border-white/20",
        "hover:shadow-2xl hover:shadow-white/5",
        "hover:before:opacity-75",
        className
      )}
      {...props}
    >
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-white/90 relative z-[1]">
          {title}
        </h3>
      )}
      <div className="relative z-[1]">
        {children}
      </div>
      
      {/* Gradient orb effect */}
      <div 
        className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />
    </div>
  )
}

export default GlassMorphicCard 