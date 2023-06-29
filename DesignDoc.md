# 选课管理系统

## 系统概念

管理上海电力大学，数理学院的学生毕业论文选题管理系统

### 前端

React + Redux

### 后端

fastapi +  SQLAlchemy

## 前端架构设计

### 用户界面

1

### 状态管理

使用React状态库

1. 用来管理全局配置(目前只有isDarkMode)的`ConfigSlice`
2. 用来管理用户信息(令牌，身份，名字)的`userSlice`
3. 用来储存选课相关(课题名，指导老师，课题性质，学号，姓名等)
4. TODO

## 后端框架设计

### 数据库设计

users表

| 列属性 | 备注 |
| --- | --- |
|user_id(int)|学生学号，老师/超级用户(todo整型)|
|user_pwd(str)|todo设置默认值|
|user_root(int or str)|check值：a代表超级用户，t代表教师，s代表学生|

teachers表

| 列属性 | 备注 |
| --- | --- |
| teacher_id(int)|设置user_id外键约束(todo)|
| teacher_name(str)| |
| teacher_major(str)|check值:信息与计算科学，应用物理|
| teacher_level(str)|教师职称|
| teacher_origin(bool)|教师是否来自校外，默认false。|

students表

| 列属性 | 备注 |
| --- | --- |
| student_id(int)|设置user_id外键约束(todo)|
| student_name(str)||
| student_major(str)|check值:信息与计算科学，应用物理|
| student_grade(int)|年级|
| student_class(str)|班级|
| student_phone(str)|电话号码|
| student_random(int)|若是第一次登录则产生一个随机数(todo触发器)|

status表(储存各种时间相关的数据)管理员设置

| 列属性 | 备注 |
| --- | --- |
|status_id|序列号(自增)|
|teacher_post_time(datatime)|教师提交题目截止时间/管理员审核题目开始时间，t权限(todo)|
| admin_audit_time(datatime)|管理员审核题目截止时间/学生浏览题目开始时间，a权限，s阅读权限(todo)|
|student_begint_time1(datatime)|学生第一次选题开始时间/学生浏览题目结束时间，s权限(todo)|
| student_end_time1(datatime)|学生第一次选题截止时间/管理员第一次匹配开始时间，a权限(todo)|
| admin_end_time1(datatime)|管理员第一次匹配截止时间/学生第二次选题开始时间，s权限(todo)|
| student_end_time2(datatime)|学生第二次选题截止时间/管理员第二次匹配开始时间，a权限(todo)|
| admin_end_time2|管理员第二次匹配截止时间|
| post_time(datatime)|当前提交时间|
| status_major(str)|设置适用的专业|


 topic

| 列属性 | 备注 |
| --- | --- |
| topic_id(int)|课题编号|
| topic_name(str)|课题名称|
| topic_whether_background(bool)|是否有项目背景,default=false|
| topic_havebg_id(str)|有背景的项目id|
| topic_havebg_else(str)|有背景的项目补充|
| topic_category(str)|'基础类型', '工程实践/应用类型','其他'，课题性质（类别）|
| topic_synopsis(str)|课题简介|
| topic_remark(str)|备注|
| topic_teacher(str)|指导教师名称，来源于teachers表|
| topic_whether_pass(bool)|default=false，a修改权限|
| topic_major(str)|课题适用专业（'信息与计算科学', '应用物理'）|
| topic_time(datatime)|课题提交时间|
| topic_annex(str)|课题提交附件（todo）|

 selection表

| 列属性 | 备注 |
| --- | --- |
| student_id(int)|学生编号|
| topic1_id(int)|第一志愿id|
| topic2_id(int)|第二志愿id|
| topic3_id(int)|第三志愿id|
| topic4_id(int)|第四志愿id|
| select_time(datatime)|选题时间|
| select_status(str)|第几轮选题|

 result表

| 列属性 | 备注 |
| --- | --- |
| student_id(int)|学生编号|
| topic_id(int)|最终选择的课题编号|
| status_1(str)|第几轮选题选中  '1', '2'|
| status_2(str)|选中第几志愿  '1', '2', '3', '4'|
| teacher_topic_mission(str)|教师上传课题任务|
| student_topic_discuss(str)|学生上传专题讨论|

### 身份验证与授权

TODO

### API 设计

**Administrator**

- `get`,`url`=`admin/topic`,管理员用，用来获得所有选课信息
  |课题编号(topic_id)|课题名称(topic_name)|指导老师(topic_teacher)|审核状态(topic_whether_pass)|
  |-|-|-|-|
- `post`,`url`=`admin/end_time/`,管理员用，用于更新选题截至时间
- `post`,`url`=`admin/audit_topic/`,管理员用，用于审核选题课题
- `put`,`url`=`admin/student_info/`,管理员用，用来更新学生
- `put`,`url`=`admin/teacher_info/`,管理员用，用于更新老师的信息
- `put`,`url`=`admin/audit_topic`,管理员用，用于更新：审核老师提交课题是否通过
- `put`,`url`=`todo`,增加一个强制选题的API
- `delete`,`url`=`admin/topic/{topic_id}`,管理员用于删除课题

**Teacher**

- `get`,`url`=`teacher/selected/{teacher_id}`,教师用，用来获得被选的信息
- `post`,`url`=`teacher/topic_info/{teacher_id}`,教师用，用来增加课题信息
- `put`,`url`=`teacher/topic_info/{teacher_id}`,老师用，用于更新课题信息

**Student**

- `get`,`url`=`api/student/topic`,学生用，用来获得所有选课信息
- `get`,`url`=`api/student/topic/{topic_id}`,学生用，用来获得所点击的课题的信息
- `get`,`url`=`student/selection/{student_id}/{select_status}`,学生用，用来获得第几轮选课的志愿信息
- `get`,`utl`=`api/studnet/result/{student_id}`用于获得选课结果表
- `post`,`url`=`student/topic/{student_id}`,学生用，用于选课
- `put`,`url`=`student/topic/{student_id}`,学生用，用于选课

**Public**

- `get`,`url`=`api/public/all_time`,所有人用来获取所有时间配置
