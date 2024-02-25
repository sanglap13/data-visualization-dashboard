import React from 'react';
import { UserDataGrid } from '../../shared';
import UserInfoGrid from './userInfoGrid/UserInfoGrid';

import './usersInfo.css';

const UsersInfo = () => {
  return (
    <div className="users-info">
      <h1>Users Data</h1>
      <div className="data-grid">
        <UserInfoGrid />
      </div>
    </div>
  );
};

export default UsersInfo;
