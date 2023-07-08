import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ identity, component: Component, ...rest }) => {
  const isAuthenticated = (identity) => {
    // 根据您的身份验证逻辑判断用户是否已登录并拥有合适的身份
    // 这可能涉及到检查用户的 access_token 或其他认证信息
    // 根据您的具体需求来实现身份验证逻辑
    // 返回 true 表示已验证，返回 false 表示未验证
    if (identity === 0 && isAdmin) {
      return true;
    } else if (identity === 1 && isTeacher) {
      return true;
    } else if (identity === 2 && isStudent) {
      return true;
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated(identity) ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" replace />
        )
      }
    />
  );
};

export default PrivateRoute;
