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

1. users表
   1. user_id(用户id)————学生学号，老师/超级用户(todo整型)
   2. user_pwd(用户密码)————todo设置默认值
   3. user_root(用户权限)————check值：a代表超级用户，t代表教师，s代表学生
2. teachers表
   1. teacher_id————设置user_id外键约束(todo)
   2. teacher_name
   3. teacher_major————check值:信息与计算科学，应用物理
   4. teacher_level————教师职称
   5. teacher_origin————教师是否来自校外，默认false。
3. students表
   1. student_id————设置user_id外键约束(todo)
   2. student_name
   3. student_major————check值:信息与计算科学，应用物理
   4. student_grade————年级
   5. student_class————班级
   6. student_phone————电话号码
   7. is_first_login————判断是否第一次登陆(todo触发器)
   8. student_random————若是第一次登录则产生一个随机数(todo触发器)
4. status表(储存各种时间相关的数据)a设置
   1. status_id————序列号(自增)
   2. teacher_post_time————教师提交题目截止时间/管理员审核题目开始时间，t权限(todo)
   3. admin_audit_time————管理员审核题目截止时间/学生浏览题目开始时间，a权限，s阅读权限(todo)
   4. student_begint_time1————学生第一次选题开始时间/学生浏览题目结束时间，s权限(todo)
   5. student_end_time1————学生第一次选题截止时间/管理员第一次匹配开始时间，a权限(todo)
   6. admin_end_time1————管理员第一次匹配截止时间/学生第二次选题开始时间，s权限(todo)
   7. student_end_time2————学生第二次选题截止时间/管理员第二次匹配开始时间，a权限(todo)
   8. admin_end_time2————管理员第二次匹配截止时间
   9. post_time————当前提交时间
   10. status_major————设置适用的专业
5. topic
   1. topic_id————课题编号
   2. topic_name————课题名称
   3. topic_whether_background————是否有项目背景，check：是or否
   4. topic_havebg_id————有背景的项目id
   5. topic_havebg_else————有背景的项目补充
   6. topic_category————'基础类型', '工程实践/应用类型','其他'，课题性质（类别）
   7. topic_synopsis————课题简介
   8. topic_remark————备注
   9. topic_teacher————指导教师(todo)来源于teachers表
   10. topic_whether_pass————是否审核通过'是', '否'，a修改权限
   11. topic_major————课题适用专业（'信息与计算科学', '应用物理'）
   12. topic_time————课题提交时间
   13. topic_annex————课题提交附件（todo）
6. selection表
   1. student_id————学生编号
   2. topic1_id————第一志愿id
   3. topic2_id————第二志愿id
   4. topic3_id————第三志愿id
   5. topic4_id————第四志愿id
   6. select_time————选题时间
   7. select_status————第几轮选题(todo自动显示1or2)
7. result表
   1. student_id————学生编号
   2. topic_id————最终选择的课题编号
   3. status_1————第几轮选题选中  '1', '2'
   4. status_2————选中第几志愿  '1', '2', '3', '4'
   5. teacher_topic_mission————教师上传课题任务
   6. student_topic_discuss————学生上传专题讨论

### 身份验证与授权

TODO

### API 设计

1. `get`,`url`=`TODO`,学生用，用来获得所有选课信息
2. `get`,`url`=`TODO/{class_id}`,学生用，用来获得所点击的课题的信息
3. `get`,`url`=`TODO/{student_id}`,学生用，用来获得所选的信息
4. `get`,`url`=`TODO`,管理员用，用来获得所有选课信息
5. `get`,`url`=`TODO/{teacher_id}`,教师用，用来获得被选的信息
6. `put`,`url`=`TODO/{teacher_id}`,教师用，用来增加选课信息
7. `put`,`url`=`TODO`,管理员用，用来增加学生&教师信息
8. `post`,`url`=`TODO`,管理员用，用于更新选题截至时间
9. `post`,`url`=`TODO`,管理员用，用于审核选题课题
10. `post`,`url`=`TODO/{student_id}`,学生用，用于更改所选课程