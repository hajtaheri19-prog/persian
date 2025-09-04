"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText, Users, Eye, MessageSquare, TrendingUp, Calendar, Clock, ArrowUpRight, Plus } from "lucide-react"

const stats = [
  {
    title: "کل مقالات",
    value: "247",
    change: "+12%",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    title: "کاربران فعال",
    value: "1,234",
    change: "+8%",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "بازدید امروز",
    value: "8,432",
    change: "+23%",
    icon: Eye,
    color: "text-purple-600",
  },
  {
    title: "نظرات جدید",
    value: "56",
    change: "+5%",
    icon: MessageSquare,
    color: "text-orange-600",
  },
]

const recentArticles = [
  {
    title: "راهنمای کامل طراحی UI/UX مدرن",
    status: "منتشر شده",
    views: "2,341",
    date: "2 ساعت پیش",
    author: "علی محمدی",
  },
  {
    title: "آموزش React و Next.js برای مبتدیان",
    status: "پیش‌نویس",
    views: "0",
    date: "5 ساعت پیش",
    author: "سارا احمدی",
  },
  {
    title: "بهترین روش‌های SEO در سال 2024",
    status: "در حال بررسی",
    views: "1,876",
    date: "1 روز پیش",
    author: "محمد رضایی",
  },
]

const quickActions = [
  { title: "مقاله جدید", icon: FileText, href: "/create" },
  { title: "کاربر جدید", icon: Users, href: "/users/create" },
  { title: "دسته‌بندی جدید", icon: Plus, href: "/categories/create" },
  { title: "تنظیمات سایت", icon: Calendar, href: "/settings" },
]

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">داشبورد</h1>
          <p className="text-muted-foreground mt-2">خوش آمدید! مروری بر وضعیت کلی سایت شما</p>
        </div>
        <div className="flex items-center space-x-3 space-x-reverse">
          <Badge variant="secondary" className="text-sm">
            <Clock className="w-4 h-4 ml-1" />
            آخرین بروزرسانی: 5 دقیقه پیش
          </Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <TrendingUp className="h-3 w-3 ml-1 text-green-600" />
                  {stat.change} نسبت به ماه گذشته
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Articles */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              آخرین مقالات
              <Button variant="outline" size="sm">
                مشاهده همه
                <ArrowUpRight className="w-4 h-4 mr-1" />
              </Button>
            </CardTitle>
            <CardDescription>مقالات اخیراً ایجاد شده یا ویرایش شده</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentArticles.map((article, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{article.title}</h4>
                    <div className="flex items-center space-x-4 space-x-reverse text-sm text-muted-foreground">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                      <span className="flex items-center">
                        <Eye className="w-3 h-3 ml-1" />
                        {article.views}
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      article.status === "منتشر شده"
                        ? "default"
                        : article.status === "پیش‌نویس"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {article.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & Analytics */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>عملیات سریع</CardTitle>
              <CardDescription>دسترسی سریع به عملیات پرکاربرد</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action) => {
                  const Icon = action.icon
                  return (
                    <Button
                      key={action.title}
                      variant="outline"
                      className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="text-xs">{action.title}</span>
                    </Button>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Performance */}
          <Card>
            <CardHeader>
              <CardTitle>عملکرد سایت</CardTitle>
              <CardDescription>آمار عملکرد در 30 روز گذشته</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>سرعت بارگذاری</span>
                  <span className="font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>امتیاز SEO</span>
                  <span className="font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>رضایت کاربران</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle>فعالیت‌های اخیر</CardTitle>
          <CardDescription>آخرین فعالیت‌های انجام شده در سیستم</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: 'مقاله "راهنمای React" منتشر شد', user: "علی محمدی", time: "10 دقیقه پیش", type: "publish" },
              { action: 'کاربر جدید "سارا احمدی" ثبت‌نام کرد', user: "سیستم", time: "25 دقیقه پیش", type: "user" },
              { action: 'نظر جدید در مقاله "آموزش CSS"', user: "محمد رضایی", time: "1 ساعت پیش", type: "comment" },
              { action: "تنظیمات سایت بروزرسانی شد", user: "یوسف احمدی", time: "2 ساعت پیش", type: "settings" },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 space-x-reverse p-3 border border-border rounded-lg"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.type === "publish"
                      ? "bg-green-500"
                      : activity.type === "user"
                        ? "bg-blue-500"
                        : activity.type === "comment"
                          ? "bg-yellow-500"
                          : "bg-purple-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
