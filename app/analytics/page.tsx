"use client"

import { CMSLayout } from "@/components/cms-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, TrendingDown, Users, Eye, MessageSquare, Download, Calendar } from "lucide-react"

const visitData = [
  { name: "شنبه", visits: 1200, users: 800 },
  { name: "یکشنبه", visits: 1900, users: 1200 },
  { name: "دوشنبه", visits: 800, users: 600 },
  { name: "سه‌شنبه", visits: 1600, users: 1000 },
  { name: "چهارشنبه", visits: 2200, users: 1400 },
  { name: "پنج‌شنبه", visits: 1800, users: 1100 },
  { name: "جمعه", visits: 2400, users: 1500 },
]

const contentData = [
  { name: "تکنولوژی", value: 35, color: "#8b5cf6" },
  { name: "اخبار", value: 25, color: "#3b82f6" },
  { name: "ورزش", value: 20, color: "#10b981" },
  { name: "سرگرمی", value: 15, color: "#f97316" },
  { name: "سایر", value: 5, color: "#eab308" },
]

const topArticles = [
  { title: "آموزش React و Next.js", views: 15420, comments: 89, trend: "up" },
  { title: "بهترین روش‌های SEO", views: 12350, comments: 67, trend: "up" },
  { title: "طراحی UI/UX مدرن", views: 9870, comments: 45, trend: "down" },
  { title: "هوش مصنوعی در وب", views: 8650, comments: 34, trend: "up" },
  { title: "امنیت وب‌سایت", views: 7230, comments: 28, trend: "down" },
]

export default function AnalyticsPage() {
  return (
    <CMSLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">آمار و گزارشات</h1>
            <p className="text-muted-foreground">تحلیل عملکرد سایت و محتوا</p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="7days">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">7 روز گذشته</SelectItem>
                <SelectItem value="30days">30 روز گذشته</SelectItem>
                <SelectItem value="90days">90 روز گذشته</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              دانلود گزارش
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">کل بازدیدها</p>
                  <p className="text-2xl font-bold">24,567</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">+12.5%</span>
                  </div>
                </div>
                <Eye className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">کاربران منحصر به فرد</p>
                  <p className="text-2xl font-bold">8,432</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">+8.2%</span>
                  </div>
                </div>
                <Users className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">کل نظرات</p>
                  <p className="text-2xl font-bold">1,234</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingDown className="w-4 h-4 text-red-500" />
                    <span className="text-red-500">-3.1%</span>
                  </div>
                </div>
                <MessageSquare className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">میانگین زمان بازدید</p>
                  <p className="text-2xl font-bold">3:42</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">+5.7%</span>
                  </div>
                </div>
                <Calendar className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="traffic" className="space-y-4">
          <TabsList>
            <TabsTrigger value="traffic">ترافیک سایت</TabsTrigger>
            <TabsTrigger value="content">محتوا</TabsTrigger>
            <TabsTrigger value="users">کاربران</TabsTrigger>
          </TabsList>

          <TabsContent value="traffic" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>بازدیدها و کاربران</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={visitData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="visits" fill="#8b5cf6" name="بازدیدها" />
                      <Bar dataKey="users" fill="#3b82f6" name="کاربران" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>توزیع محتوا</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={contentData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {contentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>محبوب‌ترین مقالات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topArticles.map((article, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-medium">{article.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {article.views.toLocaleString()} بازدید
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              {article.comments} نظر
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge variant={article.trend === "up" ? "default" : "secondary"}>
                        {article.trend === "up" ? (
                          <TrendingUp className="w-3 h-3 ml-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 ml-1" />
                        )}
                        {article.trend === "up" ? "صعودی" : "نزولی"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>رشد کاربران</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={visitData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#8b5cf6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </CMSLayout>
  )
}
