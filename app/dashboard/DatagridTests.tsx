import * as React from 'react';
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

export default function DatagridTest({rows}:{rows:any}) {

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ];

    return (
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      );

};
