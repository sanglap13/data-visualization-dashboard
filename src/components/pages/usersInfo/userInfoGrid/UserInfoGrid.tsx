import React, { useCallback, useEffect, useState } from 'react';
import { UserDataGrid } from '../../../shared';
import { GridColDef } from '@mui/x-data-grid';
import { UserDataGridInfo } from '../../../../@types/dataGrid.types';
import { api } from '../../../../utils/api/api';
import { DATAGRID_COLUMNS } from '../../../../constants/userDataGrid';

const dataGridColumns: GridColDef[] = DATAGRID_COLUMNS;

const UserInfoGrid = () => {
  const [dataGriduserInfo, setDataGridUserInfo] = useState<UserDataGridInfo[]>(
    []
  );
  //fetching data from api or sessionStorage
  const getUserData = useCallback(async () => {
    const storedData = sessionStorage.getItem('userData');
    let userData;

    if (storedData !== null) {
      userData = await JSON.parse(storedData);
    } else {
      userData = await api();
    }

    if (userData && userData.data) {
      const { data } = userData;
      setDataGridUserInfo(data);
      console.log('userData:', userData);
    } else {
      console.error('userData is undefined or does not contain data');
    }
  }, []);

  //fetching data from api or sessionStorage
  useEffect(() => {
    getUserData();
  }, [getUserData]);
  return (
    <div>
      <UserDataGrid
        dataGridColumns={dataGridColumns}
        dataGriduserInfo={dataGriduserInfo}
      />
    </div>
  );
};

export default UserInfoGrid;
