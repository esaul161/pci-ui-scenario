import { ColDef } from "ag-grid-community";
import { stringFilter, numberFilter, dateFilter } from "./filters";

export const columnDefs: ColDef[] = [
    { field: "designation", headerName: "Designation", sortable: true, filter: true, filterParams: stringFilter },
    { field: "discovery_date", headerName: "Discovery Date", sortable: true, 
    cellRenderer: (data:any) => {
      return data.value ? (new Date(data.value)).toLocaleDateString() : '';
  },
    filter: 'agDateColumnFilter', filterParams: dateFilter},
    { field: "h_mag", headerName: "H (mag)", sortable: true, filter: 'agNumberColumnFilter', filterParams: numberFilter},
    { field: "moid_au", headerName: "MOID (au)", sortable: true, filter: 'agNumberColumnFilter', filterParams: numberFilter },
    { field: "q_au_1", headerName: "q (au)", sortable: true, filter: 'agNumberColumnFilter', filterParams: numberFilter },
    { field: "q_au_2", headerName: "Q (au)", sortable: true, filter: 'agNumberColumnFilter', filterParams: numberFilter },
    { field: "period_yr", headerName: "Period (yr)", sortable: true, filter: 'agNumberColumnFilter', filterParams: numberFilter },
    { field: "i_deg", headerName: "Inclination (deg)", sortable: true, filter: 'agNumberColumnFilter', filterParams: numberFilter },
    { field: "pha", headerName: "Potentially Hazardous", sortable: true,
    cellRenderer: (data:any) => {
        return data.value === 'Y' ? 'Yes' : data.value === 'N' ? 'No' : '';
    }, 
    filter: true, filterParams: stringFilter },
    { field: "orbit_class", headerName: "Orbit Class", enableRowGroup: true, sortable: true, filter: true, filterParams: stringFilter },
  ];