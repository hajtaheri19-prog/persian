"use client"

import { useState } from "react"
import { CMSLayout } from "@/components/cms-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Save, Eye, Send, ImageIcon, Link, Bold, Italic, List, Quote, Code, Sparkles } from "lucide-react"

export default function CreatePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [isPublished, setIsPublished] = useState(false)
  const [featuredImage, setFeaturedImage] = useState("")

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <CMSLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">ایجاد محتوای جدید</h1>
            <p className="text-muted-foreground">نوشتن و انتشار مقاله یا خبر جدید</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 bg-transparent">
              <Eye className="w-4 h-4" />
              پیش‌نمایش
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Save className="w-4 h-4" />
              ذخیره پیش‌نویس
            </Button>
            <Button className="gap-2">
              <Send className="w-4 h-4" />
              انتشار
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>محتوای اصلی</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">عنوان مقاله</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="عنوان جذاب برای مقاله خود وارد کنید"
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">خلاصه مقاله</Label>
                  <Textarea
                    id="excerpt"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="خلاصه‌ای کوتاه از محتوای مقاله"
                    rows={3}
                  />
                </div>

                {/* Editor Toolbar */}
                <div className="border rounded-lg">
                  <div className="flex items-center gap-1 p-2 border-b bg-muted/50">
                    <Button size="sm" variant="ghost">
                      <Bold className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Italic className="w-4 h-4" />
                    </Button>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Button size="sm" variant="ghost">
                      <List className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Quote className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Code className="w-4 h-4" />
                    </Button>
                    <div className="w-px h-6 bg-border mx-1" />
                    <Button size="sm" variant="ghost">
                      <ImageIcon className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Link className="w-4 h-4" />
                    </Button>
                    <div className="flex-1" />
                    <Button size="sm" variant="ghost" className="gap-2">
                      <Sparkles className="w-4 h-4" />
                      هوش مصنوعی
                    </Button>
                  </div>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="محتوای مقاله خود را اینجا بنویسید..."
                    className="min-h-[400px] border-0 resize-none focus-visible:ring-0"
                  />
                </div>
              </CardContent>
            </Card>

            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle>تنظیمات SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta-title">عنوان متا</Label>
                  <Input id="meta-title" placeholder="عنوان برای موتورهای جستجو" />
                  <p className="text-xs text-muted-foreground">توصیه: حداکثر 60 کاراکتر</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta-description">توضیحات متا</Label>
                  <Textarea id="meta-description" placeholder="توضیحات برای موتورهای جستجو" rows={3} />
                  <p className="text-xs text-muted-foreground">توصیه: حداکثر 160 کاراکتر</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <Card>
              <CardHeader>
                <CardTitle>تنظیمات انتشار</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="published">انتشار فوری</Label>
                  <Switch id="published" checked={isPublished} onCheckedChange={setIsPublished} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">دسته‌بندی</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب دسته‌بندی" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">تکنولوژی</SelectItem>
                      <SelectItem value="programming">برنامه‌نویسی</SelectItem>
                      <SelectItem value="web-design">طراحی وب</SelectItem>
                      <SelectItem value="news">اخبار</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">نویسنده</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب نویسنده" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">یوسف احمدی</SelectItem>
                      <SelectItem value="editor">سارا محمدی</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publish-date">تاریخ انتشار</Label>
                  <Input id="publish-date" type="datetime-local" />
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card>
              <CardHeader>
                <CardTitle>تصویر شاخص</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuredImage ? (
                  <div className="space-y-2">
                    <img
                      src={featuredImage || "/placeholder.svg"}
                      alt="Featured"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <Button variant="outline" size="sm" onClick={() => setFeaturedImage("")} className="w-full">
                      حذف تصویر
                    </Button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <ImageIcon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">تصویر شاخص انتخاب کنید</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFeaturedImage("/placeholder.svg?height=200&width=300")}
                    >
                      انتخاب تصویر
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>برچسب‌ها</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="برچسب جدید"
                    onKeyPress={(e) => e.key === "Enter" && addTag()}
                  />
                  <Button onClick={addTag} size="sm">
                    افزودن
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                      {tag} ×
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </CMSLayout>
  )
}
