"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import {
  Globe,
  Shield,
  Mail,
  Database,
  Palette,
  FileText,
  Save,
  RefreshCw,
  Download,
  Upload,
  AlertTriangle,
  CheckCircle,
  Settings,
  Eye,
  Trash2,
} from "lucide-react"

export function SettingsManager() {
  const [settings, setSettings] = useState({
    siteName: "نیگاردیپ",
    siteDescription: "سایت اخبار و مقالات تخصصی",
    siteUrl: "https://www.nigardip.site",
    adminEmail: "admin@nigardip.site",
    language: "fa",
    timezone: "Asia/Tehran",
    commentsEnabled: true,
    registrationEnabled: true,
    emailNotifications: true,
    seoEnabled: true,
    maintenanceMode: false,
  })

  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle")
  const [backupProgress, setBackupProgress] = useState(0)
  const [isBackingUp, setIsBackingUp] = useState(false)

  const handleSave = async () => {
    setSaveStatus("saving")
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Settings saved:", settings)
      setSaveStatus("success")
      setTimeout(() => setSaveStatus("idle"), 3000)
    } catch (error) {
      setSaveStatus("error")
      setTimeout(() => setSaveStatus("idle"), 3000)
    }
  }

  const handleBackup = async () => {
    setIsBackingUp(true)
    setBackupProgress(0)

    // Simulate backup progress
    const interval = setInterval(() => {
      setBackupProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsBackingUp(false)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const handleReset = () => {
    setSettings({
      siteName: "نیگاردیپ",
      siteDescription: "سایت اخبار و مقالات تخصصی",
      siteUrl: "https://www.nigardip.site",
      adminEmail: "admin@nigardip.site",
      language: "fa",
      timezone: "Asia/Tehran",
      commentsEnabled: true,
      registrationEnabled: true,
      emailNotifications: true,
      seoEnabled: true,
      maintenanceMode: false,
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">تنظیمات سیستم</h1>
          <p className="text-muted-foreground mt-2">مدیریت تنظیمات کلی سایت و سیستم مدیریت محتوا</p>
        </div>
        <div className="flex items-center space-x-3 space-x-reverse">
          <Button variant="outline" onClick={handleBackup} disabled={isBackingUp} className="gap-2 bg-transparent">
            <Download className="w-4 h-4" />
            {isBackingUp ? "در حال پشتیبان‌گیری..." : "پشتیبان‌گیری"}
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Upload className="w-4 h-4" />
            بازیابی
          </Button>
          <Button variant="outline" onClick={handleReset} className="gap-2 bg-transparent">
            <RefreshCw className="w-4 h-4" />
            بازنشانی
          </Button>
          <Button
            onClick={handleSave}
            disabled={saveStatus === "saving"}
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            <Save className="w-4 h-4" />
            {saveStatus === "saving" ? "در حال ذخیره..." : "ذخیره تغییرات"}
          </Button>
        </div>
      </div>

      {saveStatus === "success" && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">تنظیمات با موفقیت ذخیره شد.</AlertDescription>
        </Alert>
      )}

      {saveStatus === "error" && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>خطا در ذخیره تنظیمات. لطفاً دوباره تلاش کنید.</AlertDescription>
        </Alert>
      )}

      {isBackingUp && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>در حال ایجاد پشتیبان...</span>
                <span>{backupProgress}%</span>
              </div>
              <Progress value={backupProgress} className="w-full" />
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general" className="flex items-center space-x-2 space-x-reverse">
            <Globe className="w-4 h-4" />
            <span>عمومی</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center space-x-2 space-x-reverse">
            <Shield className="w-4 h-4" />
            <span>امنیت</span>
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center space-x-2 space-x-reverse">
            <Mail className="w-4 h-4" />
            <span>ایمیل</span>
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center space-x-2 space-x-reverse">
            <FileText className="w-4 h-4" />
            <span>محتوا</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center space-x-2 space-x-reverse">
            <Palette className="w-4 h-4" />
            <span>ظاهر</span>
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center space-x-2 space-x-reverse">
            <Database className="w-4 h-4" />
            <span>پیشرفته</span>
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>اطلاعات کلی سایت</CardTitle>
                <CardDescription>تنظیمات اساسی و اطلاعات عمومی سایت</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">نام سایت</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="siteUrl">آدرس سایت</Label>
                    <Input
                      id="siteUrl"
                      value={settings.siteUrl}
                      onChange={(e) => setSettings({ ...settings, siteUrl: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siteDescription">توضیحات سایت</Label>
                  <Textarea
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="language">زبان پیش‌فرض</Label>
                    <Select
                      value={settings.language}
                      onValueChange={(value) => setSettings({ ...settings, language: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fa">فارسی</SelectItem>
                        <SelectItem value="en">انگلیسی</SelectItem>
                        <SelectItem value="ar">عربی</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">منطقه زمانی</Label>
                    <Select
                      value={settings.timezone}
                      onValueChange={(value) => setSettings({ ...settings, timezone: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Asia/Tehran">تهران (UTC+3:30)</SelectItem>
                        <SelectItem value="UTC">UTC (UTC+0)</SelectItem>
                        <SelectItem value="Europe/London">لندن (UTC+0)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>تنظیمات عملکردی</CardTitle>
                <CardDescription>فعال یا غیرفعال کردن قابلیت‌های مختلف سایت</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>نظرات کاربران</Label>
                    <p className="text-sm text-muted-foreground">اجازه ثبت نظر برای کاربران</p>
                  </div>
                  <Switch
                    checked={settings.commentsEnabled}
                    onCheckedChange={(checked) => setSettings({ ...settings, commentsEnabled: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>ثبت‌نام کاربران</Label>
                    <p className="text-sm text-muted-foreground">اجازه ثبت‌نام کاربران جدید</p>
                  </div>
                  <Switch
                    checked={settings.registrationEnabled}
                    onCheckedChange={(checked) => setSettings({ ...settings, registrationEnabled: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>بهینه‌سازی SEO</Label>
                    <p className="text-sm text-muted-foreground">فعال‌سازی ابزارهای SEO خودکار</p>
                  </div>
                  <Switch
                    checked={settings.seoEnabled}
                    onCheckedChange={(checked) => setSettings({ ...settings, seoEnabled: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>حالت تعمیر</Label>
                    <p className="text-sm text-muted-foreground">فعال‌سازی حالت تعمیر سایت</p>
                  </div>
                  <Switch
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => setSettings({ ...settings, maintenanceMode: checked })}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>تنظیمات امنیتی</CardTitle>
                <CardDescription>مدیریت امنیت و دسترسی‌های سیستم</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="adminEmail">ایمیل مدیر سیستم</Label>
                  <Input
                    id="adminEmail"
                    type="email"
                    value={settings.adminEmail}
                    onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">سیاست رمز عبور</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="minPasswordLength">حداقل طول رمز عبور</Label>
                      <Input id="minPasswordLength" type="number" defaultValue="8" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passwordExpiry">انقضای رمز عبور (روز)</Label>
                      <Input id="passwordExpiry" type="number" defaultValue="90" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>احراز هویت دو مرحله‌ای</Label>
                      <p className="text-sm text-muted-foreground">فعال‌سازی 2FA برای حساب‌های مدیریت</p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">مدیریت نشست‌ها</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sessionTimeout">مدت زمان نشست (دقیقه)</Label>
                      <Input id="sessionTimeout" type="number" defaultValue="30" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxLoginAttempts">حداکثر تلاش ورود</Label>
                      <Input id="maxLoginAttempts" type="number" defaultValue="5" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">سطوح دسترسی</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">مدیر کل</p>
                        <p className="text-sm text-muted-foreground">دسترسی کامل به همه بخش‌ها</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-100 text-red-800">کامل</Badge>
                        <Button size="sm" variant="ghost">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">نویسنده</p>
                        <p className="text-sm text-muted-foreground">ایجاد و ویرایش مقالات</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-100 text-blue-800">محدود</Badge>
                        <Button size="sm" variant="ghost">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">ویراستار</p>
                        <p className="text-sm text-muted-foreground">بررسی و تأیید محتوا</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800">متوسط</Badge>
                        <Button size="sm" variant="ghost">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>تنظیمات ایمیل</CardTitle>
              <CardDescription>پیکربندی سرویس ایمیل و اعلان‌ها</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>اعلان‌های ایمیلی</Label>
                  <p className="text-sm text-muted-foreground">ارسال اعلان‌ها از طریق ایمیل</p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">پیکربندی SMTP</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="smtpHost">سرور SMTP</Label>
                    <Input id="smtpHost" placeholder="smtp.gmail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpPort">پورت SMTP</Label>
                    <Input id="smtpPort" placeholder="587" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="smtpUser">نام کاربری</Label>
                    <Input id="smtpUser" placeholder="your-email@gmail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpPass">رمز عبور</Label>
                    <Input id="smtpPass" type="password" placeholder="••••••••" />
                  </div>
                </div>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Mail className="w-4 h-4" />
                  تست اتصال
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">قالب‌های ایمیل</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <p className="font-medium">خوش‌آمدگویی</p>
                      <p className="text-sm text-muted-foreground">ایمیل خوش‌آمدگویی کاربران جدید</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <p className="font-medium">بازیابی رمز عبور</p>
                      <p className="text-sm text-muted-foreground">ایمیل بازیابی رمز عبور</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Settings */}
        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>تنظیمات محتوا</CardTitle>
              <CardDescription>مدیریت نحوه نمایش و سازماندهی محتوا</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="postsPerPage">تعداد مقاله در هر صفحه</Label>
                  <Input id="postsPerPage" type="number" defaultValue="10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerptLength">طول خلاصه مقاله</Label>
                  <Input id="excerptLength" type="number" defaultValue="150" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="defaultCategory">دسته‌بندی پیش‌فرض</Label>
                <Select defaultValue="general">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">عمومی</SelectItem>
                    <SelectItem value="tech">فناوری</SelectItem>
                    <SelectItem value="design">طراحی</SelectItem>
                    <SelectItem value="business">کسب و کار</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">تنظیمات انتشار</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تأیید خودکار مقالات</Label>
                    <p className="text-sm text-muted-foreground">انتشار خودکار مقالات بدون نیاز به تأیید</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تأیید خودکار نظرات</Label>
                    <p className="text-sm text-muted-foreground">نمایش خودکار نظرات بدون نیاز به تأیید</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">فیلتر محتوا</h4>
                <div className="space-y-2">
                  <Label htmlFor="bannedWords">کلمات ممنوع</Label>
                  <Textarea id="bannedWords" placeholder="کلمات ممنوع را با کاما جدا کنید" rows={3} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>تنظیمات ظاهری</CardTitle>
              <CardDescription>شخصی‌سازی ظاهر و رابط کاربری سایت</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>تم رنگی</Label>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 border border-border rounded-lg cursor-pointer hover:bg-muted">
                    <div className="w-full h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-2"></div>
                    <p className="text-sm text-center">آبی-بنفش</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg cursor-pointer hover:bg-muted">
                    <div className="w-full h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded mb-2"></div>
                    <p className="text-sm text-center">سبز-فیروزه‌ای</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg cursor-pointer hover:bg-muted">
                    <div className="w-full h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded mb-2"></div>
                    <p className="text-sm text-center">خاکستری تیره</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">لوگو و برندینگ</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>لوگوی سایت</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">آپلود لوگو</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>فاویکون</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">آپلود فاویکون</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">فونت‌ها</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="primaryFont">فونت اصلی</Label>
                    <Select defaultValue="vazir">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vazir">وزیر</SelectItem>
                        <SelectItem value="iran-sans">ایران سنس</SelectItem>
                        <SelectItem value="tahoma">تاهوما</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="headingFont">فونت عناوین</Label>
                    <Select defaultValue="vazir-bold">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vazir-bold">وزیر ضخیم</SelectItem>
                        <SelectItem value="iran-sans-bold">ایران سنس ضخیم</SelectItem>
                        <SelectItem value="yekan">یکان</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="customCss">CSS سفارشی</Label>
                <Textarea id="customCss" placeholder="/* CSS سفارشی خود را اینجا بنویسید */" rows={6} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Settings */}
        <TabsContent value="advanced">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>تنظیمات پیشرفته</CardTitle>
                <CardDescription>تنظیمات فنی و پیشرفته سیستم</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="cacheTimeout">مدت زمان کش (ثانیه)</Label>
                    <Input id="cacheTimeout" type="number" defaultValue="3600" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxFileSize">حداکثر اندازه فایل (MB)</Label>
                    <Input id="maxFileSize" type="number" defaultValue="10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="backupPath">مسیر پشتیبان‌گیری</Label>
                  <Input id="backupPath" defaultValue="/backups" />
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">مدیریت پایگاه داده</h4>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Database className="w-4 h-4" />
                      بهینه‌سازی جداول
                    </Button>
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <RefreshCw className="w-4 h-4" />
                      پاک‌سازی کش
                    </Button>
                    <Button variant="outline" className="gap-2 text-destructive bg-transparent">
                      <Trash2 className="w-4 h-4" />
                      پاک‌سازی لاگ‌ها
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">API و وب‌سرویس‌ها</h4>
                  <div className="space-y-2">
                    <Label htmlFor="apiKey">کلید API</Label>
                    <div className="flex gap-2">
                      <Input id="apiKey" type="password" defaultValue="••••••••••••••••" />
                      <Button variant="outline" size="sm">
                        تولید جدید
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>دسترسی API عمومی</Label>
                      <p className="text-sm text-muted-foreground">اجازه دسترسی به API از خارج</p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>حالت توسعه‌دهنده</Label>
                    <p className="text-sm text-muted-foreground">نمایش اطلاعات اضافی برای توسعه‌دهندگان</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
