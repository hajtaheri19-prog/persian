"use client"

import { useState } from "react"
import { CMSLayout } from "@/components/cms-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Check, X, Settings, Mail, MessageSquare, Shield, User } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "comment",
    title: "نظر جدید",
    message: "کاربر احمد رضایی نظری جدید ثبت کرده است",
    time: "5 دقیقه پیش",
    read: false,
    icon: MessageSquare,
  },
  {
    id: 2,
    type: "user",
    title: "کاربر جدید",
    message: "کاربر جدیدی با نام فاطمه احمدی ثبت نام کرده است",
    time: "1 ساعت پیش",
    read: false,
    icon: User,
  },
  {
    id: 3,
    type: "security",
    title: "تلاش ورود مشکوک",
    message: "تلاش ورود ناموفق از IP: 192.168.1.100",
    time: "2 ساعت پیش",
    read: true,
    icon: Shield,
  },
  {
    id: 4,
    type: "email",
    title: "ایمیل ارسال شد",
    message: "خبرنامه هفتگی با موفقیت ارسال شد",
    time: "3 ساعت پیش",
    read: true,
    icon: Mail,
  },
]

export default function NotificationsPage() {
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    commentNotifications: true,
    userRegistrations: true,
    securityAlerts: true,
  })

  return (
    <CMSLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">اعلان‌ها</h1>
            <p className="text-muted-foreground">مدیریت اعلان‌ها و تنظیمات آن‌ها</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 bg-transparent">
              <Check className="w-4 h-4" />
              علامت‌گذاری همه به عنوان خوانده شده
            </Button>
            <Button className="gap-2">
              <Settings className="w-4 h-4" />
              تنظیمات اعلان‌ها
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">همه اعلان‌ها</TabsTrigger>
            <TabsTrigger value="unread">خوانده نشده</TabsTrigger>
            <TabsTrigger value="settings">تنظیمات</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="space-y-3">
              {notifications.map((notification) => {
                const Icon = notification.icon
                return (
                  <Card
                    key={notification.id}
                    className={`${!notification.read ? "border-primary/50 bg-primary/5" : ""}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-2 rounded-lg ${!notification.read ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{notification.title}</h3>
                            <div className="flex items-center gap-2">
                              {!notification.read && (
                                <Badge variant="default" className="text-xs">
                                  جدید
                                </Badge>
                              )}
                              <span className="text-sm text-muted-foreground">{notification.time}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                        <div className="flex gap-1">
                          {!notification.read && (
                            <Button size="sm" variant="ghost">
                              <Check className="w-4 h-4" />
                            </Button>
                          )}
                          <Button size="sm" variant="ghost" className="text-destructive">
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            <div className="space-y-3">
              {notifications
                .filter((n) => !n.read)
                .map((notification) => {
                  const Icon = notification.icon
                  return (
                    <Card key={notification.id} className="border-primary/50 bg-primary/5">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{notification.title}</h3>
                              <div className="flex items-center gap-2">
                                <Badge variant="default" className="text-xs">
                                  جدید
                                </Badge>
                                <span className="text-sm text-muted-foreground">{notification.time}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>تنظیمات اعلان‌ها</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>اعلان‌های ایمیل</Label>
                    <p className="text-sm text-muted-foreground">دریافت اعلان‌ها از طریق ایمیل</p>
                  </div>
                  <Switch
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(checked) =>
                      setNotificationSettings((prev) => ({ ...prev, emailNotifications: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>اعلان‌های فوری</Label>
                    <p className="text-sm text-muted-foreground">دریافت اعلان‌های فوری در مرورگر</p>
                  </div>
                  <Switch
                    checked={notificationSettings.pushNotifications}
                    onCheckedChange={(checked) =>
                      setNotificationSettings((prev) => ({ ...prev, pushNotifications: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>نظرات جدید</Label>
                    <p className="text-sm text-muted-foreground">اطلاع از نظرات جدید کاربران</p>
                  </div>
                  <Switch
                    checked={notificationSettings.commentNotifications}
                    onCheckedChange={(checked) =>
                      setNotificationSettings((prev) => ({ ...prev, commentNotifications: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>ثبت نام کاربران</Label>
                    <p className="text-sm text-muted-foreground">اطلاع از ثبت نام کاربران جدید</p>
                  </div>
                  <Switch
                    checked={notificationSettings.userRegistrations}
                    onCheckedChange={(checked) =>
                      setNotificationSettings((prev) => ({ ...prev, userRegistrations: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>هشدارهای امنیتی</Label>
                    <p className="text-sm text-muted-foreground">اطلاع از مسائل امنیتی و تلاش‌های ورود مشکوک</p>
                  </div>
                  <Switch
                    checked={notificationSettings.securityAlerts}
                    onCheckedChange={(checked) =>
                      setNotificationSettings((prev) => ({ ...prev, securityAlerts: checked }))
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </CMSLayout>
  )
}
