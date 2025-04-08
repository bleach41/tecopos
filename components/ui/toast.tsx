"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: cn(
          "[background:rgba(255,255,255,0.60) ] dark:[background:radial-gradient(100%_100%_at_50%_0%,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.00)_54.16%),rgba(248,248,248,0.02)]",
          "shadow-[0px_4px_8px_0px_rgba(18,18,18,0.04),inset_2px_4px_16px_0px_rgba(248,248,248,0.24)]",
          "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset,0px_54px_32px_-16px_rgba(5,5,5,0.05),0px_24px_24px_-16px_rgba(5,5,5,0.09),0px_6px_12px_0px_rgba(5,5,5,0.10),0px_4px_4px_-4px_rgba(5,5,5,0.10),0px_0.5px_1.5px_-4px_rgba(5,5,5,0.50)]",
          "[backdrop-filter:blur(50px)]",
          "text-gray-800 dark:text-gray-200"

        ),
        success: cn(
          "[background:linear-gradient(278deg,rgba(83,255,121,0.08)_0%,rgba(83,255,121,0.20)_100%),rgba(255,255,255,0.60)] dark:[background:linear-gradient(142deg,rgba(172,255,190,0.10)_0%,rgba(195,255,208,0.04)_80.39%)]",
          "shadow-[0px_4px_8px_0px_rgba(18,18,18,0.04),inset_2px_4px_16px_0px_rgba(248,248,248,0.24)]",
          "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset,0px_54px_32px_-16px_rgba(5,5,5,0.05),0px_24px_24px_-16px_rgba(5,5,5,0.09),0px_6px_12px_0px_rgba(5,5,5,0.10),0px_4px_4px_-4px_rgba(5,5,5,0.10),0px_0.5px_1.5px_-4px_rgba(5,5,5,0.50)]",
          "[backdrop-filter:blur(50px)]",
          "[color:#25B445;]"
        ),
        destructive: cn(
          "[background:linear-gradient(278deg,rgba(255,79,111,0.08)_0%,rgba(255,79,111,0.20)_100%),rgba(255,255,255,0.60)] dark:[background:linear-gradient(142deg,rgba(255,112,138,0.10)_0%,rgba(255,156,174,0.04)_80.39%)]",
          "shadow-[0px_4px_8px_0px_rgba(18,18,18,0.04),inset_2px_4px_16px_0px_rgba(248,248,248,0.24)]",
          "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset,0px_54px_32px_-16px_rgba(5,5,5,0.05),0px_24px_24px_-16px_rgba(5,5,5,0.09),0px_6px_12px_0px_rgba(5,5,5,0.10),0px_4px_4px_-4px_rgba(5,5,5,0.10),0px_0.5px_1.5px_-4px_rgba(5,5,5,0.50)]",
          "[backdrop-filter:blur(50px)]",
          "[color:#FF4F6F;]"
        ),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
  VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
