"use client"

import { useState } from "react"
import { CMSLayout } from "@/components/cms-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Search, Tag, FolderOpen } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "تکنولوژی",
    slug: "technology",
    description: "مقالات مربوط به فناوری و نوآوری",
    articles: 45,
    parent: null,
    color: "#8b5cf6",
  },
  {
    id: 2,
    name: "برنامه‌نویسی",
    slug: "programming",
    description: "آموزش‌های برنامه‌نویسی",
    articles: 32,
    parent: "تکنولوژی",
    color: "#3b82f6",
  },
  {
    id: 3,
    name: "طراحی وب",
    slug: "web-design",
    description: "طراحی و توسعه وب‌سایت",
    articles: 28,
    parent: "تکنولوژی",
    color: "#10b981",
  },
  {
    id: 4,
    name: "اخبار",
    slug: "news",
    description: "آخرین اخبار و رویدادها",
    articles: 67,
    parent: null,
    color: "#f97316",
  },
  {
    id: 5,
    name: "ورزش",
    slug: "sports",
    description: "اخبار و مقالات ورزشی",
    articles: 23,
    parent: null,
    color: "#eab308",
  },
]

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredCategories = categories.filter(
    (category) => category.name.includes(searchTerm) || category.description.includes(searchTerm),
  )

  return (
    <CMSLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">مدیریت دسته‌بندی‌ها</h1>
            <p className="text-muted-foreground">سازماندهی و مدیریت دسته‌بندی‌های محتوا</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                دسته‌بندی جدید
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>ایجاد دسته‌بندی جدید</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">نام دسته‌بندی</Label>
                  <Input id="name" placeholder="نام دسته‌بندی را وارد کنید" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">نامک (Slug)</Label>
                  <Input id="slug" placeholder="category-slug" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">توضیحات</Label>
                  <Textarea id="description" placeholder="توضیحات دسته‌بندی" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parent">دسته‌بندی والد</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب دسته‌بندی والد" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">بدون والد</SelectItem>
                      <SelectItem value="technology">تکنولوژی</SelectItem>
                      <SelectItem value="news">اخبار</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="color">رنگ</Label>
                  <Input id="color" type="color" defaultValue="#8b5cf6" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    انصراف
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>ایجاد دسته‌بندی</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="جستجو در دسته‌بندی‌ها..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }} />
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{category.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Tag className="w-4 h-4" />
                    <span>{category.articles} مقاله</span>
                  </div>
                  {category.parent && (
                    <Badge variant="secondary" className="text-xs">
                      <FolderOpen className="w-3 h-3 ml-1" />
                      {category.parent}
                    </Badge>
                  )}
                </div>

                <div className="text-xs text-muted-foreground">
                  نامک: <code className="bg-muted px-1 py-0.5 rounded">{category.slug}</code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <Tag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">دسته‌بندی یافت نشد</h3>
              <p className="text-muted-foreground mb-4">هیچ دسته‌بندی با این جستجو یافت نشد</p>
              <Button onClick={() => setSearchTerm("")}>نمایش همه دسته‌بندی‌ها</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </CMSLayout>
  )
}
