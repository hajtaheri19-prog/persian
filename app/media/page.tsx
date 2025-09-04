"use client"

import { useState } from "react"
import { CMSLayout } from "@/components/cms-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Search, Grid, List, Download, Trash2, Eye, Edit } from "lucide-react"

const mediaFiles = [
  {
    id: 1,
    name: "hero-image.jpg",
    type: "image",
    size: "2.4 MB",
    date: "1403/08/15",
    url: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "article-banner.png",
    type: "image",
    size: "1.8 MB",
    date: "1403/08/14",
    url: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "video-intro.mp4",
    type: "video",
    size: "15.2 MB",
    date: "1403/08/13",
    url: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "document.pdf",
    type: "document",
    size: "890 KB",
    date: "1403/08/12",
    url: "/placeholder.svg?height=200&width=300",
  },
]

export default function MediaPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedFiles, setSelectedFiles] = useState<number[]>([])

  return (
    <CMSLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">مدیریت رسانه‌ها</h1>
            <p className="text-muted-foreground">مدیریت تصاویر، ویدیوها و فایل‌های سایت</p>
          </div>
          <Button className="gap-2">
            <Upload className="w-4 h-4" />
            آپلود فایل جدید
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">همه فایل‌ها</TabsTrigger>
              <TabsTrigger value="images">تصاویر</TabsTrigger>
              <TabsTrigger value="videos">ویدیوها</TabsTrigger>
              <TabsTrigger value="documents">اسناد</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="جستجو در فایل‌ها..." className="pr-10 w-64" />
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="مرتب‌سازی" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">تاریخ</SelectItem>
                  <SelectItem value="name">نام</SelectItem>
                  <SelectItem value="size">اندازه</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <TabsContent value="all" className="space-y-4">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {mediaFiles.map((file) => (
                  <Card key={file.id} className="group hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-video bg-muted rounded-lg mb-3 overflow-hidden">
                        <img
                          src={file.url || "/placeholder.svg"}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium truncate">{file.name}</h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <Badge variant="secondary">{file.type}</Badge>
                          <span>{file.size}</span>
                        </div>
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" variant="ghost">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {mediaFiles.map((file) => (
                      <div key={file.id} className="flex items-center justify-between p-4 hover:bg-muted/50">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-muted rounded-lg overflow-hidden">
                            <img
                              src={file.url || "/placeholder.svg"}
                              alt={file.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{file.name}</h3>
                            <p className="text-sm text-muted-foreground">{file.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary">{file.type}</Badge>
                          <span className="text-sm text-muted-foreground">{file.size}</span>
                          <div className="flex items-center gap-1">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-destructive">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </CMSLayout>
  )
}
