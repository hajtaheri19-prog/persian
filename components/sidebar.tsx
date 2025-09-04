"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  BarChart3,
  PlusCircle,
  ImageIcon,
  Tags,
  MessageSquare,
  Bell,
  Shield,
  Database,
  Palette,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const menuItems = [
  {
    title: "داشبورد",
    icon: LayoutDashboard,
    href: "/",
    badge: null,
  },
  {
    title: "مقالات و اخبار",
    icon: FileText,
    href: "/articles",
    badge: "24",
  },
  {
    title: "ایجاد محتوا",
    icon: PlusCircle,
    href: "/create",
    badge: null,
  },
  {
    title: "رسانه‌ها",
    icon: ImageIcon,
    href: "/media",
    badge: "156",
  },
  {
    title: "دسته‌بندی‌ها",
    icon: Tags,
    href: "/categories",
    badge: null,
  },
  {
    title: "نظرات",
    icon: MessageSquare,
    href: "/comments",
    badge: "8",
  },
  {
    title: "کاربران",
    icon: Users,
    href: "/users",
    badge: "12",
  },
  {
    title: "آمار و گزارشات",
    icon: BarChart3,
    href: "/analytics",
    badge: null,
  },
  {
    title: "اعلان‌ها",
    icon: Bell,
    href: "/notifications",
    badge: "3",
  },
  {
    title: "امنیت",
    icon: Shield,
    href: "/security",
    badge: null,
  },
  {
    title: "پایگاه داده",
    icon: Database,
    href: "/database",
    badge: null,
  },
  {
    title: "ظاهر سایت",
    icon: Palette,
    href: "/appearance",
    badge: null,
  },
  {
    title: "تنظیمات عمومی",
    icon: Settings,
    href: "/settings",
    badge: null,
  },
  {
    title: "مدیریت سایت",
    icon: Globe,
    href: "/site-management",
    badge: null,
  },
]

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "bg-sidebar border-l border-sidebar-border transition-all duration-300 ease-in-out",
        isOpen ? "w-72" : "w-16",
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {isOpen && (
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ن</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-sidebar-foreground">نیگاردیپ</h2>
                <p className="text-xs text-muted-foreground">پنل مدیریت</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {isOpen ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
                      !isOpen && "px-2",
                    )}
                  >
                    <Icon className={cn("h-5 w-5", isOpen && "ml-3")} />
                    {isOpen && (
                      <>
                        <span className="flex-1 text-right">{item.title}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </>
                    )}
                  </Button>
                </Link>
              )
            })}
          </nav>
        </ScrollArea>

        {/* Footer */}
        {isOpen && (
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-medium">ی</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-sidebar-foreground">یوسف احمدی</p>
                <p className="text-xs text-muted-foreground">مدیر کل</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
