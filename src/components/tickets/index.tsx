import * as React from 'react';
import Box from '@mui/material/Box';
import { StyledDataGrid } from './styled';
import { columns, rowsData } from './helper';

const TicketsTable = () => {
  return (
    <Box>
      <StyledDataGrid
        rows={[...rowsData]}
        rowHeight={92}
        columns={[...columns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default TicketsTable;
