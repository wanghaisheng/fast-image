"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "./icons"
import { ThemeToggle } from "./theme-toggle"
import { ThemeToggleSheet } from "./theme-toggle-sheet"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"

interface MainButtonProps {
  items?: NavItem[]
}

export const MenuWithButton: React.FC<MainButtonProps> = ({ items }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="secondary"
            size="sm"
            className="mr-2 h-8 px-1.5 md:hidden"
          >
            <Menu className="size-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <a href="/" className="flex items-center">
            <Icons.logo className="size-8"></Icons.logo>
            <span className="ml-2 font-bold">BoostedPic</span>
          </a>

          <ScrollArea className="my-4 h-[calc(100vh-9rem)] pb-10 pl-2">
            <div className="mt-2 flex flex-col space-y-3">
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      className="text-muted-foreground"
                      key={index}
                      href={item.href}
                      target={item.external ? "_blank" : ""}
                    >
                      {item.title}
                    </Link>
                  )
              )}

              <Separator></Separator>

              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground"
                role="menuitem"
              >
                <Icons.gitHub className="size-4" />
                GitHub
              </Link>

              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground"
                role="menuitem"
              >
                <Icons.X className="size-4 fill-muted-foreground" />X
                {"(Twitter)"}
              </Link>

              <Link
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground"
                role="menuitem"
              >
                <Icons.Telegram className="size-4 fill-muted-foreground" />
                Telegram
              </Link>
            </div>
          </ScrollArea>

          <ThemeToggleSheet></ThemeToggleSheet>
        </SheetContent>
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild></DropdownMenuTrigger>
        <DropdownMenuContent align="end"></DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
