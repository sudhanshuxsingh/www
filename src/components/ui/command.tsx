"use client"

import * as React from "react"
import { DialogDescription, DialogPortal, DialogTitle, type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Content } from "@radix-ui/react-dialog"


import { cn } from "@/lib/utils"
import { Dialog, DialogOverlay } from "@/components/ui/dialog"
import VisuallyHidden from "./visually-hidden"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogPortal>
        <DialogOverlay />
        <Content className="overflow-hidden p-0 fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4">
          <VisuallyHidden>
            <DialogTitle />
            <DialogDescription />
          </VisuallyHidden>
          <Command className={cn(
            //Root - cover
            "bg-transparent [&_[cmdk-root]]:max-w-2xl [&_[cmdk-root]]:w-full [&_[cmdk-root]]:p-1 [&_[cmdk-root]]:bg-background [&_[cmdk-root]]:rounded-md [&_[cmdk-root]]:overflow-hidden [&_[cmdk-root]]:border [&_[cmdk-root]]:transition-transform [&_[cmdk-root]]:duration-100 [&_[cmdk-root]]:ease-in [&_[cmdk-root]]:outline-none",
            //command input
            "[&_[cmdk-input]]:w-full [&_[cmdk-input]]:text-sm [&_[cmdk-input]]:pt-2 [&_[cmdk-input]]:pr-2 [&_[cmdk-input]]:pb-3 [&_[cmdk-input]]:pl-4 [&_[cmdk-input]]:outline-none [&_[cmdk-input]]:bg-background [&_[cmdk-input]]:border-b-2 [&_[cmdk-input]]:rounded-none",
            // top-badge
            "[&_[current-page-badge]]:h-5 [&_[current-page-badge]]:bg-muted [&_[current-page-badge]]:inline-flex [&_[current-page-badge]]:items-center [&_[current-page-badge]]:px-2 [&_[current-page-badge]]:text-xs [&_[current-page-badge]]:rounded [&_[current-page-badge]]:mt-1 [&_[current-page-badge]]:mr-0 [&_[current-page-badge]]:mb-1 [&_[current-page-badge]]:ml-1 [&_[current-page-badge]]:select-none [&_[current-page-badge]]:capitalize [&_[current-page-badge]]:font-medium",
            //cmdk item
            "[&_[cmdk-item]]:content-visibility-auto [&_[cmdk-item]]:cursor-pointer [&_[cmdk-item]]:h-9 [&_[cmdk-item]]:rounded-lg [&_[cmdk-item]]:text-sm [&_[cmdk-item]]:flex [&_[cmdk-item]]:items-center [&_[cmdk-item]]:gap-2 [&_[cmdk-item]]:px-4 [&_[cmdk-item]]:select-none [&_[cmdk-item][data-selected='true']]:bg-muted [&_[cmdk-item][data-disabled='true']]:cursor-not-allowed [&_[cmdk-item]:active]:bg-red-500 [&_[cmdk-item][cmdk-item]]:mt-1 [&_[cmdk-item]_svg]:h-4 [&_[cmdk-item]_svg]:w-4",
            //& +[cmdk - item] {
            //   margin- top: 4px; !missing
            // }
            "[&_[cmdk-list]]:h-[min(330px,calc(var(--cmdk-list-height)))] [&_[cmdk-list]]:max-h-[400px] [&_[cmdk-list]]:overflow-auto [&_[cmdk-list]]:overscroll-contain [&_[cmdk-list]]:transition [&_[cmdk-list]]:ease-in [cmdk-list]]:duration-100",

            "[&_[sub-shortcuts]]:flex [&_[sub-shortcuts]]:ml-auto [&_[sub-shortcuts]]:gap-2 [&_[sub-shortcuts]_kbd]:text-xs [&_[sub-shortcuts]_kbd]:p-2 [&_[sub-shortcuts]_kbd]:rounded [&_[sub-shortcuts]_kbd]:bg-secondary [&_[sub-shortcuts]_kbd]:border [&_[sub-shortcuts]_kbd]:h-6 [&_[sub-shortcuts]_kbd]:uppercase [&_[sub-shortcuts]_kbd]:grid [&_[sub-shortcuts]_kbd]:place-content-center",


            "[&_[cmdk-separator]]:h-1 [&_[cmdk-separator]]:w-full [&_[cmdk-separator]]:bg-secondary ",

            "[&_[cmdk-group-heading]]:select-none [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:flex [&_[cmdk-group-heading]]:items-center [&_[cmdk-group-heading]]:my-4 [&_[cmdk-group-heading]]:px-4"

          )}>
            {children}
          </Command>
        </Content>
      </DialogPortal>
    </Dialog>
  )
}

export {
  CommandDialog,
}