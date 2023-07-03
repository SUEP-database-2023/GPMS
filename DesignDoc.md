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

| 列名 | 备注 |
| --- | --- |
|id|自增主键id|
|number(int)|用户id|
|password|用户密码|
|role(int)|用户权限|

teachers表

| 列属性 | 备注 |
| --- | --- |
|id|自增主键id|
|user_id(int)|users外键id|
|number(str)|教师工号|
|name(str)|教师姓名|
|major(str)|教师专业|
|level(str)|教师职称|
|origin(bool)|教师是否来自校外，默认false。|

students表

| 列属性 | 备注 |
| --- | --- |
|id|自增主键id|
|user_id(int)|users外键id|
|number(str)|学生学号|
|name(str)|学生姓名|
|major(str)|学生专业|
|grade(str)|年级|
|team(str)|班级|
|phone(str)|电话号码|
|random(int)|随机数|

status表(储存各种时间相关的数据)管理员设置

| 列属性 | 备注 |
| --- | --- |
|id|自增主键id|
|teacher_post_time(datatime)|教师提交题目截止时间/管理员审核题目开始时间|
|admin_audit_time(datatime)|管理员审核题目截止时间/学生浏览题目开始时间|
|student_begin_time1(datatime)|学生第一次选题开始时间/学生浏览题目结束时间|
|student_end_time1(datatime)|学生第一次选题截止时间/管理员第一次匹配开始时间|
|admin_end_time1(datatime)|管理员第一次匹配截止时间/学生第二次选题开始时间|
|student_end_time2(datatime)|学生第二次选题截止时间/管理员第二次匹配开始时间|
|admin_end_time2|管理员第二次匹配截止时间|
|post_time(datatime)|当前提交时间|
|major(str)|设置适用的专业|

topic

| 列属性 | 备注 |
| --- | --- |
|id|自增主键id|
|number|课题编号|
|name(str)|课题名称|
|whether_background(bool)|是否有项目背景,default=false|
|have_bg_id(str)|有背景的项目id|
|have_bg_else(str)|有背景的项目补充|
|category(str)|课题性质（类别）|
|synopsis(str)|课题简介|
|remark(str)|备注|
|user_id(int)|教师ID|
|teacher_name(str)|指导教师名称|
|whether_pass(bool)|是否审核通过,default=false|
|major(str)|课题适用专业|
|topic_time(datatime)|课题提交时间|

selection表

| 列属性 | 备注 |
| --- | --- |
|id|自增主键id|
|user_id(int)|学生ID|
|student_number(str)|学生学号|
|choice1_number(str)|第一志愿课题编号|
|choice1_id(int)|第一志愿id|
|choice2_number(str)|第二志愿课题编号|
|choice2_id(int)|第二志愿id|
|choice3_number(str)|第三志愿课题编号|
|choice3_id(int)|第三志愿id|
|choice4_number(str)|第四志愿课题编号|
|choice4_id(int)|第四志愿id|
|time(DateTime)|选题时间|
|round(str)|第几轮选题|

 result表

| 列属性 | 备注 |
| --- | --- |
|id|自增主键id|
|user_id(int)|学生ID|
|student_number(str)|学生学号|
|topic_id(int)|课题ID|
|topic_number(str)|课题编号|
|round(str)|选中轮次|
|choice(str)|选中志愿|

### 身份验证与授权

TODO

### API 设计

**Administrator**

- `post`,`url`=`admin/add/teacher`,管理员用，用于新增单个教师
- `post`,`url`=`admin/add/teachers`,管理员用，用于新增多个教师
- `post`,`url`=`admin/add/student`,管理员用，用于新增单个学生
- `post`,`url`=`admin/add/students`,管理员用，用于新增多个学生
- `get`,`url`=`admin/topic`,管理员用，用来获得所有选课信息
  |课题编号(topic_id)|课题名称(topic_name)|指导老师(topic_teacher)|审核状态(topic_whether_pass)|
  |-|-|-|-|

- `put`,`url`=`admin/update/audit_topic`,管理员用，用于更新：审核老师提交课题是否通过


- `put`,`url`=`admin/update/student`,管理员用，用来更新学生
- `put`,`url`=`admin/update/teacher`,管理员用，用于更新老师的信息


- `put`,`url`=`admin/update/end_time`,管理员用，用于更新选题截至时间
- `put`,`url`=`todo`,增加一个强制选题的API

- `delete`,`url`=`admin/topic/{topic_id}`,管理员用于删除课题
**Teacher**

- `get`,`url`=`teacher/selected/{teacher_id}`,教师用，用来获得被选的信息
  |输出数据|列名|
  |-|-|
  |课题编号|topic_id|
  |课题名称|topic_name|
  |学生学号|student_id|
  |学生姓名|student_id|
- `post`,`url`=`teacher/topic_info/{teacher_id}`,教师用，用来增加课题信息
- `put`,`url`=`teacher/topic_info/{teacher_id}`,老师用，用于更新课题信息

**Student**

- `get`,`url`=`api/student/topic`,学生用，用来获得所有选课信息
  |输出数据|列名|
  |-|-|
  |课题编号|topic_id|
  |课题名称|topic_name|

- `get`,`url`=`api/student/topic/{topic_id}`,学生用，用来获得所点击的课题的信息
  |输出数据|列名|
  |-|-|
  |课题简介|topic_synopsis|
  |备注|topic_remark|

- `get`,`url`=`student/selection/{student_id}/{select_status}`,学生用，用来获得第几轮选课的志愿信息
  |输出数据|列名|
  |-|-|
  |第一志愿|topic1_id|
  |第二志愿|topic2_id|
  |第三志愿|topic3_id|
  |第四志愿|topic4_id|
- `get`,`utl`=`api/studnet/result/{student_id}`用于获得选课结果表

  |说明|输出数据|
  |---|---|
  |学生编号|student_id|
  |课题编号|topic_id|

- `post`,`url`=`student/topic/{student_id}`,学生用，用于选课
- `put`,`url`=`student/topic/{student_id}`,学生用，用于选课

**Public**

- `get`,`url`=`api/public/all_time`,所有人用来获取所有时间配置

  |说明|输出数据|
  |---|---|
  |教师提交课题截止时间|teacher_post_time|
  |管理员审核题目截止时间|admin_audit_time|
  |学生浏览题目截止时间|student_begin_time1|
  |学生第一次选题截止时间|student_end_time1|
  |管理员第一次匹配截止时间|admin_end_time1|
  |学生第二次选题截止时间|student_end_time2|
  |管理员第二次匹配截止时间|admin_end_time2|
  |当前提交时间|post_time|
  |适用的专业|status_major|
