"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Plus, MoreHorizontal, Edit, Trash2, Eye, Calendar, User, Tag } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "راهنمای کامل طراحی UI/UX مدرن",
    author: "علی محمدی",
    category: "طراحی",
    status: "منتشر شده",
    views: 2341,
    comments: 15,
    date: "1403/08/15",
    featured: true,
  },
  {
    id: 2,
    title: "آموزش React و Next.js برای مبتدیان",
    author: "سارا احمدی",
    category: "برنامه‌نویسی",
    status: "پیش‌نویس",
    views: 0,
    comments: 0,
    date: "1403/08/14",
    featured: false,
  },
  {
    id: 3,
    title: "بهترین روش‌های SEO در سال 2024",
    author: "محمد رضایی",
    category: "بازاریابی",
    status: "در حال بررسی",
    views: 1876,
    comments: 8,
    date: "1403/08/13",
    featured: true,
  },
]

export function ArticlesManager() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTab, setSelectedTab] = useState("all")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "منتشر شده":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">منتشر شده</Badge>
      case "پیش‌نویس":
        return <Badge variant="secondary">پیش‌نویس</Badge>
      case "در حال بررسی":
        return <Badge variant="outline">در حال بررسی</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">مدیریت مقالات</h1>
          <p className="text-muted-foreground mt-2">مدیریت و سازماندهی تمام مقالات و اخبار سایت</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4 ml-2" />
          مقاله جدید
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="جستجو در مقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="w-4 h-4 ml-2" />
                  فیلتر
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>همه دسته‌ها</DropdownMenuItem>
                <DropdownMenuItem>طراحی</DropdownMenuItem>
                <DropdownMenuItem>برنامه‌نویسی</DropdownMenuItem>
                <DropdownMenuItem>بازاریابی</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">همه مقالات</TabsTrigger>
          <TabsTrigger value="published">منتشر شده</TabsTrigger>
          <TabsTrigger value="draft">پیش‌نویس</TabsTrigger>
          <TabsTrigger value="review">در حال بررسی</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>لیست مقالات</CardTitle>
              <CardDescription>مدیریت و ویرایش مقالات موجود</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">عنوان</TableHead>
                    <TableHead className="text-right">نویسنده</TableHead>
                    <TableHead className="text-right">دسته‌بندی</TableHead>
                    <TableHead className="text-right">وضعیت</TableHead>
                    <TableHead className="text-right">بازدید</TableHead>
                    <TableHead className="text-right">تاریخ</TableHead>
                    <TableHead className="text-right">عملیات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <div>
                            <p className="font-medium text-foreground">{article.title}</p>
                            {article.featured && (
                              <Badge variant="outline" className="mt-1 text-xs">
                                ویژه
                              </Badge>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{article.author}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <Tag className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{article.category}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(article.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{article.views.toLocaleString()}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{article.date}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 ml-2" />
                              مشاهده
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="w-4 h-4 ml-2" />
                              ویرایش
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="w-4 h-4 ml-2" />
                              حذف
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
