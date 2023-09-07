import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      cartoon:
        "relative border-none bg-transparent p-0 cursor-pointer outline-offset-4 [transition:filter_0.25s] hover:brightness-110 group focus:[&:not(:focus-visible)]:outline-none",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  compoundVariants: [
    {
      variant: [
        "outline",
        "secondary",
        "default",
        "destructive",
        "ghost",
        "link",
      ],
      className:
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    },
    {
      variant: "cartoon",
      className: "h-full w-full px-0 py-0 text-xl",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  hsl?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, hsl = "340", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === "cartoon" ? (
          <>
            <span
              id="shadow"
              className={twMerge(
                `absolute top-0 left-0 w-full h-full rounded-[12px] bg-[hsl(0deg_0%_0%/0.25)] will-change-transform translate-y-[2px] [transition:transform_600ms_cubic-bezier(0.3,0.7,0.4,1)]`,
                `group-hover:translate-y-[4px] group-hover:[transition:transform_250ms_cubic-bezier(0.3,0.7,0.4,1.5)]`,
                `group-active:translate-y-[1px] group-active:[transition:transform_34ms]`
              )}
            />
            <span
              id="edge"
              className={twMerge(
                `absolute top-0 left-0 w-full h-full rounded-[12px]`
              )}
              style={{
                background: `linear-gradient(to left, hsl(${hsl}deg, 100%, 16%) 0%, hsl(${hsl}deg, 100%, 32%) 8%, hsl(${hsl}deg, 100%, 32%) 92%, hsl(${hsl}deg, 100%, 16%) 100%)`,
              }}
            />
            <span
              id="front"
              className={twMerge(
                `block relative py-3 px-[42px] rounded-[12px] text-white will-change-transform translate-y-[-4px] [transition:transform_600ms_cubic-bezier(0.3,0.7,0.4,1)]`,
                `group-hover:translate-y-[-6px] group-hover:[transition:transform_250ms_cubic-bezier(0.3,0.7,0.4,1.5)]`,
                `group-active:translate-y-[-2px] group-active:[transition:transform_34ms]`
              )}
              style={{
                background: `hsl(${(
                  parseInt(hsl) + 5
                ).toString()}deg, 100%, 47%)`,
              }}
            >
              {props.children}
            </span>
          </>
        ) : (
          props.children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
