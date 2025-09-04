"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Shield,
  Mail,
  Calendar,
  UserCheck,
  UserX,
  Settings,
  Lock,
  Eye,
  Download,
} from "lucide-react"

const users = [
  {
    id: 1,
    name: "یوسف احمدی",
    email: "yosef@example.com",
    role: "مدیر کل",
    status: "فعال",
    lastLogin: "1403/08/15",
    articles: 45,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "علی محمدی",
    email: "ali@example.com",
    role: "نویسنده",
    status: "فعال",
    lastLogin: "1403/08/14",
    articles: 23,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "سارا احمدی",
    email: "sara@example.com",
    role: "ویراستار",
    status: "غیرفعال",
    lastLogin: "1403/08/10",
    articles: 12,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "محمد رضایی",
    email: "mohammad@example.com",
    role: "نویسنده",
    status: "فعال",
    lastLogin: "1403/08/13",
    articles: 18,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const roleColors = {
  "مدیر کل": "bg-red-100 text-red-800",
  نویسنده: "bg-blue-100 text-blue-800",
  ویراستار: "bg-green-100 text-green-800",
  مشترک: "bg-gray-100 text-gray-800",
}

export function UsersManager() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.includes(searchTerm) || user.email.includes(searchTerm)
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    return matchesSearch && matchesRole && matchesStatus
  })

  const getRoleBadge = (role: string) => {
    const colorClass = roleColors[role as keyof typeof roleColors] || "bg-gray-100 text-gray-800"
    return <Badge className={`${colorClass} hover:${colorClass}`}>{role}</Badge>
  }

  const getStatusBadge = (status: string) => {
    return status === "فعال" ? (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
        <UserCheck className="w-3 h-3 ml-1" />
        فعال
      </Badge>
    ) : (
      <Badge variant="secondary">
        <UserX className="w-3 h-3 ml-1" />
        غیرفعال
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">مدیریت کاربران</h1>
          <p className="text-muted-foreground mt-2">مدیریت کاربران، نقش‌ها و دسترسی‌ها</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="w-4 h-4" />
            خروجی Excel
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Settings className="w-4 h-4" />
            تنظیمات کاربران
          </Button>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Plus className="w-4 h-4" />
                کاربر جدید
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>ایجاد کاربر جدید</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">نام</Label>
                    <Input id="firstName" placeholder="نام" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">نام خانوادگی</Label>
                    <Input id="lastName" placeholder="نام خانوادگی" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input id="email" type="email" placeholder="example@domain.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">رمز عبور</Label>
                  <Input id="password" type="password" placeholder="رمز عبور قوی" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">نقش</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب نقش" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="subscriber">مشترک</SelectItem>
                      <SelectItem value="author">نویسنده</SelectItem>
                      <SelectItem value="editor">ویراستار</SelectItem>
                      <SelectItem value="admin">مدیر کل</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="sendEmail">ارسال ایمیل خوش‌آمدگویی</Label>
                  <Switch id="sendEmail" defaultChecked />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    انصراف
                  </Button>
                  <Button onClick={() => setIsCreateDialogOpen(false)}>ایجاد کاربر</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">کل کاربران</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% از ماه گذشته</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">کاربران فعال</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">987</div>
            <p className="text-xs text-muted-foreground">80% از کل کاربران</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">نویسندگان</CardTitle>
            <Edit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+3 نفر این ماه</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ورود امروز</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+23% از دیروز</p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="filters" className="space-y-4">
            <TabsList>
              <TabsTrigger value="filters">فیلترها</TabsTrigger>
              <TabsTrigger value="bulk">عملیات گروهی</TabsTrigger>
              <TabsTrigger value="permissions">مجوزها</TabsTrigger>
            </TabsList>

            <TabsContent value="filters" className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="جستجو در کاربران..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                </div>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="نقش" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">همه نقش‌ها</SelectItem>
                    <SelectItem value="مدیر کل">مدیر کل</SelectItem>
                    <SelectItem value="نویسنده">نویسنده</SelectItem>
                    <SelectItem value="ویراستار">ویراستار</SelectItem>
                    <SelectItem value="مشترک">مشترک</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="وضعیت" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">همه وضعیت‌ها</SelectItem>
                    <SelectItem value="فعال">فعال</SelectItem>
                    <SelectItem value="غیرفعال">غیرفعال</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="bulk" className="space-y-4">
              <div className="flex items-center gap-4">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Mail className="w-4 h-4" />
                  ارسال ایمیل گروهی
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <UserCheck className="w-4 h-4" />
                  فعال‌سازی گروهی
                </Button>
                <Button variant="outline" className="gap-2 text-destructive bg-transparent">
                  <UserX className="w-4 h-4" />
                  غیرفعال‌سازی گروهی
                </Button>
                <Button variant="outline" className="gap-2 text-destructive bg-transparent">
                  <Trash2 className="w-4 h-4" />
                  حذف گروهی
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="permissions" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">مجوزهای مدیر کل</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>مدیریت کاربران</span>
                      <Badge variant="default">کامل</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>مدیریت محتوا</span>
                      <Badge variant="default">کامل</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>تنظیمات سیستم</span>
                      <Badge variant="default">کامل</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">مجوزهای ویراستار</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>ویرایش محتوا</span>
                      <Badge variant="default">کامل</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>انتشار محتوا</span>
                      <Badge variant="default">کامل</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>مدیریت نظرات</span>
                      <Badge variant="secondary">محدود</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">مجوزهای نویسنده</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>ایجاد محتوا</span>
                      <Badge variant="default">کامل</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>ویرایش محتوای خود</span>
                      <Badge variant="default">کامل</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>انتشار محتوا</span>
                      <Badge variant="secondary">نیاز تایید</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Enhanced Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>لیست کاربران ({filteredUsers.length} نفر)</CardTitle>
          <CardDescription>مدیریت اطلاعات و دسترسی‌های کاربران</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">کاربر</TableHead>
                <TableHead className="text-right">ایمیل</TableHead>
                <TableHead className="text-right">نقش</TableHead>
                <TableHead className="text-right">وضعیت</TableHead>
                <TableHead className="text-right">آخرین ورود</TableHead>
                <TableHead className="text-right">مقالات</TableHead>
                <TableHead className="text-right">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground">ID: {user.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{user.lastLogin}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.articles} مقاله</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedUser(user)
                            setIsEditDialogOpen(true)
                          }}
                        >
                          <Edit className="w-4 h-4 ml-2" />
                          ویرایش
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 ml-2" />
                          مشاهده پروفایل
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Shield className="w-4 h-4 ml-2" />
                          تغییر نقش
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Lock className="w-4 h-4 ml-2" />
                          بازنشانی رمز عبور
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="w-4 h-4 ml-2" />
                          ارسال ایمیل
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          {user.status === "فعال" ? (
                            <>
                              <UserX className="w-4 h-4 ml-2" />
                              غیرفعال‌سازی
                            </>
                          ) : (
                            <>
                              <UserCheck className="w-4 h-4 ml-2" />
                              فعال‌سازی
                            </>
                          )}
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

      {/* Edit User Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>ویرایش کاربر</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedUser.avatar || "/placeholder.svg"} alt={selectedUser.name} />
                  <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                  تغییر تصویر
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="editFirstName">نام</Label>
                  <Input id="editFirstName" defaultValue={selectedUser.name.split(" ")[0]} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="editLastName">نام خانوادگی</Label>
                  <Input id="editLastName" defaultValue={selectedUser.name.split(" ")[1]} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="editEmail">ایمیل</Label>
                <Input id="editEmail" type="email" defaultValue={selectedUser.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="editRole">نقش</Label>
                <Select defaultValue={selectedUser.role}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="مشترک">مشترک</SelectItem>
                    <SelectItem value="نویسنده">نویسنده</SelectItem>
                    <SelectItem value="ویراستار">ویراستار</SelectItem>
                    <SelectItem value="مدیر کل">مدیر کل</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="editStatus">وضعیت فعال</Label>
                <Switch id="editStatus" defaultChecked={selectedUser.status === "فعال"} />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  انصراف
                </Button>
                <Button onClick={() => setIsEditDialogOpen(false)}>ذخیره تغییرات</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
