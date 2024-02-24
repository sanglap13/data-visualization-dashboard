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

const UserDataGrid: React.FC<any> = ({ dataGridColumns, dataGriduserInfo }) => {
  return (
    <div>
      <Box sx={{ height: 700, width: '100%' }}>
        <DataGrid<UserDataGridInfo>
          getRowId={(row) => row.username}
          rows={dataGriduserInfo}
          columns={dataGridColumns}
          //   initialState={{
          //     pagination: {
          //       paginationModel: {
          //         pageSize: 5,
          //       },
          //     },
          //   }}
          //   pageSizeOptions={[5]}
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
