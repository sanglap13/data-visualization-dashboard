import React, { useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { UserDataGridInfo } from '../../../@types/dataGrid.types';
import { api } from '../../../utils/api/api';

const CustomExportToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];
const columns: GridColDef[] = [
  { field: 'username', headerName: 'Name', flex: 1 },
  { field: 'zone', headerName: 'zone', flex: 1 },
  { field: 'device_brand', headerName: 'device_brand', flex: 1 },
  { field: 'sdk_int', headerName: 'sdk_int', flex: 1 },
  { field: 'vehicle_brand', headerName: 'vehicle_brand', flex: 1 },
  { field: 'vehicle_cc', headerName: 'vehicle_cc', flex: 1 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const UserDataGrid = () => {
  const [userInfo, setUserInfo] = useState<UserDataGridInfo[]>([]);
  //fetching data from api or sessionStorage
  const getUserData = useCallback(async () => {
    const storedData = sessionStorage.getItem('userData');
    if (storedData !== null) {
      const userData = await JSON.parse(storedData);
      const { data } = userData;
      setUserInfo(data);
      console.log('sessionStorage2', userData);
    } else {
      const userData = await api();
      //   const { data } = userData;
      //   setUserInfo(data);
      console.log('apiCall2', userData);
    }
  }, []);
  //fetching data from api or sessionStorage
  useEffect(() => {
    getUserData();
  }, [getUserData]);
  return (
    <div>
      {' '}
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid<UserDataGridInfo>
          getRowId={(row) => row.username}
          rows={userInfo}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          slots={{
            toolbar: CustomExportToolbar,
          }}
        />
      </Box>
    </div>
  );
};

export default UserDataGrid;
