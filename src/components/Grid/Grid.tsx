import { AgGridReact } from "ag-grid-react";
import data from "../../near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo, useRef, useCallback, useState } from 'react';
import { columnDefs } from "./columns";
import { AgGridReact as AgGridReactType } from 'ag-grid-react/lib/agGridReact';
import { useContext, useEffect } from 'react';
import { Context, IInitialContext } from "../../App";
import { ColumnState } from "ag-grid-community";

const NeoGrid = (): JSX.Element => {
  const gridRef = useRef<AgGridReactType>(null);
  const appContext = useContext<IInitialContext>(Context);
  const [columnState, setColumnState] = useState<ColumnState[]>([]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 3,
      sortable: true,
      filter: true,
    };
  }, []);

  useEffect(()=>{
    if(gridRef.current && gridRef.current.api){
      setColumnState(gridRef.current.columnApi.getColumnState());
    }
  },[])

  useEffect(()=>{
    clearFilters();
  },[appContext.clearFilters])

  const gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: defaultColDef,
    rowData: data
  }

  const clearFilters = useCallback(() => {
    if(gridRef.current && gridRef.current.api){
      gridRef.current.api.setFilterModel(null);
      gridRef.current.columnApi.applyColumnState({state: columnState, applyOrder: true});
    }
  }, []);


  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: '100%' }}>
      <AgGridReact
        ref={gridRef}
        gridOptions={gridOptions}
        rowGroupPanelShow={'always'}
        ensureDomOrder={true}
        enableCellTextSelection={true}
      />
    </div>
  );
};

export default NeoGrid;
