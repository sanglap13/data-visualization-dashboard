import React, { useCallback, useEffect, useState } from 'react';
import { UserDataGrid } from '../../../shared';
import { GridColDef } from '@mui/x-data-grid';
import { UserDataGridInfo } from '../../../../@types/dataGrid.types';
import { api } from '../../../../utils/api/api';

const dataGridColumns: GridColDef[] = [
  { field: 'username', headerName: 'Name', flex: 1 },
  { field: 'zone', headerName: 'zone', flex: 1 },
  { field: 'device_brand', headerName: 'device_brand', flex: 1 },
  { field: 'sdk_int', headerName: 'sdk_int', flex: 1 },
  { field: 'vehicle_brand', headerName: 'vehicle_brand', flex: 1 },
  { field: 'vehicle_cc', headerName: 'vehicle_cc', flex: 1 },
];

const UserInfoGrid = () => {
  const [dataGriduserInfo, setDataGridUserInfo] = useState<UserDataGridInfo[]>(
    []
  );
  //fetching data from api or sessionStorage
  const getUserData = useCallback(async () => {
    const storedData = sessionStorage.getItem('userData');
    if (storedData !== null) {
      const userData = await JSON.parse(storedData);
      const { data } = userData;
      setDataGridUserInfo(data);
      console.log('sessionStorage2', userData);
    } else {
      const userData = await api();
      console.log('f', userData);
      //   const { data } = userData;
      //   setDataGridUserInfo(data);
      console.log('apiCall2', userData);
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
