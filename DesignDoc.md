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

1. user表
   1. TODO
   2. TODO
2. student表
   1. TODO
   2. TODO
3. teacher表
4. TODO
   
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