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
