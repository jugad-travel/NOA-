import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-brand-cyan/20 via-brand-blue/20 to-brand-orange/20 text-gray-700 border border-brand-blue/20",
        secondary:
          "bg-gray-100 text-gray-600 border border-gray-200",
        outline:
          "border border-gray-200 text-gray-600",
        gradient:
          "bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-orange text-gray-700 font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
