import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primaryOne text-white shadow hover:bg-primaryFive focused:bg-primarySix pressed:bg-primaryTwo",
        secondary:
          "bg-secondaryOne text-white shadow-sm hover:bg-secondaryTwo pressed:bg-primaryFour focused:bg-secondaryFive",
        neutral:
          "bg-neutralFour text-white hover:bg-neutralOne pressed:bg-neutralTwo focused:neutralOne",
        default:
          "bg-primaryOne text-white shadow hover:bg-primaryFive pressed:bg-primaryTwo",
        extra:
          "bg-neutralOne text-black hover:bg-neutralThree hover:text-white focused:bg-neutralThree",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          " hover:border bg-neutralOne hover:text-white shadow-sm hover:bg-accent text-black ",
        outline2:
          "hover:border bg-neutralOne hover:text-secondaryTwo shadow-sm hover:bg-accent text-black",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        mycolor: "bg-primaryOne text-white",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
