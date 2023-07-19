import { AgGridReact } from "ag-grid-react";
import data from "../../near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState, useMemo } from 'react';
import { columnDefs } from "./columns";

const NeoGrid = (): JSX.Element => {
  const [rowData, setRowData] = useState();

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      sortable: true,
      filter: true,
    };
  }, []);


  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: '100%' }}>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={'always'}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default NeoGrid;
